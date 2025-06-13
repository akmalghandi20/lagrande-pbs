/*
  Warnings:

  - You are about to alter the column `harga_menu` on the `tb_menu` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `Int`.
  - You are about to alter the column `gambar` on the `tb_menu` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `tb_menu` MODIFY `harga_menu` INTEGER NOT NULL,
    MODIFY `gambar` VARCHAR(191) NULL;
