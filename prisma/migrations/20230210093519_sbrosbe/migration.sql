/*
  Warnings:

  - Added the required column `cardId` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Made the column `loginType` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `category` ADD COLUMN `cardId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `loginType` VARCHAR(191) NOT NULL DEFAULT 'email';

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `Card`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
