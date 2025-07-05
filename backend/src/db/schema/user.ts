import { pgEnum, integer, pgTable, uuid, serial, text, timestamp } from 'drizzle-orm/pg-core';
export const userRoleEnum = pgEnum('user_role', [
  'user',          // Regular customers
  'admin',         // Site owner/Vendor (pharmacy owner)
  'staff'          // Store staff/support
]);
export const usersTable = pgTable('users_table', {
  id: uuid('id').primaryKey().notNull(),
  email: text('email').notNull().unique(),
  role:userRoleEnum('role').default("user").notNull(),
  name: text('name').notNull(),
  phone:integer('phone').unique(),
  created_at:timestamp("created_at").defaultNow()

});


export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

