import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users_table', {
  id: uuid('id').primaryKey().notNull(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  phone: integer('phone').unique(),
  created-at:timestamp("created_at").defaultNow()

});


export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

