import { makeHttpRequest } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const url = `${process.env.REFORESTATION_PROJECTS_API}`
        const response = await makeHttpRequest(url, 'GET')

        return NextResponse.json(response, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ Status: 400, Data: null, Message: error.cause }, { status: 400 })
    }
}