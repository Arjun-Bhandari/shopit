CREATE TABLE "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"phone" integer,
	"email" text NOT NULL,
	CONSTRAINT "users_table_phone_unique" UNIQUE("phone"),
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
