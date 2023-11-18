const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

// MongoDB setup
mongoose.connect('mongodb://localhost:27017/logDB', { useNewUrlParser: true, useUnifiedTopology: true });
const Log = mongoose.model('Log', {
    level: String,
    message: String,
    resourceId: String,
    timestamp: Date,
    traceId: String,
    spanId: String,
    commit: String,
    metadata: {
        parentResourceId: String
    }
});

app.use(bodyParser.json());

app.post('/search', (req, res) => {
    const filters = req.body;

    Log.find(filters, (err, logs) => {
        if (err) {
            console.error(err);
            res.status(500).json({ status: 'error', error: err.message });
        } else {
            res.json({ status: 'success', logs });
        }
    });
});

app.listen(port, () => {
    console.log(`Log Query Interface listening at http://localhost:${port}`);
});
