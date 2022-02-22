## Api

The api backend was bootstrapped on linux mint as laravel docker containers with :

curl -s https://laravel.build/api | bash

Meilisearch and selenium are disabled.

Redis added as session driver.

To start navigate to project folder/api

Copy / paste .env.example and rename to .env

Write value for the following keys: DB_PASSWORD

To recreate vendor folder (you can delete composer.lock if problems reports) execute command :

composer install

Build the docker containers with command (on linux) :

./vendor/bin/sail build

Then to start the backend side execute command (on linux) :

./vendor/bin/sail up -d

To create database tables execute command (on linux) :

./vendor/bin/sail artisan migrate

To close the docker containers execute command (on linux):

./vendor/bin/sail down
