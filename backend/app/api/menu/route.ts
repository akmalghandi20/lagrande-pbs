import { NextRequest, NextResponse } from "next/server";
// menarik fungsi prisma dari folder general
import { prisma } from "../general";

// buat service "GET" untuk tb_menu
export const GET = async () => {
  // tampilkan data/record dari tb_menu
  const view = await prisma.tb_menu.findMany({});

  //   jika data kosong
  if (view.length == 0) {
    // return getResponseMenuNotFound
    return NextResponse.json(
      {
        metaData: {
          error: 1,
          message: process.env.MENU_NOT_FOUND_MESSAGE,
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
      data_menu: view,
    },
    {
      status: 200,
    }
  );
};

// buat service POST (tb_menu) untuk simpan data
export const POST = async (request: NextRequest) => {
    const { nama_menu, deskripsi_menu, gambar, harga_menu } = await request.json();


  // cek apakah nama_menu sudah pernah digunakan
  const check = await prisma.tb_menu.findMany({
    where: {
      nama_menu: nama_menu,
    },
  });

  // jika nama_menu ditemukan
  if (check.length == 1) {
    return NextResponse.json(
      {
        metaData: {
          error: 1,
          message: "Data Menu Gagal Disimpan : Nama menu sudah terdaftar",
          status: 409,
        },
      },
      {
        status: 409,
      }
    );
  }
  // simpan data
  const save = await prisma.tb_menu.create({
    data: {
      nama_menu: nama_menu,
      deskripsi_menu: deskripsi_menu,
      gambar: gambar,
      harga_menu: harga_menu,
    },
  });

  // proses/response API
  return NextResponse.json(
    {
      metaData: {
        error: 0,
        message: process.env.MENU_ADDED_MESSAGE,
        status: 201,
      },
      data_menu: save,
    },
    {
      status: 201,
    }
  );
};
