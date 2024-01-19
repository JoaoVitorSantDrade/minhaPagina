import type { PageServerLoad } from './$types';

import { conn } from '$lib/db/conn.server';
import { desc, eq } from 'drizzle-orm';
import { projects, technologies, projectsTechnologies } from '../../db/schema/project';

export type Project = typeof projects.$inferSelect;
export type Technology = typeof technologies.$inferSelect;

type cardProjeto = {
	project: Project;
	technologies: Technology[];
};

export const load = (async () => {
	return { streamed: { projects: fetchProjectTechnologies() } };
}) satisfies PageServerLoad;

const fetchProjects = async () => {
	const myProjects = await conn.select().from(projects).orderBy(desc(projects.id));
	return myProjects;
};

const fetchTechnologies = async () => {
	return await conn.select().from(technologies).orderBy(technologies.id);
};

const fetchProjectTechnologies = async () => {
	const rows = await conn
		.select()
		.from(projectsTechnologies)
		.innerJoin(projects, eq(projects.id, projectsTechnologies.projectId))
		.innerJoin(technologies, eq(technologies.id, projectsTechnologies.technologyId));

	const result = rows.reduce((acc, row) => {
		const id_do_projeto = row.projects.id;
		if (!acc[id_do_projeto]) {
			acc[id_do_projeto] = { project: row.projects, technologies: [] };
		}
		acc[id_do_projeto].technologies.push(row.technologies);

		return acc;
	}, {} as cardProjeto[]);

	return result;
};
