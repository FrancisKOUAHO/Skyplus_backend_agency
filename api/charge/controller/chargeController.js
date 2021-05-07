const Client = require("../model/Charge");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create a new charge
exports.createCharge = async (req, res, next) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Stubborn Attachments',
                        images: ['https://i.imgur.com/EHyR2nP.png'],
                    },
                    unit_amount: 2000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `https://agencyskyplus.herokuapp.com/success`,
        cancel_url: `https://agencyskyplus.herokuapp.com/cancel`,
    });
    res.json({id: session.id});
};
