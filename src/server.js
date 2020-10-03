import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

// import * as api from "../api";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express();

// @frontend
app.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware()
)
.listen(PORT, err => {
	if (err) console.log('error', err);
});

export default app;