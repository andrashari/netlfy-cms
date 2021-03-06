import { objToParams } from './components/utils/utils'

// Contacts
export function sendMessage(message) {
    return fetch(`http://localhost:8000/api/contacts/${objToParams(message)}`, {
        method: 'POST',
        headers: {
            ContentType: "application/json",
            Accept: 'application/json'
        }
    }).then(res => res.json());
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
