import express, { urlencoded } from 'express';
const app = express();
import usersRouter from './routes/usersRouter.js';

app.set('view engine', 'ejs');
app.use(urlencoded({ extended: true }));
app.use('/', usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`express app listening on port ${PORT}`);
});
