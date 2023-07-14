const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token:
    "TEST-7812174253304655-071010-c4dfb508cf671b61016185c167aa6dbd-1419208825",
});

const createPreferencePost = (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: "http://localhost:3000/cart/success",
      failure: "http://localhost:3000/cart",
      pending: "",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

const Payment = (req, res) => {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
};

module.exports = {
  createPreferencePost,
  Payment,
};
