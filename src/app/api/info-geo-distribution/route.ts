import { makeHttpRequest } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const searchParams = new URLSearchParams("?" + request?.url.split("?").slice(-1)[0])
        const whereClause = {}
        const department = searchParams.get('department')

        const url = `https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=${department}`

        const response = await makeHttpRequest(url, 'GET')

        return NextResponse.json(response, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ Status: 400, Data: null, Message: error.cause }, { status: 400 })
    }
}