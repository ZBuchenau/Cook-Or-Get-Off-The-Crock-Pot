
## HI!!!

## HEY JERKS

## Creating your database
 1. createdb food_planner
 2. add .env file with 'DEV_DB=postgres://localhost/food_planner'
 3. knex migrate:latest
 4. knex seed:run
 5. psql food_planner
 6. ALTER SEQUENCE recipes_id_seq RESTART WITH 10;
 7. ALTER SEQUENCE ingredients_id_seq RESTART WITH 74;
 8. ALTER SEQUENCE users_id_seq RESTART WITH 6;
