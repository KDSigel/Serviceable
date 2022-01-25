-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLES IF EXISTS phonelist;

CREATE TABLE phonelist (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    phone_num INT NOT NULL
)