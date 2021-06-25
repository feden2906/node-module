const express = require('express')
const app = express()
const path = require('path')

const pathUsers = path.join(__dirname, 'static', 'users.json')
const fs = require('fs/promises');
let error = '';



app.use(express.json())
app.use(express.urlencoded({extended: true}))
const expressHBS = require('express-handlebars')

app.use(express.static(path.join(__dirname, 'static')))

app.set('view engine', '.hbs')

app.engine('.hbs', expressHBS({
    defaultLayout: false
}))
app.set('views', path.join(__dirname, 'static'))


app.listen(3000, () => {
    console.log('app listen 3000')
})

app.get('/signUp', (req, res) => {
    res.render('signUp')
})

app.post('/signUp', async (req, res) => {
    const {login, password} = req.body;

    if (!login || !password) {
        error = 'fill all fields';
        res.redirect('/error');
        return;
    }

    const users = JSON.parse(await fs.readFile(pathUsers));

    const foundUser = users.find(user => user.login === login);

    if (foundUser) {
        error = 'user already exists';
        res.redirect('/error');
        return;
    }

    const id = users.length + 1;
    users.push({...req.body, id});

    await fs.writeFile(pathUsers, JSON.stringify(users));

    res.redirect(`/users/${id}`)
});

app.get('/error', (req, res) => {
    res.render('error', {error});
});

app.get('/users/:userId', async (req, res) => {
    const users = await fs.readFile(pathUsers);
    const {userId} = req.params;

    const user = JSON.parse(users).find(user => user.id === +userId);
    res.render('user', user);
})


app.get('/login', (req, res) => {
    res.render('logIn')
})

app.post('/login', async (req, res) => {
    console.log(req.body)
    const {login, password} = req.body
    if (!login || !password) {
        error = 'fill all fields';
        res.redirect('/error');
        return;
    }

    const users = JSON.parse(await fs.readFile(pathUsers));

    const foundUser = users.find(user => (user.login === login) && (user.password = password));
    res.render('user',foundUser)
    console.log(foundUser)

    if (!foundUser) {
        error = 'user dont exists';
        res.redirect('/error');
        return;
    }


})

app.get('/', (req, res) => {
    res.render('home')
})
app.post('/', (req, res) => {
    console.log(req.body)
})

app.get('/showAll', async (req, res) => {
    const users = JSON.parse(JSON.stringify(JSON.parse(await fs.readFile(pathUsers))));
    console.log(JSON.stringify(users))

        res.render('showAll', {users} )


})
