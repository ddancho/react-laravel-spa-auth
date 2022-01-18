# Laravel api

The api backend was bootstrapped as docker containers : curl -s https://laravel.build/api | bash

Meilisearch and selenium are disabled.

Redis added as session driver.

To start the project cd into project folder/api

composer install to recreate vendor folder (you can delete composer.lock if problems reports)

./vendor/bin/sail up -d to start containers
