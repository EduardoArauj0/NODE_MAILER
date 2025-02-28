const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, 
    auth: {
        user:'seu_email',
        pass: 'sua_senha',
    }
});

transport.sendMail({
    from: 'Nome_do_Remetente <seu_email>',
    to: 'Nome_do_Destinatario',
    subject: 'Enviando email com Nodemailer',
    html: '<h1> Olá </h1> <p>Esse email foi enviado usando o Nodemailer</p>',
    text: 'Olá, esse email foi enviado usando o Nodemailer',
})
.then(() => console.log('Email enviado com sucesso!'))
.catch(() => console.log('Erro ao enviar email: ', err))