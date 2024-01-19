import { drizzle } from 'drizzle-orm/vercel-postgres';
import { migrate } from 'drizzle-orm/vercel-postgres/migrator';
import { sql } from '@vercel/postgres';

const conn = drizzle(sql);

await migrate(conn, { migrationsFolder: 'drizzle' });

await sql.end();
