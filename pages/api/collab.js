require('dotenv').config();

const TO_USER = process.env.EMAIL_TO_USER;
const FROM_USER = process.env.EMAIL_FROM_USER;
const FROM_PASSWORD = process.env.EMAIL_FROM_PASSWORD;

export default function CollabRoute (req, res) {
    
    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: FROM_USER,
            pass: FROM_PASSWORD
        },
        secure: true
    });

    const mailData = {
        from: FROM_USER,
        to: TO_USER,
        subject: `INTERVIEW REQUEST from ${req.body.name}`,
        text: "Seeking " + req.body.position + " @ " + req.body.projectName + " | " + req.body.message + " | Sent from: " + req.body.email,
        html: `<div><h1>Seeking ${req.body.position} @ ${req.body.projectName}</h1><p> ${req.body.message}</p></div><p>Sent from: ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
        transporter.close();
    })

    return res.status(200).send();
}