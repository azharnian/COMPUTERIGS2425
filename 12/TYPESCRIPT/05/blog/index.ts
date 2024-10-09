import express, { Request, Response } from 'express';
import { Blog } from './models/blog';

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  // res.send('Welcome to Express & TypeScript Server');
  res.render('index', {blogs : {}, title: 'Home | All blogs' });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});