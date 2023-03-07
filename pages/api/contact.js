require('dotenv').config();

const TO_USER = process.env.EMAIL_TO_USER;
const FROM_USER = process.env.EMAIL_FROM_USER;
const FROM_PASSWORD = process.env.EMAIL_FROM_PASSWORD;

export default function ContactRoute (req, res) {
    
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
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
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