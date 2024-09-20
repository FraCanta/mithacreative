import nodemailer from "nodemailer";

export default async function mailer(req, res) {
  const { name, work, email, source, services, price, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.it",
    port: 465,
    secure: true,
    auth: {
      user: "info@thallion-dev.it",
      pass: "Sari_male84?",
    },
  });

  const thankHtml = `
   <html lang="it">
  <head>
    <style>
      .container {
        padding: 20px;
        background-color: #ffffff;
        border: 1px solid #cccccc;
        border-radius: 5px;
      }
      .heading {
        font-size: 24px;
        font-weight: bold;
      }
      .button {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        color: #ffffff;
        background-color: #007bff;
        text-decoration: none;
        border-radius: 5px;
        margin-top: 20px;
      }
      .footer {
        margin-top: 20px;
        font-size: 14px;
        color: #777777;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p>Ciao ${name},</p>
      <p>Grazie per avermi contattata. Ho ricevuto la tua richiesta e sono felice di offrirti un incontro per discutere ulteriormente.</p>
      <p>Per prenotare una call, clicca sul pulsante qui sotto:</p>
      <a href="https://calendly.com/thallion-dev-info/call" class="button">Prenota una Call</a>
      <p>Saluti,<br>Thallion Dev</p>
    </div>
    <div class="footer">
      Barberino di Mugello (FI) - Lavoro da remoto
    </div>
  </body>
</html>

  `;

  try {
    await transporter.sendMail({
      from: `Thallion dev <info@thallion-dev.it>`,
      to: ["info@thallion-dev.it"],
      subject: `${name} di ${work} ti scrivo per... `,
      replyTo: `${email}`,
      html: ` 
      <div style="font-size:16px; padding:4px; margin-bottom:20px;">Tipo di servizio : ${services}  </div>
      <div style="font-size:16px; padding:4px; margin-bottom:20px;">Vorrei restare attorno :  ${price} </div>


<div >
<div style="font-size:16px; margin-top: 20px">Ho sentito parlare di te tramite ${source}.</div>
<div style="font-size:16px; margin-top: 20px">Sono ${name} ,</div>
<div style="font-size:16px; padding:4px; margin-bottom:20px;">
${message}
</div>
<div>
Referenze del contatto: 
</div>

<ul>
<li>
${email}
</li></ul>

</div>
‍


    </div>
      `,
    });
    // Invia l'email di ringraziamento all'utente
    await transporter.sendMail({
      from: `Thallion Dev `,
      to: email,
      subject: "Grazie per avermi contattata",
      html: thankHtml,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
}
