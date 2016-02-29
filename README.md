
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

## Deploying to Heroku
 1. heroku login
 2. heroku git:remote -a get-off-the-crock-pot
 3. git add .
 4. git commit -am "deploying to heroku"
 5. git push heroku master
 6. heroku config:set TWILIO_PHONE=<phone>
 7. heroku config:set TWILIO_ACCOUNT_SID=<account sid>
 8. heroku config:set TWILIO_AUTH_TOKEN=<auth token>
 9. heroku config:set SECRET=<secret>

# Create the Database
 1. heroku addons | grep POSTGRES
 2. heroku addons:create heroku-postgresql:hobby-dev

# Migrate and Seed the Database
 1. heroku config
 2. Copy the DATABASE_URL
 3. Paste the DATABASE_URL into the .env after DATABASE_URL
 4. knex migrate:rollback --env production
 5. knex migrate:latest --env production
 6. knex seed:run --env production
