/*
  Warnings:

  - You are about to drop the column `categoryId` on the `product` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - Added the required column `categoryName` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_categoryId_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `categoryId`,
    ADD COLUMN `categoryName` VARCHAR(191) NOT NULL,
    MODIFY `price` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `description` VARCHAR(500) NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryName_fkey` FOREIGN KEY (`categoryName`) REFERENCES `Category`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
