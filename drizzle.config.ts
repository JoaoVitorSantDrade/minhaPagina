import type { Config } from 'drizzle-kit';

export default {
	schema: './src/lib/db/schemas/*',
	out: './src/lib/db/migrations',
	breakpoints: false,
	driver: 'pg',
	dbCredentials: {
		database: 'website',
		user: 'postgres',
		password: 'root',
		host: 'localhost',
		port: 5432
	}
} satisfies Config;
