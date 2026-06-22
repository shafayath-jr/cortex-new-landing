import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    const tlds = searchParams.get("tlds");

    if (!name || !tlds) {
      return NextResponse.json(
        { error: "Missing name or tlds parameters" },
        { status: 400 }
      );
    }

    const apiKey = process.env.DOMAIN_CHECKER;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Server configuration error: DOMAIN_CHECKER key missing" },
        { status: 500 }
      );
    }

    // Call the domscan.net API
    const response = await fetch(
      `https://domscan.net/v1/status?name=${encodeURIComponent(
        name
      )}&tlds=${encodeURIComponent(tlds)}`,
      {
        headers: {
          Authorization: apiKey, // The env value starts with "Bearer ..."
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `DomScan API error: ${response.status} - ${errorText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to check domain status" },
      { status: 500 }
    );
  }
}
