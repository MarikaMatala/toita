const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/vehicles', (req, res) => {
const vehicles = [
{ make: 'Toyota', model: 'Camry', type: 'Sedan' },
{ make: 'Honda', model: 'Civic', type: 'Sedan' },
{ make: 'Ford', model: 'Mustang', type: 'Sports car' },
]
res.json({ data: vehicles })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
console.log(Server is running on port ${port})
})