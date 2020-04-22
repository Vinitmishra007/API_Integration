var appRouter = function(app) {

app.post("/get_postagelabel", function(req, res) {



const Easypost = require('@easypost/api');
        const api = new Easypost('EZTKdf522d95d3a347e29daa8c40a1ee368bYzdDyIuvKHbxa9GarcU3WA');

  const toAddress = new api.Address({
  name: req.body.to_address.name,
  company: req.body.to_address.company,
  street1: req.body.to_address.street1,
  city: req.body.to_address.city,
  state: req.body.to_address.state,
  zip: req.body.to_address.zip
});


const fromAddress = new api.Address({
  company: req.body.from_address.company,
  street1: req.body.from_address.street1,
  street2: req.body.from_address.street2,
  city: req.body.from_address.city,
  state: req.body.from_address.state,
  zip: req.body.from_address.zip,
  phone: req.body.from_address.phone
});

const parcel = new api.Parcel({
  length: req.body.parcel_info.length,
  width: req.body.parcel_info.width,
  height: req.body.parcel_info.height,
  weight: req.body.parcel_info.weight
});

const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  parcel: parcel
});


//console.log(shipment);

shipment.save().then(s =>
  s.buy(shipment.lowestRate(['USPS'], ['First']))
    .then(s=>res.send("postage_label_url:"+s.postage_label.label_url))
);

});


}

module.exports = appRouter;