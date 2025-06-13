import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../general";

// DELETE menu by id
export const DELETE = async (
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) => {
    try {
        const params = await props.params;
        const check = await prisma.tb_menu.findUnique({
            where: {
                id: Number(params.id),
            },
        });

        if (!check) {
            return NextResponse.json(
                {
                    metaData: {
                        error: 1,
                        message: process.env.MENU_NOT_FOUND_MESSAGE,
                        status: 404,
                    },
                },
                {
                    status: 200,
                }
            );
        }

        await prisma.tb_menu.delete({
            where: {
                id: Number(params.id),
            },
        });

        return NextResponse.json(
            {
                metaData: {
                    error: 0,
                    message: process.env.MENU_DELETED_MESSAGE,
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
                    message: process.env.PARAMETER_MUST_BE_NUMERIC_MESSAGE,
                    status: 400,
                },
            },
            {
                status: 400,
            }
        );
    }
};

// GET menu detail by id
export const GET = async (
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) => {
    try {
        const params = await props.params;
        const check = await prisma.tb_menu.findUnique({
            where: {
                id: Number(params.id),
            },
        });

        if (!check) {
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

        return NextResponse.json(
            {
                metaData: {
                    error: 0,
                    message: null,
                    status: 200,
                },
                data_menu: check,
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
                    message: process.env.PARAMETER_MUST_BE_NUMERIC_MESSAGE,
                    status: 400,
                },
            },
            {
                status: 400,
            }
        );
    }
};

// PUT update menu by id
export const PUT = async (
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) => {
    const params = await props.params;

    const check = await prisma.tb_menu.findUnique({
        where: {
            id: Number(params.id),
        },
    });

    if (!check) {
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

    // Ganti field sesuai dengan struktur tb_menu Anda
    const { nama_menu, harga_menu, deskripsi_menu } = await request.json();

    // Jika ingin cek duplikasi nama_menu, bisa tambahkan pengecekan di sini

    await prisma.tb_menu.update({
        where: {
            id: Number(params.id),
        },
        data: {
            nama_menu,
            harga_menu,
            deskripsi_menu,
        },
    });

    return NextResponse.json(
        {
            metaData: {
                error: 0,
                message: process.env.MENU_UPDATED_MESSAGE,
                status: 200,
            },
        },
        {
            status: 200,
        }
    );
};
