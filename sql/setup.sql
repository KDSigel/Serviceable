-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLES IF EXISTS ast_danger;

CREATE TABLE ast_danger (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    user TEXT NOT NULL,
    phone_num INT NOT NULL
)