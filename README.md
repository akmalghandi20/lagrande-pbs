cloning repository menggunakan terminal  dengan perintah seperti berikut : 
git clone https://github.com/

Seletah melakukan cloning, buka projek dan masukan kode berikut kedalam terminal: 
npm i

Lalu buat folder bernama nama .env pada backend dengan isi kode sebagai berikut :
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://root:@localhost:3306/db_pbs_if22dx_lagrande"

# User
USER_NOT_FOUND_MESSAGE="Data User Tidak Ditemukan !!!"

# Menu
MENU_NOT_FOUND_MESSAGE="Data Menu Tidak Ditemukan !!!"
MENU_ALREADY_EXISTS_MESSAGE="Menu Sudah Ada !!!"
MENU_ADDED_MESSAGE="Menu Berhasil Ditambahkan !!!"
MENU_UPDATED_MESSAGE="Menu Berhasil Diupdate !!!"
MENU_DELETED_MESSAGE="Menu Berhasil Dihapus !!!"
MENU_RESTORED_MESSAGE="Menu Berhasil Dipulihkan !!!"
MENU_UPDATE_CONFLICT_MESSAGE="Data Menu Gagal Diubah : Nama menu sudah terdaftar"

# Pesanan
PESANAN_NOT_FOUND_MESSAGE="Data Pesanan Tidak Ditemukan !!!"
PESANAN_UPDATE_MESSAGE="Pesanan Berhasil Diupdate !!!"
PESANAN_DELETED_MESSAGE="Pesanan Berhasil Dihapus !!!"

PARAMETER_MUST_BE_NUMERIC_MESSAGE="Parameter Harus Angka !!!"
