import {
    StitchClientFactory
} from 'mongodb-stitch';

// Google and Facebook Auth
const appIdWebsite = 'alfreskowebsite-jxjsg';
export const stitchClientPromiseWebsite = StitchClientFactory.create(appIdWebsite);

// 
const appIdAdmin = 'alfreskobookingadmin-vwutk';
export const stitchClientPromiseAdmin = StitchClientFactory.create(appIdAdmin);

const vans = 
[
    {
      "name": "VW T4",
      "thumbnail": "https://placehold.it/300x400",
      "image": [
         "https://placehold.it/300x100",
         "https://placehold.it/300x101",
         "https://placehold.it/300x102"
      ],
      "description": "description1",
      "travels": "2 people",
      "basicSpecs": [
         "VOLKSWAGEN TRANSPORTER T4",
         "2400 cc, 55 kW",
         "DIESEL"
      ],
      "included": [
         "REFRIGERATOR (220V)",
         "GAS COOKER with 1 catridge",
         "Kitchen equipment",
         "duvet & bedsheet",
         "",
         "Plug socket camping"
      ],
      "extras": [
         "BICYCLE 1",
         "barbecue",
         "extra gas cartridge"
      ]
    },
    {
      "name": "Nemo",
      "thumbnail": "https://placehold.it/300x400",
      "images": [
         "https://placehold.it/300x103",
         "https://placehold.it/300x104",
         "https://placehold.it/300x105"
      ],
      "description": "description2",
      "travels": "2 people",
      "basicSpecs": [
         "Citroen Nemo",
         "missing CC, 51 kW",
         "DIESEL"
      ],
      "included": [
         "REFRIGERATOR (220V)",
         "GAS COOKER with 1 catridge",
         "Kitchen equipment",
         "duvet & bedsheet",
         "Roof top tent",
         "Plug socket camping"
      ],
      "extras": [
         "Folding bike",
         "barbecue",
         "extra gas cartridge"
      ]
   }
]

export function insertVans() {
    stitchClientPromiseAdmin.then(stitchClient => {
        const db = stitchClient.service('mongodb', 'mongodb-atlas').db('Vans');
        stitchClient
            .login()
            .then (() => {
                return vans.map( van => (
                    {...{
                    owner_id: stitchClient.authedId()
                    },
                    ...van}
                ))
            })
            .then(vans => {
                db.collection("Vans")
                .insertMany(vans)
            })
            .then(res => console.log(res))
            .catch(e => console.log('error: ', e));
    })
}