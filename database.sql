CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "person_id" INT REFERENCES person
);


-- you may need to change the person_id to match your db
INSERT INTO "item" ("description", "image_url", "person_id")
	VALUES ('cat', 'https://via.placeholder.com/50x50' , '1'),
			('pencil', 'https://via.placeholder.com/50x50' , '1'), 
			('pen', 'https://via.placeholder.com/50x50' , '1');