<?php

namespace App\Rules\Misc;

use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\Validation\Rule;

class MakeColumnUnique implements Rule {

    protected $table;    
    protected $column;
    protected $exceptions;
    protected $message = null;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(String $table, String $column) {
        $this->table = $table;
        $this->column = $column;
        $this->exceptions = [];
        
    }

    public function addCondition(String $columnException, String $exceptionCondition,  ?String $exceptionValue = null) {
        array_push($this->exceptions, [
            'column' => $columnException,
            'condition' => $exceptionCondition,
            'value' => $exceptionValue,
        ]);

        return $this;
    }

    public function usesSoftDelete() {
        array_push($this->exceptions, [
            'column' => "deleted_at",
            'condition' => "is null",
            'value' => null,
        ]);

        return $this;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value) {
        $query = DB::table($this->table)
            ->whereNotNull($this->column)
            ->where($this->column, $value);

        if (count($this->exceptions) > 0) {
            $query = $this->addConditions($query);
        }
        return !$query->exists();
    }

    protected function addConditions($query) {
        foreach ($this->exceptions as $exception) {
            if (strtolower($exception['condition']) == 'is not null'
            || ($exception['condition'] == "!=" && $exception['value'] == null)) {
                $query->whereNotNull($exception['column']);

            } else if (strtolower($exception['condition']) == 'is null'
            || ($exception['condition'] == "=" && $exception['value'] == null)) {
                $query->whereNull($exception['column']);

            } else {   
                $query->where(
                    $exception['column'],
                    $exception['condition'],
                    $exception['value']
                );
            }
        }

        return $query;
    }

    public function useMessage(String $message) {
        $this->message = $message;

        return $this;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message() {
        return $this->message ?: "The $this->column has already been taken.";
    }
}
