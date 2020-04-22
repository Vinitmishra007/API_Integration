# API_Integration
postage url:http://localhost:3000/get_postagelabel
Method Type:POST
INPUT TYPE:JSON
INPUT:
{"parcel_info":{
  "length": 9,
  "width": 6,
  "height": 2,
  "weight": 10
   },
"from_address":{
  "company": "EasyPost",
  "street1": "417 Montgomery Street",
  "street2": "5th Floor",
  "city": "San Francisco",
  "state": "CA",
  "zip": "94104",
  "phone": "415-528-7555"
} ,
"to_address":{
  "name": "George Costanza",
  "company": "Vandelay Industries",
  "street1": "1 E 161st St.",
  "city": "Bronx",
  "state": "NY",
  "zip": "10451"
}
}
