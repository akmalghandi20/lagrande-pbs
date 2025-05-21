import { PrismaClient } from "@prisma/client";
import { genSaltSync, hashSync } from "bcrypt-ts";
import { NextResponse } from "next/server";

export const prisma = new PrismaClient();

// buat fungsi untuk user tidak ditemukan
export const getResponseUserNotFound = NextResponse.json(
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

// buat fungsi bycrypt
export const setBycrypt = (real_password: string) => {
    const salt_password = genSaltSync(10);
    const hash_password = hashSync(real_password, salt_password);
    return hash_password;
};
