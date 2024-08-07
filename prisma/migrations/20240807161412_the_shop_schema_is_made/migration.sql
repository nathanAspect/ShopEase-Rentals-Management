-- CreateTable
CREATE TABLE "Shop" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "folderId" INTEGER NOT NULL,
    "shopNumber" TEXT NOT NULL,
    "clientFullName" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "shopType" TEXT NOT NULL,
    "nextPayment" DATETIME NOT NULL,
    "paidMonth" INTEGER NOT NULL,
    "paidStatus" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Shop_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folder" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
