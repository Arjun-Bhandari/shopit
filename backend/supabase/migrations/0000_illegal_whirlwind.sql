CREATE TABLE "users_table" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"phone" integer,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "users_table_email_unique" UNIQUE("email"),
	CONSTRAINT "users_table_phone_unique" UNIQUE("phone")
);
