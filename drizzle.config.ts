import type { Config } from 'drizzle-kit';

import 'dotenv/config';

export default {
	schema: './src/lib/db/schemas/*',
	out: './src/lib/db/migrations',
	breakpoints: false,
	driver: 'pg',
	dbCredentials: {
		database: process.env.VITE_POSTGRES_DATABASE!,
		user: process.env.VITE_POSTGRES_USER,
		password: process.env.VITE_POSTGRES_PASSWORD,
		host: process.env.VITE_POSTGRES_HOST!
	}
} satisfies Config;
