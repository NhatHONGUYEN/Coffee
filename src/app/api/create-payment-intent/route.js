import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15", // Utilisez la version de l'API que vous souhaitez
});

export async function POST(request) {
  try {
    const { amount } = await request.json();

    // Vérifiez si amount est un nombre
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("amount doit être un nombre positif");
    }

    // Assurez-vous que amount est déjà en centimes
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    return new Response(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Internal Error:", error);
    return new Response(
      JSON.stringify({ error: `Internal Server Error: ${error.message}` }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
