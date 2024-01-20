import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const conString = 'postgres://postgres:root@localhost:5432/website';

export const migrationConnection = postgres(conString, {
	max: 1
});

const queryClient = postgres(conString, {
	database: import.meta.env.POSTGRES_DATABASE,
	user: import.meta.env.POSTGRES_USER,
	password: import.meta.env.POSTGRES_PASSWORD,
	host: import.meta.env.POSTGRES_HOST
});

export const conn = drizzle(queryClient);
export const migrationClient = drizzle(migrationConnection);
