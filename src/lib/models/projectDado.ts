import type { technologies } from '$lib/db/schemas/project';

export type ProjectDado = {
	name: string;
	description: string;
	github: string;
	technologies: number[];
};

export type TechnologyDados = {
	technologies: (typeof technologies.$inferInsert)[];
};
