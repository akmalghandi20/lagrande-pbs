import { NextRequest, NextResponse } from "next/server";
// menarik fungsi prisma dari folder general
import { prisma, setBycrypt } from "../../general";
// import { get } from "http";

// buat service delete parameter id di tb_user
export const DELETE = async (
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) => {
  try {
    const params = await props.params;
    // cek apakah id ada / tidak
    const check = await prisma.tb_user.findUnique({
      where: {
        id: Number(params.id),
      },
    });

    //  jika id tidak ditemukan
    if (!check) {
      return NextResponse.json(
        {
          metaData: {
            error: 1,
            message: process.env.USER_NOT_FOUND_MESSAGE,
            status: 404,
          },
        },
        {
          status: 200,
        }
      );
    }

    // proses delete data
    const query = await prisma.tb_user.delete({
      where: {
        id: Number(params.id),
      },
    });
    // proses/response API
    return NextResponse.json(
      {
        metaData: {
          error: 0,
          message: "Data User Berhasil Dihapus",
          status: 200,
        },
      },
      {
        status: 200,
      }
    );
  } catch (e: any) {
    return NextResponse.json(
      {
        metaData: {
          error: 1,
          message: "Parameter Harus Angka",
          status: 400,
        },
      },
      {
        status: 400,
      }
    );
  }
};

// buat service GET (detail data) tb_user
export const GET = async (
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) => {
  try {
    const params = await props.params;

    //cek apakah id/user ada atau tidak
    const check = await prisma.tb_user.findUnique({
      where: {
        id: Number(params.id),
      },
    });

    //  jika data user tidak ditemukan
    if (!check) {
      return getResponseUserNotFound;
    }

    // Proses/response API
    return NextResponse.json(
      {
        metaData: {
          error: 0,
          message: null,
          status: 200,
        },
        data_user: check,
      },
      {
        status: 200,
      }
    );
  } catch (e: any) {
    return NextResponse.json(
      {
        metaData: {
          error: 1,
          message: "Parameter Harus Angka",
          status: 400,
        },
      },
      {
        status: 400,
      }
    );
  }
};

// buat service PUT (update data) tb_user
export const PUT = async (
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) => {
  const params = await props.params;

  //cek apakah id/user ada atau tidak
  const check = await prisma.tb_user.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  //  jika data user tidak ditemukan
  if (!check) {
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

  // buat object untuk data isian
  const { nama_value, username_value, password_value } = await request.json();

  // cek apakah username sudah pernah digunakan
  const checkUsername = await prisma.tb_user.findMany({
    where: {
      // tambahkan kondisi jika username tidak sama dengan username yang sedang diubah
      username: username_value,
      // tambahkan kondisi jika id tidak sama dengan id yang sedang diubah
      NOT: {
        id: Number(params.id),
      },
    },
  });

  // jika username ditemukan
  if (checkUsername.length == 1) {
    return NextResponse.json(
      {
        metaData: {
          error: 1,
          message: "Data User Gagal Diubah : Username sudah Terdaftar",
          status: 409,
        },
      },
      {
        status: 409,
      }
    );
  }
  // proses update data
  const edit = await prisma.tb_user.update({
    where: {
      // tambahkan kondisi id yang akan diubah
      id: Number(params.id),
    },
    // tambahkan data yang akan diubah
    data: {
      nama: nama_value,
      username: username_value,
      // tambahkan password yang sudah dienkripsi
      password: setBycrypt(password_value),
    },
  });

  // proses/response API
  return NextResponse.json(
    {
      metaData: {
        error: 0,
        message: "Data User Berhasil Diubah",
        status: 200,
      },
    },
    {
      status: 200,
    }
  );
};
