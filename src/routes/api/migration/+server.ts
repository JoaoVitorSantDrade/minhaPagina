import type { RequestHandler } from './$types';

import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { migrationClient, migrationConnection } from '$lib/db/conn.server';

export const POST: RequestHandler = async () => {
	try {
		await migrate(migrationClient, { migrationsFolder: 'src/lib/db/migrations' });
		await migrationConnection.end();
	} catch (e) {
		return new Response(null, { status: 500 });
	}

	return new Response();
};
