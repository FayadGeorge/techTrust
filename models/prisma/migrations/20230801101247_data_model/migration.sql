-- CreateTable
CREATE TABLE "Services" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "serviceRequest" TEXT NOT NULL,
    "requestedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "solvedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_ServicesToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ServicesToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Services" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ServicesToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_ServicesToUser_AB_unique" ON "_ServicesToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ServicesToUser_B_index" ON "_ServicesToUser"("B");
