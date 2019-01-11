import { stitchClientPromiseWebsite, stitchClientPromiseAdmin } from './components/utils/Db'

import { objToParams } from './components/utils/utils'

// Contacts
export function sendMessage(message) {
    return fetch(`http://localhost:8000/api/contacts/${objToParams(message)}`, {
        method: 'POST',
    }).then(res => res.json());
    /*stitchClientPromiseAdmin.then(stitchClient => {
        const db = stitchClient.service('mongodb', 'mongodb-atlas').db('Orders');
        stitchClient
            .login()
            .then(() =>
                db.collection("Orders")
                    .insertOne({
                        ...{ owner_id: stitchClient.authedId() }, ...order
                    })
            )
            .then(res => console.log(res))
            .catch(e => console.log('error: ', e));
    })*/
}

// Orders
export function insertOrder(order) {
    stitchClientPromiseAdmin.then(stitchClient => {
        const db = stitchClient.service('mongodb', 'mongodb-atlas').db('Orders');
        stitchClient
            .login()
            .then(() =>
                db.collection("Orders")
                    .insertOne({
                        ...{ owner_id: stitchClient.authedId() }, ...order
                    })
            )
            .then(res => console.log(res))
            .catch(e => console.log('error: ', e));
    })
}

export function fetchCampers() {
    return fetch("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/alfreskobookingadmin-vwutk/service/CampersAPI/incoming_webhook/fetchCampers?secret=secret", {
        method: 'GET'
    }).then(res => res.json());
    /*stitchClientPromiseAdmin.then(stitchClient => {
        const db = stitchClient.service('mongodb', 'mongodb-atlas').db('Campers');
        stitchClient
            .login()
            .then(() =>
                db.collection("Campers")
                .find()
            )
            .then(res => console.log(res))
            .catch(e => console.log('error: ', e));
    })*/
}