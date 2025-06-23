import { NextRequest, NextResponse } from "next/server";
// menarik fungsi prisma dari folder general
import { prisma, setBycrypt } from "../general";

// buat service "GET" untuk tb_pesanan
export const GET = async () => {
    // tampilkan data/record dari tb_pesanan
    const view = await prisma.tb_pesanan.findMany({});

    //   jika data kosong
    if (view.length == 0) {
        // return getResponsePesananNotFound
        return NextResponse.json(
            {
                metaData: {
                    error: 1,
                    message: process.env.PESANAN_NOT_FOUND_MESSAGE,
                    status: 404,
                },
            },
            {
                status: 404,
            }
        );
    }

    // proses/response API
    return NextResponse.json(
        {
            metaData: {
                error: 0,
                message: null,
                status: 200,
            },
            data_pesanan: view,
        },
        {
            status: 200,
        }
    );
};

// buat service POST (tb_pesanan) untuk simpan data
export const POST = async (request: NextRequest) => {
    // buat object untuk data isian
    const { nama_pemesan, nama_menu, jumlah } = await request.json();

    // cek apakah pesanan dengan produk_id dan email_pemesan sudah pernah dibuat (contoh validasi)
    const check = await prisma.tb_pesanan.findMany({
        where: {
            nama_pemesan: nama_pemesan,
            nama_menu: nama_menu,
        },
    });

    // jika pesanan ditemukan
    if (check.length == 1) {
        return NextResponse.json(
            {
                metaData: {
                    error: 1,
                    message: "Data Pesanan Gagal Disimpan : Pesanan sudah terdaftar",
                    status: 409,
                },
            },
            {
                status: 409,
            }
        );
    }
    // simpan data
    const save = await prisma.tb_pesanan.create({
        data: {
            nama_pemesan,
            nama_menu,
            jumlah
        },
    });

    // proses/response API
    return NextResponse.json(
        {
            metaData: {
                error: 0,
                message: "Data pesanan berhasil disimpan",
                status: 201,
            },
            // data_pesanan: save,
        },
        {
            status: 201,
        }
    );
};
