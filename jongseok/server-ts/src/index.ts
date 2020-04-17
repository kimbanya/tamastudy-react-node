import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import config from './config';
import routes from './routes';
import './services/passport';
import mongoDB from './utils/connectDB';
import errorResponse from './utils/errorResponse';

const app: express.Application = express();

// 미들웨어
app.use(bodyParser.json());

// Public 폴더
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
app.use(errorResponse);

app.listen(config.PORT, () => {
  mongoDB();
  console.log(`> SERVER : ${config.PORT}번 포트로 연결되었습니다. `);
});
