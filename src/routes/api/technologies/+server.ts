import type { RequestHandler } from './$types';
import { technologies } from '$lib/db/schemas/project';
import { conn } from '$lib/db/conn.server';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const tech = await request.json();
	try {
		await conn.transaction(async (trx) => {
			tech.technologies.forEach(async (t: typeof technologies.$inferInsert) => {
				await trx
					.insert(technologies)
					.values({
						...t
					})
					.catch((e) => {
						trx.rollback();
					});
			});
		});
	} catch (error) {
		return json('Tecnologia já cadastrada', { status: 500 });
	}

	return json(tech, { status: 201 });
};
