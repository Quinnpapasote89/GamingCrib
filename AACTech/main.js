var express = require("express");
var app = express();
var nodemailer = require("nodemailer");
/* const sendmailTransport = require("nodemailer/lib/sendmail-transport"); */
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3080;

//Middleware
//Se especifica la ruta de donde se encuentra la ruta el archivo contact

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/aactech/dist/aactech/"));

app.post("/sendmail", (req,res) =>{

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aactechmerchand@gmail.com',
            pass: 'qjptlvjhrxakwhfe'
        }
    });

    const mailOptions = {
        from: req.body.emailF,
        to: 'aactechmerchand@gmail.com',
        subject: `Mensaje de ${req.body.nombreF}, Asunto: ${req.body.asuntoF}`,
        text: req.body.mensajeF+' De: '+req.body.emailF
    }

    transporter.sendMail(mailOptions);
});

app.listen(port, ()=>{
    console.log("Servidor en -> http://localhost:3080");
})


app.get('/', (req,res) => {
    res.sendFile(process.cwd()+"/aactech/dist/aactech/index.html")
  });