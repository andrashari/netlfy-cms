import {
    StitchClientFactory
} from 'mongodb-stitch';

const appId = 'alfreskobookingadmin-vwutk';
const stitchClientPromise = StitchClientFactory.create(appId);

// Orders
export function insertOrder(order) {
    stitchClientPromise.then(stitchClient => {
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