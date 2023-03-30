DROP TABLE IF EXISTS "user";


CREATE TABLE IF NOT EXISTS "user" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "pseudo" text NOT NULL,
  "firstname" text NOT NULL,  
  "lastname" text NOT NULL,
  "email" text NOT NULL,
  "password" text NOT NULL,
  "role" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);


DROP TABLE IF EXISTS "poll";


CREATE TABLE IF NOT EXISTS "poll" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" text NOT NULL, 
  "question" text NOT NULL,
  "choice_a" text NOT NULL,
  "choice_b" text NOT NULL,
  "result_a" INT,
  "result_b" INT,
  "user_id" INTEGER REFERENCES "user"("id"),
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);


CREATE TABLE IF NOT EXISTS "version" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz,
  );