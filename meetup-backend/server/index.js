import express from 'express';

const app = express();
const PORT = process.env.PORT || 8964;

app.listen(PORT, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`App listen to port: ${PORT}`);
    }
});
