import express from 'express';

import dbConfig from './config/db';
import middlewareConfig from './config/middlewares';

dbConfig();

const app = express();
middlewareConfig(app);

const PORT = process.env.PORT || 8964;

app.listen(PORT, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`App listen to port: ${PORT}`);
    }
});
