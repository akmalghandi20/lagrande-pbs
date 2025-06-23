-- CreateTable
CREATE TABLE `tb_pesanan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_pemesan` VARCHAR(50) NOT NULL,
    `nama_menu` VARCHAR(50) NOT NULL,
    `jumlah` INTEGER NOT NULL,
    `total_harga` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
