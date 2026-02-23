import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      { error: "STRIPE_SECRET_KEY fehlt. Trage ihn in .env.local ein." },
      { status: 500 }
    );
  }

  let plan: string | undefined;

  try {
    const body = await request.json();
    plan = body?.plan;
  } catch {
    // falls kein JSON kommt
  }

  if (!plan) {
    return NextResponse.json({ error: "Missing plan" }, { status: 400 });
  }

  const apiVersion: Stripe.LatestApiVersion = "2026-01-28.clover";
  const stripe = new Stripe(secretKey, { apiVersion });

  const origin =
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  try {
    const priceMap: Record<string, string | undefined> = {
      starter: process.env.STRIPE_PRICE_STARTER,
      pro: process.env.STRIPE_PRICE_PRO,
      business: process.env.STRIPE_PRICE_BUSINESS,
    };

    const priceId = priceMap[plan];

    if (!priceId) {
      return NextResponse.json({ error: "Invalid plan or missing STRIPE_PRICE_* env" }, { status: 400 });
    }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/?canceled=1`,
  });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
