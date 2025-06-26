import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../general";

// DELETE pesanan by id
export const DELETE = async (
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) => {
    try {
        const params = await props.params;
        const check = await prisma.tb_pesanan.findUnique({
            where: {
                id: Number(params.id),
            },
        });

        if (!check) {
            return NextResponse.json(
                {
                    metaData: {
                        error: 1,
                        message: process.env.PESANAN_NOT_FOUND_MESSAGE,
                        status: 404,
                    },
                },
                {
                    status: 200,
                }
            );
        }

        await prisma.tb_pesanan.delete({
            where: {
                id: Number(params.id),
            },
        });

        return NextResponse.json(
            {
                metaData: {
                    error: 0,
                    message: process.env.PESANAN_DELETED_MESSAGE,
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

// GET pesanan detail by id
export const GET = async (
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) => {
    try {
        const params = await props.params;
        const check = await prisma.tb_pesanan.findUnique({
            where: {
                id: Number(params.id),
            },
        });

        if (!check) {
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

        return NextResponse.json(
            {
                metaData: {
                    error: 0,
                    message: null,
                    status: 200,
                },
                data_pesanan: check,
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

// PUT update pesanan by id
export const PUT = async (
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) => {
    const params = await props.params;

    const check = await prisma.tb_pesanan.findUnique({
        where: {
            id: Number(params.id),
        },
    });

    if (!check) {
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

    // Ganti field sesuai dengan struktur tb_pesanan Anda
    const { nama_pemesan, nama_menu, jumlah } = await request.json();

    await prisma.tb_pesanan.update({
        where: {
            id: Number(params.id),
        },
        data: {
            nama_pemesan,
            nama_menu,
            jumlah,
        },
    });

    return NextResponse.json(
        {
            metaData: {
                error: 0,
                message: process.env.PESANAN_UPDATE_MESSAGE,
                status: 200,
            },
        },
        {
            status: 200,
        }
    );
};
