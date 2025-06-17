/*
  Warnings:

  - You are about to drop the `Fencer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Fencer";

-- CreateTable
CREATE TABLE "Tournament" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "activeWeapons" TEXT[],

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CheckIn" (
    "id" TEXT NOT NULL,
    "checkNumber" INTEGER NOT NULL,
    "fencerName" TEXT NOT NULL,
    "nationalityCode" TEXT NOT NULL,
    "weaponType" TEXT NOT NULL,
    "eventKey" TEXT NOT NULL,
    "checkInStatus" TEXT NOT NULL,
    "pickupConfirmed" BOOLEAN NOT NULL DEFAULT false,
    "tournamentId" TEXT,
    "currentVersion" INTEGER,
    "latestSubmissionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CheckIn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CheckInItem" (
    "id" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "checkInId" TEXT NOT NULL,

    CONSTRAINT "CheckInItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Submission" (
    "id" TEXT NOT NULL,
    "checkInId" TEXT,
    "checkInKey" TEXT NOT NULL,
    "versionNumber" INTEGER NOT NULL,
    "snapshotJson" TEXT NOT NULL,
    "changesJson" TEXT,
    "action" TEXT NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemConfig" (
    "id" TEXT NOT NULL,
    "maxQuantity" INTEGER NOT NULL,
    "required" BOOLEAN NOT NULL,
    "itemName" TEXT NOT NULL,
    "tournamentId" TEXT,

    CONSTRAINT "ItemConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CheckIn_latestSubmissionId_key" ON "CheckIn"("latestSubmissionId");

-- AddForeignKey
ALTER TABLE "CheckIn" ADD CONSTRAINT "CheckIn_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CheckIn" ADD CONSTRAINT "CheckIn_latestSubmissionId_fkey" FOREIGN KEY ("latestSubmissionId") REFERENCES "Submission"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CheckInItem" ADD CONSTRAINT "CheckInItem_checkInId_fkey" FOREIGN KEY ("checkInId") REFERENCES "CheckIn"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_checkInId_fkey" FOREIGN KEY ("checkInId") REFERENCES "CheckIn"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemConfig" ADD CONSTRAINT "ItemConfig_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE SET NULL ON UPDATE CASCADE;
