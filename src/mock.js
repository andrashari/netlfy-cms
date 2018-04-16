import { stitchClientPromiseWebsite, stitchClientPromiseAdmin } from './utils/Db'

// Orders
export function insertOrder(order) {
    stitchClientPromiseAdmin.then(stitchClient => {
        const db = stitchClient.service('mongodb', 'mongodb-atlas').db('Orders');
        stitchClient
            .login()
            .then(() =>
                db.collection("Orders")
                .insertOne({
                    ...{owner_id: stitchClient.authedId()}, ...order
                })
            )
            .then(res => console.log(res))
            .catch(e => console.log('error: ', e));
    })
}

export function fetchVans() {
    return fetch("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/alfreskobookingadmin-vwutk/service/VansAPI/incoming_webhook/fetchVans?secret=secret", {
        method: 'GET'
    }).then(res => res.json());
    /*stitchClientPromiseAdmin.then(stitchClient => {
        const db = stitchClient.service('mongodb', 'mongodb-atlas').db('Vans');
        stitchClient
            .login()
            .then(() =>
                db.collection("Vans")
                .find()
            )
            .then(res => console.log(res))
            .catch(e => console.log('error: ', e));
    })*/
}