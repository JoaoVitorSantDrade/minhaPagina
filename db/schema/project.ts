import { relations } from 'drizzle-orm';
import { primaryKey, text } from 'drizzle-orm/pg-core';
import { integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const technologies = pgTable('technologies', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 30 }).unique().notNull(),
	link: text('link').unique().notNull()
});

export const projects = pgTable('projects', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 30 }).unique().notNull(),
	github: text('github').notNull(),
	description: text('description').notNull()
});

export const projectsTechnologies = pgTable(
	'projects_technologies',
	{
		projectId: integer('project_id')
			.notNull()
			.references(() => projects.id),
		technologyId: integer('technology_id')
			.notNull()
			.references(() => technologies.id)
	},
	(table) => {
		return {
			pk: primaryKey({ columns: [table.projectId, table.technologyId] })
		};
	}
);

export const projectsRelations = relations(projects, ({ many }) => ({
	projectsTechnologies: many(projectsTechnologies)
}));

export const technologiesRelations = relations(technologies, ({ many }) => ({
	projectsTechnologies: many(projectsTechnologies)
}));

export const projectsTechnologiesRelations = relations(projectsTechnologies, ({ one }) => ({
	projects: one(projects, {
		fields: [projectsTechnologies.projectId],
		references: [projects.id]
	}),
	technologies: one(technologies, {
		fields: [projectsTechnologies.technologyId],
		references: [technologies.id]
	})
}));
