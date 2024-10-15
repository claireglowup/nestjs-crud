/*
  Warnings:

  - You are about to drop the column `number` on the `contacts` table. All the data in the column will be lost.
  - Added the required column `phone` to the `contacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "number",
ADD COLUMN     "phone" TEXT NOT NULL;
