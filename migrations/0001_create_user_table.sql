CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username varchar(20) UNIQUE NOT NULL,
    first_name varchar,
    surname varchar,
    birth_date date
);
