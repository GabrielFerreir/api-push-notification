const webpush = require('web-push');

function pushNotification(req, res) {

    const options = {
        vapidDetails: {
            subject: 'http://127.0.0.1:8080',
            publicKey: 'BAjDL342V7SFFfe5iEzj54Lg2di3SJaUMyRqf8XdrFwO4p7D2pxnqDXj3i8s6SFeH6QIzTYsmJc_q8vmjnVK3EA',
            privateKey: 'Lcv7wLntpNJpq5crkepaeSW8VAXrUYTAUgSCyU9rB7E'
        },
        TTL: 5000
    }

    const pushSubscription = req.body.push;

    const payload = JSON.stringify({
        notification: {
            title: 'Testando Push Notification',
            body: 'Notificação enviada com sucesso',
            icon: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
            data: 'additional data',
            vibrate: [300, 100, 400]
        }
    });

    webpush.sendNotification(
        pushSubscription,
        payload,
        options
    );


    console.log(req.body);
    return res.status(200).json({
        "message": "Success",
        "content": req.body
    });

}

module.exports = {
    pushNotification
}