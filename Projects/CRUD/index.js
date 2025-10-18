import express from 'express'
const app = express()

app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/show-data', (req, res) => {
   res.render('show-data')
})

app.get('/add-data', (req, res) => {
  res.render('add-data')
})

app.post('/add-data', (req, res) => {

})

app.get('/update-data', (req, res) => {
  res.render('update-data')
})

app.post('/update-data', (req, res) => {

})

app.get('/delete-data', (req, res) => {

})
