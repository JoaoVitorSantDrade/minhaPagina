import type { RequestHandler } from './$types';
import { technologies } from '$lib/db/schemas/project';
import { conn } from '$lib/db/conn.server';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const tech: typeof technologies.$inferInsert = await request.json();
	try {
		await conn.transaction(async (trx) => {
			await trx.insert(technologies).values({
				...tech
			});
		});
	} catch (error) {
		return json('Tecnologia já cadastrada', { status: 500 });
	}

	return json(tech, { status: 201 });
};
