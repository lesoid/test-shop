-- DropForeignKey
ALTER TABLE `card` DROP FOREIGN KEY `Card_prodId_fkey`;

-- DropForeignKey
ALTER TABLE `card` DROP FOREIGN KEY `Card_userId_fkey`;

-- AlterTable
ALTER TABLE `card` MODIFY `userId` INTEGER NULL,
    MODIFY `prodId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_prodId_fkey` FOREIGN KEY (`prodId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
