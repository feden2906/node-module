const express = require('express')
const app = express()
app.use(express.json)
const expresHBS=require('express-handlebars')
app.set('view engine', 'hbs');
app.engine('.hbs',expresHBS({
    defaultLayout: false
}))
app.set('views',path.join(__dirname,'static'))
const users=[
    {name:'victor', age:25},
    {name:'evgen', age:22},
    {name:'emilia', age:45},
]

// app.listen(3000, () => {
//     console.log('App listen 3000')
// })
//
// HttpMethods:
// get
// post
// put
// delete
// patch
// head
// option

// app.get('/', (req, res) => {
//     console.log(req)
//     res.write('hello')
//     // res.end('hello')
//     // res.send()
//     res.json('end')
// })

app.post('/', ((req, res) => {
    console.log(req.body)
    console.log(req.query)
    res.json('post')
}))


app.get('users',(req, res) => {
    res.json(users)
    console.log(users)
})


// динамічні параметри
app.get('/users/:id',((req, res) => {
    const {id}=req.params
    res.json(users[id])
}))