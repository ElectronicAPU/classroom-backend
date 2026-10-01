ALTER TABLE "departments" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "subjects" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "departments" DROP COLUMN "create_at";--> statement-breakpoint
ALTER TABLE "subjects" DROP COLUMN "create_at";