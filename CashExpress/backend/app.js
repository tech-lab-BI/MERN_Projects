const express = require('express');
const cors = require('cors');
const appRouter = require('./routers/appRouter');

const app = express();
app.use(cors());
app.use(appRouter);

app.listen(3001, () => {
    console.log("SERVER START >>>>>");
});