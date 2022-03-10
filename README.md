<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

## Expense Manager 

Requirements:
-	Solution should be submitted via GitHub repository within 36 hours
-	Tools: Laravel 7 or higher, MySQL, Vue js
-	Create necessary migrations for Users/Roles/Expense Categories/Expenses

Features:
-	User Management
-	User Roles and permissions
-	Expense Management
-	Keeps track of user’s expenses
-	Dashboard
-	Display chart of total expense per category

Roles (Default):
1.	Administrator
   a.	Can create/update/delete user
   b.	Can create/update/delete Expense Category
   c.	Can create/update/delete new Expense
   d.	Can access User Management
2.	User
   a.	Can change password
   b.	Can create/update/delete own expenses


1.	Dashboard
   a.	Displays all categories and total per category
   b.	Accessible by all user roles



## Getting Started
```
   php artisan migrate --seed
```


## Credentials
```
   email: superadmin@purplebug.com
   password: password
```


