import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const conString = import.meta.env.VITE_POSTGRES_URL;

export const migrationConnection = postgres(conString, {
	max: 1
});

const queryClient = postgres(conString, {
	database: import.meta.env.VITE_POSTGRES_DATABASE,
	user: import.meta.env.VITE_POSTGRES_USER,
	password: import.meta.env.VITE_POSTGRES_PASSWORD,
	host: import.meta.env.VITE_POSTGRES_HOST,
	ssl: import.meta.env.VITE_POSTGRES_SSL,
	connect_timeout: 60 * 10,
	idle_timeout: 60 * 10
});

export const conn = drizzle(queryClient);
export const migrationClient = drizzle(migrationConnection);
