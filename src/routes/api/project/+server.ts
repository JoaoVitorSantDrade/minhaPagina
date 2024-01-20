import type { RequestHandler } from './$types';
import { projects, projectsTechnologies } from '$lib/db/schemas/project';
import { conn } from '$lib/db/conn.server';
import type { ProjectDado } from '$lib/models/projectDado';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const project: ProjectDado = await request.json();

	try {
		await conn.transaction(async (trx) => {
			try {
				const projetoInserido = await trx
					.insert(projects)
					.values({
						...project
					})
					.returning({ id: projects.id });

				project.technologies.forEach(async (tech_id) => {
					await trx.insert(projectsTechnologies).values({
						projectId: projetoInserido[0].id,
						technologyId: tech_id
					});
				});
			} catch (error) {
				trx.rollback();
			}
		});
	} catch (error) {
		if (error instanceof Error) {
			if (error.message.includes('Rollback')) {
				return json('Nao foi possível adicionar o projeto', { status: 400 });
			}
			return json(error, { status: 400 });
		}
	}

	return json(project, { status: 201 });
};
