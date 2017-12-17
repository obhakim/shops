# Back-end : PHP Laravel

> REST API for shops

to run the back-end :
- make sure to install composer in you machine from [composer](https://getcomposer.org/download)
 and include it globally in your <b>PATH</b> system environment
- make sure to install Mysql server
 
 ## Install dependencies
 in the server root folder ,type in the terminal :
  ```
    # composer install 
  ```
  
 ## Config the Database
 - create you database <b>shops</b> and config the connection [here](.env)
 - create the shops table manually or with this migration [here](database/migrations/2017_12_13_143134_create_shops_table.php)
  ```
     # php artisan migrate:fresh 
   ```
 - import the shops table data [from](database/shops.sql)
     
 ## Run the server
 make sure running Mysql server, in the terminal type :
  ``` 
    # php artisan serve
  ``` 
  