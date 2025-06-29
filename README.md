This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Setup Project
Cloning Repository menggunakan terminal dengan perintah berikut :

```bash
git clone https://github.com/akmalghandi20/lagrande-pbs.git
```

Setelah proses cloning dilakukan, buka project dan jalankan perintah berikut menggunakan terminal :
```bash
npm i
```

Setelah melakukan "npm i" buat file .env di folder project dan buat kode di dalamnya sebagai berikut :
```bash
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


NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="dtwz8elgk"
```
Running project dengan perintah berikut menggunakan terminal :
```bash
npm run dev
```

Buka browser dan masukkan url berikut : 
```bash
http://localhost:3000
```
