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

--sample data
INSERT INTO "calculations"
    ("first-number", "operator-symbol", "second-number",
    "answer", "timestamp")
VALUES
    ('2', '+', '3', '5', NOW() ),
    ('2', '-', '3', '-1', NOW() ),
    ('2', '*', '3', '6', NOW() ),
    ('2', '/', '3', '.66666', NOW() )
        ;