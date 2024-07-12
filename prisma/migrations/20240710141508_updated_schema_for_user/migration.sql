/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `SQ1` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SQ2` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SQA1` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SQA2` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "SQ1" TEXT NOT NULL,
    "SQA1" TEXT NOT NULL,
    "SQ2" TEXT NOT NULL,
    "SQA2" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("id") SELECT "id" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE INDEX "User_username_idx" ON "User"("username");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
