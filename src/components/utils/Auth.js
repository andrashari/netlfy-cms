import {
    stitchClientPromiseWebsite
} from './Db'

// TODO
export function insertUser(user) {
    const handledUser = user.then(res => alert(JSON.stringify(res)));
    //alert(handledUser);
    /*stitchClientPromiseWebsite.then(stitchClient => {
        const db = stitchClient.service('mongodb', 'mongodb-atlas').db('Users');
        stitchClient
            .login()
            .then(() =>
                db.collection("Credentials")
                .insertOne({
                    ...{owner_id: stitchClient.authedId()}, ...user
                })
            )
            .then(res => console.log(res))
            .catch(e => console.log('error: ', e));
    })*/
}

// Register with email/password
export function registerEmail(email, password) {
    console.log("registerEmail");
    return stitchClientPromiseWebsite.then(client => {
        client.register(email, password)
            .then(() => {
                console.log("Successfully sent account confirmation email!");
                /* code to direct user to check their email */
            })
            .catch(err => {
                console.log("Error registering new user:", err);
            });
    })
}

export function logInWithFacebook() {
    console.log("logInWithFacebook");
    return stitchClientPromiseWebsite.then(client => {
        insertUser(client.authenticate("facebook"))
    })
}

export function logInWithGoogle() {
    console.log("logInWithGoogle");
    return stitchClientPromiseWebsite.then(client => {
        client.authenticate("google");
    })
}

// Logout
export function logOut(order) {
    stitchClientPromiseWebsite.then(stitchClient => {
        console.log(stitchClient.logout())
    })
}

// Is authenticated
export function isAuthenticated(order) {
    stitchClientPromiseWebsite.then(stitchClient => {
        console.log(stitchClient.isAuthenticated())
    })
}

// currentUser
export function currentUser(order) {
    stitchClientPromiseWebsite.then(stitchClient => {
        stitchClient.isAuthenticated() ? console.log(stitchClient.userProfile()) : console.log("No Authenticated user")
    })
}