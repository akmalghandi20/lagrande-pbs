import { NextRequest, NextResponse } from "next/server";
// menarik fungsi prisma dari folder general
import { prisma, setBycrypt } from "../general";

// buat service "GET" untuk tb_user
export const GET = async () => {
  // tampilkan data/record dari tb_user
  const view = await prisma.tb_user.findMany({});

  //   jika data kosong
  if (view.length == 0) {
    // return getResponseUserNotFound
    return NextResponse.json(
      {
        metaData: {
          error: 1,
          message: process.env.USER_NOT_FOUND_MESSAGE,
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
      data_user: view,
    },
    {
      status: 200,
    }
  );
};

// buat service POST (tb_user) untuk simpan data
export const POST = async (request: NextRequest) => {
  // buat object untuk data isian
  const { nama_value, email_value, username_value, password_value } = await request.json();

  // cek apakah username sudah pernah digunakan
  const check = await prisma.tb_user.findMany({
    where: {
      username: username_value,
    },
  });

  // jika username ditemukan
  if (check.length == 1) {
    return NextResponse.json(
      {
        metaData: {
          error: 1,
          message: "Data User Gagal Disimpan : Username sudah Terdaftar",
          status: 409,
        },
      },
      {
        status: 409,
      }
    );
  }
  // simpan data
  const save = await prisma.tb_user.create({
    data: {
      nama: nama_value,
      email: email_value,
      username: username_value,
      password: setBycrypt(password_value),
    },
  });

  // proses/response API
  return NextResponse.json(
    {
      metaData: {
        error: 0,
        message: "Data user berhasil disimpan",
        status: 201,
      },
      // data_user: save,
    },
    {
      status: 201,
    }
  );
};
