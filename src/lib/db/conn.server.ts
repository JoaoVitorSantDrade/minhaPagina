import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import 'dotenv/config';

const conString = process.env.POSTGRES_URL;

export const migrationConnection = postgres(conString!, {
	max: 1
});

const queryClient = postgres(conString!);

export const migrationClient = drizzle(migrationConnection);
export const conn = drizzle(queryClient);
