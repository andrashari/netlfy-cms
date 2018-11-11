import {
    StitchClientFactory
} from 'mongodb-stitch';

// Google and Facebook Auth
const appIdWebsite = 'alfreskowebsite-jxjsg';
export const stitchClientPromiseWebsite = StitchClientFactory.create(appIdWebsite);

//
const appIdAdmin = 'alfreskobookingadmin-vwutk';
export const stitchClientPromiseAdmin = StitchClientFactory.create(appIdAdmin);

const campers =
    [
        {
            "name": "Cielito Lindo",
            "thumbnail": "https://placehold.it/1138x300",
            "images": [
                "https://placehold.it/300x777",
                "https://placehold.it/300x101",
                "https://placehold.it/300x102"
            ],
            "description": "The VW T4 is one of the most reliable van models. With our cozy camper conversion feel like you’re at home everywhere!",
            "drives": 3,
            "sleeps": 2,
            "basicSpecs": [
                "VOLKSWAGEN TRANSPORTER T4 1997",
                "2400 cc, 55 kW",
                "diesel"
            ],
            "included": [
                "15L water tank & sink",
                "Compressor Fridge 38L (12v/220V)",
                "GAS COOKER with 1 catridge",
                "kitchen equipment",
                "pillow, duvet & bedsheet",
                "220V camping cable 20m",
                "table and chairs"
            ],
            "extras": [
                "bicycle",
                "compact barbecue",
                "extra gas cartridge",
                "hammock",
                "child seat",
                "awning"
            ]
        },
        {
            "name": "Bipper",
            "thumbnail": "https://placehold.it/1138x300",
            "images": [
                "https://placehold.it/300x103",
                "https://placehold.it/300x104",
                "https://placehold.it/300x105"
            ],
            "description": "The smallest mini campervan! Low on fuel, small dimension but with all the comfort for your next adventure.",
            "drives": 2,
            "sleeps": 2,
            "basicSpecs": [
                "Peugeot Bipper 2013",
                "1300cc HDI, 55kw",
                "diesel"
            ],
            "included": [
                "15L water tank & sink",
                "Compressor Fridge 38L (12v/220V)",
                "GAS COOKER with 1 cartridge",
                "kitchen equipment",
                "pillow, duvet & bedsheet",
                "Roof top tent",
                "220V camping cable 20m",
                "table and chairs"
            ],
            "extras": [
                "bicycle",
                "compact barbecue",
                "extra gas cartridge",
                "hammock",
                "child seat",
            ]
        }
    ]

export function resetCampers() {
    stitchClientPromiseAdmin.then(stitchClient => {
        const db = stitchClient.service('mongodb', 'mongodb-atlas').db('Campers');
        stitchClient
            .login()
            .then(() => db.collection("Campers").deleteMany({}))
            .then(() => {
                return campers.map(camper => (
                    {
                        ...{
                            owner_id: stitchClient.authedId()
                        },
                        ...camper
                    }
                ))
            })
            .then(campers => {
                db.collection("Campers")
                    .insertMany(campers)
            })
            .then(res => console.log(res))
            .catch(e => console.log('error: ', e))
    })
}