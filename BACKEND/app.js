const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
console.log(process.env.MONGODB_URL)

const accountRoute = require('./routes/accountRoute')
const vehicleRoute = require('./routes/vehicleRoute')
const bookingRoute = require('./routes/bookingRoute')
const companyDealerRoute = require('./routes/companyDealerRoute')
const documentRoute = require('./routes/documentRoute')
const feedbackRoute = require('./routes/feedbackRoute')
const subscriptionRoute = require('./routes/subscriptionRoute')

app.use('/api/accounts', accountRoute)
app.use('/api/vehicles', vehicleRoute)
app.use('/api/bookings', bookingRoute)
app.use('/api/company-dealers', companyDealerRoute)
app.use('/api/documents', documentRoute)
app.use('/api/feedbacks', feedbackRoute)
app.use('/api/subscriptions', subscriptionRoute)
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.error('MongoDB connection error:', err)
  })
app.get('/', (req, res) => {
  res.send('🚀 API is working!');
});
