import type { PageServerLoad } from './$types';

import { fetchProjectTechnologies } from '$lib/hooks/fetchProjectData.server';

export const load = (async () => {
	return { streamed: { projects: fetchProjectTechnologies() } };
}) satisfies PageServerLoad;
