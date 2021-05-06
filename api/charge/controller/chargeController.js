const Client = require("../model/Charge");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create a new charge
exports.createCharge = (req, res, next) => {

    var newCharge = {
        amount: 23500,
        currency: "usd",
        source: req.body.token_from_stripe, // obtained with Stripe.js
        description: req.body.engravingText,
        receipt_email: req.body.email,
        shipping: {
            name: req.body.name,
            address: {
                line1: req.body.address.street,
                city: req.body.address.city,
                state: req.body.address.state,
                postal_code: req.body.address.zip,
                country: 'US'
            }
        }
    };

    // trigger charge
    stripe.charges.create(newCharge, function(err, charge) {
        // send response
        if (err){
            console.error(err);
            res.json({ error: err, charge: false });
        } else {
            // format for email
            var emailTemplate = `Hello ${newCharge.shipping.name}, \n
Congratulations on ordering a hand picked Bundle of Sticks! \n
Engraving: ${newCharge.description} \n
Shipping Info: ${newCharge.shipping.address.line1}, ${newCharge.shipping.address.city}, ${newCharge.shipping.address.state} ${newCharge.shipping.address.postal_code} \n
Amount: ${newCharge.amount} \n
Your full order details are available at stickly.io/#/order-complete/${charge.id} \n
For questions contact your_support_email@gmail.com \n 
Thank you!`;
            // compose email
            var emailData = {
                from: 'Your Name <your_support_email@gmail.com>',
                to: req.body.email,
                subject: 'Bundle of Sticks Receipt - ' + charge.id,
                text: emailTemplate
            };

            // send email to customer
            mailgun.messages().send(emailData);

            emailData['to'] = 'your_support_email@gmail.com';
            emailData['subject'] = `New Order: Bundle of Sticks - ${charge.id}`;

            // send email to supplier
            mailgun.messages().send(emailData);

            // send response with charge data
            res.json({ error: false, charge: charge });
        }
    });


    // Call the stripe objects helper functions to trigger a new charge
    stripe.charges.create(newCharge, function(err, charge) {
        // send response
        if (err){
            console.error(err);
            res.json({ error: err, charge: false });
        } else {
            // send response with charge data
            res.json({ error: false, charge: charge });
        }
    });
};

exports.stripeCharges = (req, res) => {
    stripe.charges.retrieve(req.params.id, function(err, charge) {
        if (err){
            res.json({ error: err, charge: false });
        } else {
            res.json({ error: false, charge: charge });
        }
    });
};
