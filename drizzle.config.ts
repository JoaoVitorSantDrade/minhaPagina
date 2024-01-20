import type { Config } from 'drizzle-kit';
import 'dotenv/config';

export default {
	schema: './src/lib/db/schemas/*',
	out: './src/lib/db/migrations',
	breakpoints: false,
	driver: 'pg',
	dbCredentials: {
		database: process.env.POSTGRES_DATABASE!,
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		host: process.env.POSTGRES_HOST!
	}
} satisfies Config;
