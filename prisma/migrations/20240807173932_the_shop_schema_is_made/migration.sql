/*
  Warnings:

  - You are about to drop the column `started` on the `Shop` table. All the data in the column will be lost.
  - Added the required column `dealStarted` to the `Shop` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Shop" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "folderId" INTEGER NOT NULL,
    "shopNumber" TEXT NOT NULL,
    "clientFullName" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "shopType" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dealStarted" BOOLEAN NOT NULL,
    "startDate" DATETIME NOT NULL,
    "nextPayment" DATETIME NOT NULL,
    "paidMonth" INTEGER NOT NULL,
    "paidStatus" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Shop_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folder" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Shop" ("clientFullName", "createdAt", "description", "folderId", "id", "nextPayment", "paidMonth", "paidStatus", "price", "shopNumber", "shopType", "startDate", "updatedAt") SELECT "clientFullName", "createdAt", "description", "folderId", "id", "nextPayment", "paidMonth", "paidStatus", "price", "shopNumber", "shopType", "startDate", "updatedAt" FROM "Shop";
DROP TABLE "Shop";
ALTER TABLE "new_Shop" RENAME TO "Shop";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
