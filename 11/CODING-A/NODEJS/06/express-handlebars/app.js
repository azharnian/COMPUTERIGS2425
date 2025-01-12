const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

const hbs = handlebars.create({});
hbs.handlebars.registerHelper('add', (a, b) => a + b);

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        message: 'Howdy Handlebars!',
    });
});

app.get('/blog', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('blog', {
        blogs : blogs
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'contact',
        message: 'Howdy Handlebars!',
        num1: 5,
        num2: 10,
    });
});

app.get('/christmas', (req, res) => {
    const today = new Date();
    const christmas = today.getUTCDate() === 25 && today.getUTCMonth() + 1 === 12;

    res.render('christmas', {
        title: 'christmas',
        christmas: christmas,
    });
})

app.use((req, res) => {
    res.status(404).send('<h1>404, oops not found!</h1>')
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});