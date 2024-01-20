import { conn } from '$lib/db/conn.server';
import { desc, eq } from 'drizzle-orm';
import { projects, technologies, projectsTechnologies } from '$lib/db/schemas/project';

export type Project = typeof projects.$inferSelect;
export type Technology = typeof technologies.$inferSelect;

type cardProjeto = {
	project: Project;
	technologies: Technology[];
};

export const fetchProjects = async () => {
	const myProjects = await conn.select().from(projects).orderBy(desc(projects.id));
	return myProjects;
};

export const fetchTechnologies = async () => {
	return await conn.select().from(technologies).orderBy(technologies.id);
};

export const fetchProjectTechnologies = async () => {
	const rows = await conn
		.select({
			projects: projects,
			technologies: technologies
		})
		.from(projectsTechnologies)
		.innerJoin(projects, eq(projects.id, projectsTechnologies.projectId))
		.innerJoin(technologies, eq(technologies.id, projectsTechnologies.technologyId));
	const cards: cardProjeto[] = [];
	rows.forEach((elemento) => {
		if (!cards[elemento.projects.id - 1]) {
			cards[elemento.projects.id - 1] = {
				project: elemento.projects,
				technologies: []
			};
		}
		cards[elemento.projects.id - 1].technologies.push(elemento.technologies);
	});

	return cards;
};
