const nodemailer = require("nodemailer");
const getTemplate = require("./templete");


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "deathkunal1@gmail.com",
    pass: "kmxmogwerdatgmud",
  },
});

const sendMail = (mailId,name) => {
  const info = transporter.sendMail({
    from: "deathkunal1@gmail.com", // sender address
    to: mailId, // list of receivers
    subject: "Account Created", // Subject line
    html: getTemplate(name), // html body
  });
  return info;
};

module.exports = sendMail;
