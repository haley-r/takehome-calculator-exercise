--create database "calculations-db"

--calculations table
CREATE TABLE "calculations"
(
    "id" SERIAL PRIMARY KEY,
    "firstNumber" VARCHAR NOT NULL,
    "operatorSymbol" VARCHAR NOT NULL,
    "secondNumber" VARCHAR NOT NULL,
    "answer" VARCHAR NOT NULL,
    "timestamp" TIMESTAMP
);