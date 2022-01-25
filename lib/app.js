const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes

// Hit this route to:
    // - Check the nasa api for a risk.(service)
    // - If risk exists:
        //  - pulls phonelist data.(model)
        //  - warns each user. (service)
    // - If risk does not exist, return 'no risk message' (service)
// app.use('/api/v1/asteroids', require('./controllers/asteroids'));
app.use('/api/v1/numbers', require('./controllers/numbers'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
