var express = require('express');
var router = express.Router();
var weather = require('../public/javascripts/weather.js')
var query = require('../database/query');


//*********************
// ******* GETS **********

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/login', function(req, res, next) {
    res.render('login', {
        title: 'Scurry'
    });
});

router.get('/register', function(req, res, next) {
    res.render('register', {
        title: 'Scurry'
    });
});

router.get('/create-profile', function(req, res, next) {
    res.render('create-profile', {
        title: 'Scurry'
    });
});

router.get('/dashboard', function(req, res, next) {
<<<<<<< HEAD
  query.upcomingEventsByUsers(req.user.id)
  .then(function(data){
=======
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
>>>>>>> 30019969b75c18b99a619307c897479f14a5d0aa
  res.render('dashboard', {
    title: 'Scurry',
    events: data,
  })
})
})

router.get('/find-activity', function(req, res, next) {
<<<<<<< HEAD
        query.getAllActivites()
         .then(function(data) {
             res.render('find-activity', {
                 title: 'Scurry',
                 activity: data,
                 user_id: req.user.id
             });
           })
         .catch(function(err) {
             return next(err);
         })

=======
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  query.getAllActivites()
    .then(function(data) {
      console.log(data)
      res.render('find-activity', {
         title: 'Scurry',
          activity: data,
          user_id: req.user.id
        });
      }).catch(function(err) {
         return next(err);
        })
>>>>>>> 30019969b75c18b99a619307c897479f14a5d0aa
});


router.get('/create-activity', function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  query.getAllActivites()
      .then(function(data) {
          res.render('create-activity', {
              title: 'Scurry',
              activity: data,
              admin_id: req.user.id
          });
        })
      .catch(function(err) {
          return next(err);
      })
});


//initial scurry-activity page intil a yes or no choice is made
router.get('/scurry-activity', function(req, res, next) {
<<<<<<< HEAD
    res.render('scurry-activity', {
        title: 'Scurry'
    });
=======
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  res.render('scurry-activity', {
    title: 'Scurry' });
>>>>>>> 30019969b75c18b99a619307c897479f14a5d0aa
});

//when no/next button is chosen the first time, it will route to this
router.get('/scurry-activity/:id', function(req, res, next) {
<<<<<<< HEAD
    res.render('scurry-activity', {
        title: 'Scurry'
    });
=======
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  res.render('scurry-activity', {
    title: 'Scurry' });
>>>>>>> 30019969b75c18b99a619307c897479f14a5d0aa
});

//*********************
// ***** POSTS ********

router.post('/login', function(req, res, next) {
    res.redirect('/dashboard')
})

router.post('/resgister', function(req, res, next) {
    res.redirect('/create-profile')
})

router.post('/create-profile', function(req, res, next) {
    res.redirect('/dashboard')
})

router.post('/create-activity', function(req, res, next){
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  console.log("title" + req.body.title);

  var admin_id = req.user.id;
  var activity_id = req.body.activity_id;
	var title = req.body.title;
  var when = req.body.when;
	var city = req.body.city;
  var state = req.body.state;
  var zip = req.body.zip;
	var description = req.body.description;

  query.addEvent(admin_id, activity_id, title, when, city, state, zip, description)
	.then(function(data) {
    res.redirect('/dashboard')
	})
<<<<<<< HEAD
	.catch(function(err){
=======
	.catch(function(err) {
>>>>>>> 30019969b75c18b99a619307c897479f14a5d0aa
		return next(err);
	})
})

<<<<<<< HEAD
router.post('/create-activity', function(req, res, next) {
    res.redirect('/dashboard')
})

router.post('/scurry-activity', function(req, res, next) {
    res.redirect('/scurry-activity')
})

router.post('/scurry-activity/:id', function(req, res, next) {
    res.redirect('/activity')
})
=======
// router.post('/create-activity', function(req, res, next){
//   if (!req.isAuthenticated()) {
//     res.redirect('/');
//     return;
//   }
//   res.redirect('/dashboard')
// })

router.post('/scurry-activity', function(req, res, next){
  if (!req.isAuthenticated()) {
    res.redirect('/');
    return;
  }
  res.redirect('/scurry-activity/' + req.body.activity_name)
})


>>>>>>> 30019969b75c18b99a619307c897479f14a5d0aa

module.exports = router;
