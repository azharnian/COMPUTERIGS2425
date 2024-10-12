import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { Blog } from './models/blog';

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const dbURI = 'mongodb://localhost:27018/nodejs-app';
mongoose.connect(dbURI)
    .then(result => {
        console.log('connected to db');
        const PORT = 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on http://127.0.0.1:${PORT}`);
        });
    })
    .catch(err => console.log(err));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
    res.redirect('/blogs');
});

app.get('/about', (req: Request, res: Response) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs', (req: Request, res: Response) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { blogs: result, title: 'Home | All blogs' });
        })
        .catch(err => {
            console.log(err);
        });
});

app.post('/blogs', urlencodedParser, (req: Request, res: Response) => {
    const blog = new Blog(req.body);

    blog.save()
        .then(result => {
            res.redirect('/blogs');
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/blogs/create', (req: Request, res: Response) => {
    res.render('create', { title: 'Create a new blog' });
});

app.get('/blogs/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => {
            console.log(err);
        });
});

app.delete('/blogs/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/add-blog', (req: Request, res: Response) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/single-blog', (req: Request, res: Response) => {
    Blog.findById('66db9dcce1430e7c8ecbd50b')
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/all-blogs', (req: Request, res: Response) => {
    Blog.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});

app.use((req: Request, res: Response) => {
    res.status(404).render('404', { title: '404' });
});
