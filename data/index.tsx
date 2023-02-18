export const product = {
  "name": "Protein Shake",
  "sku": "00090616",
  "active": true,
  "purchase_options": {
    "standard": {
      "active": true,
      "price": 10,
      "sale_price": null,
      "sale": false,
      "prices": []
    },
    "subscription": {
      "active": true,
      "plans": [
        {
          "name": "Monthly",
          "description": "1 shake/month",
          "price": 9,
          "billing_schedule": {
            "interval": "monthly",
            "interval_count": 1,
            "limit": null,
            "trial_days": 14
          },
          "id": "627c6f180d375a001296b593",
          "active": true
        },
        {
          "name": "Quarterly",
          "description": "1 shake/quarter",
          "price": 9,
          "billing_schedule": {
            "interval": "monthly",
            "interval_count": 1,
            "limit": null,
            "trial_days": 14
          },
          "id": "627c6f180d375a001296b594",
          "active": true
        }
      ]
    }
  },
  "variable": true,
  "description": "<h3>Delicious protein shake</h3>",
  "tags": [],
  "meta_title": null,
  "meta_description": null,
  "slug": "iron-dagger",
  "attributes": {
    "blade": "",
    "dagger": "",
    "type": [
      "Fine",
      "Rusty"
    ]
  },
  "delivery": "shipment",
  "bundle": null,
  "price": 10,
  "stock_tracking": false,
  "options": [
    {
      "id": "627c6e36e80393798c171670",
      "name": "Flavor",
      "active": true,
      "input_type": "select",
      "variant": true,
      "description": null,
      "required": true,
      "attribute_id": "type",
      "values": [
        {
          "id": "627c6f18e80393798c171673",
          "name": "Vanilla",
          "price": null,
          "shipment_weight": null,
          "description": "A better-than-usual iron dagger"
        },
        {
          "id": "627c6f18e80393798c171674",
          "name": "Chocolate",
          "price": 0,
          "shipment_weight": null,
          "description": "This dagger's seen better days"
        }
      ],

    },
    {
      "id": "627c6e36e80393798c171670",
      "name": "Size",
      "active": true,
      "input_type": "radio",
      "variant": true,
      "description": null,
      "required": true,
      "attribute_id": "type",
      "values": [
        {
          "id": "527c6f18e80393798c171673",
          "name": "30 Servings",
          "price": "29.99",
          "shipment_weight": null,
          "description": "A better-than-usual iron dagger"
        },
        {
          "id": "527c6f18e80393798c171674",
          "name": "45 servings",
          "price": "44.99",
          "shipment_weight": null,
          "description": "This dagger's seen better days"
        },
        {
          "id": "527c6f18e80393798c171675",
          "name": "100 servings",
          "price": "99.99",
          "shipment_weight": null,
          "description": "This dagger's seen better days"
        }
      ],

    }

  ],
  "currency": "USD",
  "sale": false,
  "sale_price": null,
  "prices": [],
  "type": "standard",
  "tax_class": "standard",
  "date_created": "2022-05-12T02:21:12.534Z",
  "stock_status": null,
  "date_updated": "2022-05-12T02:37:45.666Z",
  "category_index": {
    "sort": {
      "627c6db5632818001272f8ed": 0,
      "627c6dc30d375a001296a8b7": 0
    },
    "id": [
      "627c6db5632818001272f8ed",
      "627c6dc30d375a001296a8b7"
    ]
  },
  "cross_sells": [],
  "up_sells": [
    {
      "id": "627c7225e80393798c17167b",
      "product_id": "627c715e632818001274ebd8"
    }
  ],
"id": "627c6f180d375a001296b580"
}