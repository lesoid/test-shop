/*
  Warnings:

  - Added the required column `categoryId` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `category` DROP FOREIGN KEY `Category_cardId_fkey`;

-- AlterTable
ALTER TABLE `card` ADD COLUMN `categoryId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
