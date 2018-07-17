const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

exports.addMessage = functions.https.onRequest((req, res) => {
    const original = req.query.text;
    return admin
        .database()
        .ref('/messages')
        .push({ original: original })
        .then((snapshot) => {
            return;
        });
});
