import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
const users: any = [];
app.get('/', (req, res) => {
  res.send('Сервер працює!');
});

app.post('/register', (req, res) => {
  const {username, email, password} = req.body;

  if (username && email && password) {
    users.push({username, email, password});
  }
  if (username && email && password) {
    res.status(200).json({message: 'Реєстрація успішна!'});
  } else {
    res.status(400).json({error: 'Помилка: Не всі дані заповнені.'});
  }
});
app.get('/users', (req, res) => {
  res.json(users);
});
app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
