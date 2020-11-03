--create database "calculations-db"

--calculations table
CREATE TABLE "calculations"
(
    "id" SERIAL PRIMARY KEY,
    "first-number" VARCHAR NOT NULL,
    "operator-symbol" VARCHAR NOT NULL,
    "second-number" VARCHAR NOT NULL,
    "answer" VARCHAR NOT NULL,
    "timestamp" TIMESTAMP
);