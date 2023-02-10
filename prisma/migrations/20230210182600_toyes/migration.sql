/*
  Warnings:

  - You are about to drop the column `codproduct` on the `card` table. All the data in the column will be lost.
  - Made the column `userId` on table `card` required. This step will fail if there are existing NULL values in that column.
  - Made the column `prodId` on table `card` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `card` DROP FOREIGN KEY `Card_prodId_fkey`;

-- DropForeignKey
ALTER TABLE `card` DROP FOREIGN KEY `Card_userId_fkey`;

-- AlterTable
ALTER TABLE `card` DROP COLUMN `codproduct`,
    MODIFY `userId` INTEGER NOT NULL,
    MODIFY `prodId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_prodId_fkey` FOREIGN KEY (`prodId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
