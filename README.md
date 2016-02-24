
## HI!!!

## HEY JERKS

## Creating your database
 1. createdb food_planner
 2. add .env file with 'DEV_DB=postgres://localhost/food_planner'
 3. knex migrate:latest
 4. knex seed:run
 5. ALTER SEQUENCE recipe_id_seq RESTART WITH 1453;
