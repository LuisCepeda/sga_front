import { makeHttpRequest } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const url = `${process.env.NEXT_PUBLIC_GEO_API}:/cluster`
        const body = await request.json()
        const response = await makeHttpRequest({ url, method: 'POST', body })

        return NextResponse.json(response, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ Status: 400, Data: null, Message: error.cause }, { status: 400 })
    }
}