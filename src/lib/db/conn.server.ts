import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import 'dotenv/config';

const conString = process.env.POSTGRES_URL!;

export const migrationConnection = postgres(conString!, {
	max: 1
});

const queryClient = postgres(conString, {
	database: process.env.POSTGRES_DATABASE!,
	user: process.env.POSTGRES_USER!,
	password: process.env.POSTGRES_PASSWORD!,
	host: process.env.POSTGRES_HOST!
});

export const conn = drizzle(queryClient);
export const migrationClient = drizzle(migrationConnection);
