const nodemailer = require("nodemailer");

const sendMail = (email, bloodGroup) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gautamrajat185@gmail.com",
      pass: "ktsonuelghelvrzu",
    },
  });

  var mailOptions = {
    from: "gautamrajat185@gmail.com",
    to: email,
    subject: "Approval Link Form Blood",
    html: `
    <h1 style="font-size : 30px;text-align : center;font-weight : bold;">Blood</h1><br/>
    <h2 style="font-size : 20px;text-align : center;font-weight : bold;">Your Blood Requirement Of ${bloodGroup} Blood Group Has Been Approved.</h2><br/>
    <h2 style="font-size : 20px;text-align : center;font-weight : bold;">Please Contact Us For More Information.</h2><br/>

   
`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error.message);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendMail };
