import type { Config } from 'drizzle-kit';

export default {
	schema: './src/lib/db/schemas/*',
	out: './src/lib/db/migrations',
	breakpoints: false,
	driver: 'pg',
	dbCredentials: {
		database: import.meta.env.POSTGRES_DATABASE,
		user: import.meta.env.POSTGRES_USER,
		password: import.meta.env.POSTGRES_PASSWORD,
		host: import.meta.env.POSTGRES_HOST
	}
} satisfies Config;
