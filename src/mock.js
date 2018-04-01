import { stitchClientPromiseWebsite } from './utils/DB'

// Orders
export function insertOrder(order) {
    stitchClientPromiseWebsite.then(stitchClient => {
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