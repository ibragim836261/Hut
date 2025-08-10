import express, { Request, Response, NextFunction } from 'express';
import { register, addProduct, generateCode } from './src';
import { Client } from 'pg';

const app = express();
app.use(express.json());

const client = new Client({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

async function sta  await client.connect();
  app.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000');
  });
}

app.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await register(email, password);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

app.post('/products', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { standoffId, name, price } = req.body;
    const product = await addProduct(standoffId, name, price);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

app.get('/code', async (req: Request, res: Response) => {
  const code = generateCode();
  res.json({ code });
});

start();
