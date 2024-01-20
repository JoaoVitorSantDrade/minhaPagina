import { drizzle as old_drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// import 'dotenv/config';

const conString = process.env.POSTGRES_URL!;

export const migrationConnection = postgres(conString, {
	max: 1
});

// export const queryClient = postgres(conString, {
// 	host: process.env.POSTGRES_HOST,
// 	database: process.env.POSTGRES_DATABASE,
// 	password: process.env.POSTGRES_PASSWORD,
// 	user: process.env.POSTGRES_USER
// });

// export const conn = drizzle(queryClient);
export const migrationClient = old_drizzle(migrationConnection);

import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';

export const conn = drizzle(sql);