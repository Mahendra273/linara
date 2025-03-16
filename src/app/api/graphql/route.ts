import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const shopifyShop = process.env.SHOPIFY_SHOP;
    const accessToken = process.env.SHOPIFY_ACCESS_TOKEN;

    if (!shopifyShop || !accessToken) {
      return NextResponse.json({ error: "Missing Shopify credentials" }, { status: 500 });
    }

    // const url = `https://${shopifyShop}/admin/api/2025-01/custom_collections.json`;
        const url = `https://${shopifyShop}/admin/api/2025-01/products/8171029594293.json`;
        

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken,
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch data", status: response.status }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Fetch Error:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
