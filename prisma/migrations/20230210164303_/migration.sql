/*
  Warnings:

  - You are about to drop the column `categoryId` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `showName` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `card` table. All the data in the column will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `prodId` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Made the column `codproduct` on table `card` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `card` DROP FOREIGN KEY `Card_categoryId_fkey`;

-- DropIndex
DROP INDEX `Card_name_key` ON `card`;

-- AlterTable
ALTER TABLE `card` DROP COLUMN `categoryId`,
    DROP COLUMN `image`,
    DROP COLUMN `name`,
    DROP COLUMN `showName`,
    DROP COLUMN `url`,
    ADD COLUMN `prodId` INTEGER NOT NULL,
    ADD COLUMN `show` BOOLEAN NULL,
    MODIFY `codproduct` INTEGER NOT NULL;

-- DropTable
DROP TABLE `category`;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL DEFAULT 0,
    `price` INTEGER NOT NULL DEFAULT 0,
    `codeproduct` INTEGER NOT NULL,
    `url` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `rate` INTEGER NOT NULL DEFAULT 0,
    `category` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Product_title_key`(`title`),
    UNIQUE INDEX `Product_codeproduct_key`(`codeproduct`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_prodId_fkey` FOREIGN KEY (`prodId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
