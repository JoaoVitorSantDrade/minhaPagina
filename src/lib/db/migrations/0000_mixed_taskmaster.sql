CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(30) NOT NULL,
	"github" text NOT NULL,
	"description" text NOT NULL,
	CONSTRAINT "projects_name_unique" UNIQUE("name")
);

CREATE TABLE IF NOT EXISTS "projects_technologies" (
	"project_id" integer NOT NULL,
	"technology_id" integer NOT NULL,
	CONSTRAINT "projects_technologies_project_id_technology_id_pk" PRIMARY KEY("project_id","technology_id")
);

CREATE TABLE IF NOT EXISTS "technologies" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(30) NOT NULL,
	"link" text NOT NULL,
	CONSTRAINT "technologies_name_unique" UNIQUE("name"),
	CONSTRAINT "technologies_link_unique" UNIQUE("link")
);

DO $$ BEGIN
 ALTER TABLE "projects_technologies" ADD CONSTRAINT "projects_technologies_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_technologies" ADD CONSTRAINT "projects_technologies_technology_id_technologies_id_fk" FOREIGN KEY ("technology_id") REFERENCES "technologies"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
