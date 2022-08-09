/*
  Warnings:

  - You are about to drop the column `deleted_at` on the `events` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_userId_fkey";

-- AlterTable
ALTER TABLE "events" DROP COLUMN "deleted_at",
ADD COLUMN     "participantsEmail" TEXT NOT NULL DEFAULT '[]';

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_participantsEmail_fkey" FOREIGN KEY ("participantsEmail") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
