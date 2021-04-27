const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const sgMail = require('@sendgrid/mail')
const msg = {
  to: 'domenico.giacobino@gmail.com', // Change to your recipient
  from: 'domenico.giacobino@enginius.com', // Change to your verified sender
  templateId: 'd-baaec85cbdd643cead8ae2bb0f958eef',
  dynamicTemplateData: {
    subject: 'your lap',
    lap_time:"3:12:230",
    position:"3"
  }
}
app.get('/', (req, res) => {
  sgMail.setApiKey('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')
  console.log('test')
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
      res.send('mail sent')
    })
    .catch((error) => {
      console.error(error)
      res.send(error)
    })
  
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



