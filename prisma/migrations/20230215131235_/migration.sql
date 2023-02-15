-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_categoryName_fkey`;

-- AlterTable
ALTER TABLE `product` MODIFY `categoryName` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryName_fkey` FOREIGN KEY (`categoryName`) REFERENCES `Category`(`name`) ON DELETE SET NULL ON UPDATE CASCADE;
