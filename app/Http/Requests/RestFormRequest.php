<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

abstract class RestFormRequest extends FormRequest {

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize() {
        return true;
    }

    public function getRules(): Array{
        switch (request()->method()) {
        case 'GET':
            return $this->getGetRules();
        case 'POST':
            return $this->getPostRules();
        case 'PUT':
            return $this->getPutRules();
        case 'PATCH':
            return $this->getPatchRules();
        case 'DELETE':
            return $this->getDeleteRules();
        default:
            return [];
        }
    }

    protected function getGetRules(): Array{
        return [];
    }

    protected function getPostRules(): Array{
        return [];
    }

    protected function getPutRules(): Array{
        return [];
    }

    protected function getPatchRules(): Array{
        return [];
    }

    protected function getDeleteRules(): Array{
        return [];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules() {
        return $this->getRules();
    }

    public function getFormData(): Array{
        return $this->only($this->getFormKeys());
    }

    public function getFormKeys(): Array{
        switch (request()->method()) {
        case 'GET':
            return $this->getGetKeys();
        case 'POST':
            return $this->getPostKeys();
        case 'PUT':
            return $this->getPutKeys();
        case 'PATCH':
            return $this->getPatchKeys();
        case 'DELETE':
            return $this->getDeleteKeys();
        default:
            return [];
        }
    }

    protected function getGetKeys(): Array{
        return [];
    }

    protected function getPostKeys(): Array{
        return [];
    }

    protected function getPutKeys(): Array{
        return [];
    }

    protected function getPatchKeys(): Array{
        return [];
    }

    protected function getDeleteKeys(): Array{
        return [];
    }

    protected function reject(Validator $validator, $statusCode = 422) {
        return $this->failedValidation($validator, $statusCode);
    }

    protected function failedValidation(Validator $validator, $statusCode = 422) {
        throw new HttpResponseException(response()->json([
            "statusCode" => $statusCode,
            "status"     => false,
            "message"    => 'The given data was invalid',
            "errors"     => $this->getErrorMessages($validator),
        ], $statusCode));
    }

    private function getErrorMessages($validator) {
        $formattedErrors = [];
        $errors          = $validator->errors()->getMessages();
        foreach ($errors as $field => $error) {
            $formattedErrors[$field] = $error[0];
        }

        return $formattedErrors;
    }

}
