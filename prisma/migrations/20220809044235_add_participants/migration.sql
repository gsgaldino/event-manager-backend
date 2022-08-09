/*
  Warnings:

  - You are about to drop the column `participantsEmail` on the `events` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_participantsEmail_fkey";

-- AlterTable
ALTER TABLE "events" DROP COLUMN "participantsEmail",
ADD COLUMN     "participants" TEXT NOT NULL DEFAULT '[]';

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
