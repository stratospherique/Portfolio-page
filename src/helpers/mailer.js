const sendEmail = body => {
  window.Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'ahmedosm10@gmail.com',
    Password: 'B520E3B3B2D9C9DCF06E494C8940CF140144',
    To: 'ahmed.mahfoudh1991@gmail.com',
    From: 'ahmedosm10@gmail.com',
    Subject: 'Email from Portfolio form',
    Body: body,
  }).then(message => alert(message));
};

export default sendEmail;
