const PastEvent = require('../models/event');

exports.getEvents = (req, res, next) => {
  PastEvent.find()
    .then((events) => {
      res.render('events/past_events', {
        events: events,
        pageTitle: 'Past Events',
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
