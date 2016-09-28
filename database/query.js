var knex = require('./knex');


function Events() {
    return knex('event');
}

function Activities() {
    return knex('activity');
}

function Users() {
    return knex('users');
}





module.exports = {
    getAllEvents: Events,
    getAllActivites: Activities,
    getAllUsers: Users,

    getActivitesByName: function(name) {
        return
        Activities().where('activity_name', name);
    },

    addEvent: function(admin_id, activity_id, title, when, city, state, zip, description) {
        return Events().insert({
            admin_id: admin_id,
            activity_id: activity_id,
            title: title,
            when: when,
            state: state,
            city: city,
            zip: zip,
            description: description
        })
    },

    upcomingEventsByUsers: function(id) {
        return Events().where('admin_id', id)
    },

    getEventsByUsers: function(id) {
      return Events().where('admin_id', id)
    },

    getEventByLocation: function(location) {
        return Events().where('location', location);
    },

    getEventByTime: function(time) {
        return Events().where('when', time);
    },

    deleteEvent: function(id) {
        return Events().where('id', id).del();
    },

    getActivityIDByName: function(name) {
      return Events().select('id').where('event_name', name)
    }
}
