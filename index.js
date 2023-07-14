const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

//idea
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@sggs+(?:\.ac)+(?:\.in+)*$/;
app.post('/', (req, res) => {
    // console.log(req.body);
    // console.log(req.body.email);
    if (validRegex.test(req.body.email)) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'nssideabox@gmail.com',
                pass: 'qnqakkikmtgzfgdd'
            }

        })
        const mailOptions = {
            from: `nssideabox@gmail.com`,
            to: 'nssideabox@gmail.com',
            subject: `Idea from ${req.body.name} of ${req.body.year} year`,
            text: `email: ${req.body.email}, \nmessage: ${req.body.message}`
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                // console.log(error);
                res.send('error');
            }
            else {
                // console.log('Email sent: ' + info.response);
                res.send('success');
            }
        })
    }
})

app.listen(PORT, () => {
    console.log(`NSS Website is Live and running on 3000`);
})  