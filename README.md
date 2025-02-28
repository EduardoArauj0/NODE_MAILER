# Envio de E-mails com Nodemailer

Este projeto demonstra como enviar e-mails utilizando o Nodemailer em Node.js.

## Tecnologias Utilizadas

- Node.js
- Nodemailer

## Configuração

1. Instale as dependências:

``` bash
npm install nodemailer
```

2. Configure o transporte SMTP no arquivo index.js:

- Substitua os seguintes valores pelas suas credenciais de e-mail:

``` js

auth: {
    user: 'seu_email',
    pass: 'sua_senha',
}
```

3. Execute o script para enviar um e-mail:

``` bash
node index.js
```

## Observações

- Configuração do Provedor: Este código foi criado utilizando as configurações do Outlook (smtp-mail.outlook.com). Caso deseje usar outro provedor de e-mail (Gmail, Yahoo, etc.), é necessário alterar os parâmetros host, port e secure dentro da configuração do transport. Consulte a documentação do seu provedor para os detalhes corretos.

- Segurança: Para usar um e-mail real, pode ser necessário ativar configurações de aplicativos menos seguros ou gerar uma senha específica para aplicativos..
 
