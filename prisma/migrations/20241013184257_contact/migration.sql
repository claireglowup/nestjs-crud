/*
  Warnings:

  - You are about to drop the column `link` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `bookmarks` table. All the data in the column will be lost.
  - Added the required column `number` to the `bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `bookmarks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookmarks" DROP COLUMN "link",
DROP COLUMN "title",
ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;
