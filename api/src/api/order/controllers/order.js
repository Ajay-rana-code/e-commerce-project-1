





 





// 'use strict';

// /**
//  * order controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::order.order');





















// import Stripe from 'stripe';
// // import product from '../../product/controllers/product';
// const clientURL = "http://localhost:5173/"
// // const stripeToken = "sk_test_51OXlc7SIuScxTBMByLZbYbeqLIKjgzd1OODIIrpkoFjSYtCXcnSiD2paAk22dgjPISiQZ8oLMVr0K1fnhVyjXlbt00CIYcD6oM"
// const stripe = new Stripe('sk_test_51OXlc7SIuScxTBMByLZbYbeqLIKjgzd1OODIIrpkoFjSYtCXcnSiD2paAk22dgjPISiQZ8oLMVr0K1fnhVyjXlbt00CIYcD6oM', {
//   apiVersion: '2023-10-16',
// });

// module.exports = {
//   async create(ctx) {
//     try {
//       const { products } = ctx.request.body;

//       if (!products) {
//         ctx.response.status = 400;
//         return { error: "Products not found in request body" };
//       }

//       const lineItems = await Promise.all(
//         products.map(async (product) => {
//           const item = await strapi
//             .service("api::product.product")
//             .findOne(product.id);

//           return {
//             price_data: {
//               currency: "usd",
//               product_data: {
//                 name: item.title,
//               },
//               unit_amount: Math.round(item.price * 100),
//             },
//             quantity: product.quantity,
//           };
//         })
//       );

//       const session = await stripe.checkout.sessions.create({
//         shipping_address_collection: { allowed_countries: ['US', 'CA'] },
//         payment_method_types: ["card"],
//         mode: "payment",
//         success_url: `${clientURL}?success=true`,
//         cancel_url: `${clientURL}?success=false`,
//         line_items: lineItems,
//       });

//       await strapi
//         .service("api::order.order")
//         .create({ data: { products, stripeId: session.id } });

//       return { stripeSession: session };
//     } catch (error) {
//       ctx.response.status = 500;
//       return { error: error.message || "Internal Server Error" };
//     }
//   },
// };





 








("use strict");
const stripe = require("stripe")('sk_test_51OXlc7SIuScxTBMByLZbYbeqLIKjgzd1OODIIrpkoFjSYtCXcnSiD2paAk22dgjPISiQZ8oLMVr0K1fnhVyjXlbt00CIYcD6oM');
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const clientURL = "http://localhost:5173/"

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {allowed_countries: ['US', 'CA']},
        payment_method_types: ["card"],
        mode: "payment",
        success_url: clientURL+"?success=true",
        cancel_url: clientURL+"?success=false",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: {  products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
}));


