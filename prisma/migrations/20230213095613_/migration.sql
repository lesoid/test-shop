-- DropForeignKey
ALTER TABLE `card` DROP FOREIGN KEY `Card_prodId_fkey`;

-- AlterTable
ALTER TABLE `card` MODIFY `prodId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_prodId_fkey` FOREIGN KEY (`prodId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
