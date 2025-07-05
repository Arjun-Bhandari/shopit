CREATE TYPE "public"."user_role" AS ENUM('user', 'admin', 'staff');--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "role" "user_role" DEFAULT 'user' NOT NULL;