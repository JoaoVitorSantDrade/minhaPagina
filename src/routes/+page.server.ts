import type { PageServerLoad } from './$types';

import { fetchProjectTechnologies } from '$lib/hooks/fetchProjectData.server';

export const load = (async () => {
	return { projects: fetchProjectTechnologies() };
}) satisfies PageServerLoad;

// const fetchProjects = async () => {
// 	const myProjects = await conn.select().from(projects).orderBy(desc(projects.id));
// 	return myProjects;
// };

// const fetchTechnologies = async () => {
// 	return await conn.select().from(technologies).orderBy(technologies.id);
// };
