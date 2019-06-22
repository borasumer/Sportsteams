const SportsTeam = require('../models/sportsteam');

exports.new = (req, res) => {
  res.render('sportsteams/new', {
    title: 'New Team'
  });
};

exports.index = (req, res) => {
  SportsTeam.find()
    .then(sportsteams => {
      res.render('sportsteams/index', {
       sportsteams : sportsteams,
        title: 'Teams'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};

exports.show = (req, res) => {
  SportsTeam.findById(req.params.id)
    .then(sportsteam => {
      res.render('sportsteams/show', {
        title: sportsteam.teamName,
        sportsteam: sportsteam
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/sportsteams');
    });
};

exports.create = (req, res) => {
  SportsTeam.create(req.body.sportsteam)
    .then(() => {
      req.flash('success', 'Your new team was created successfully.');
      res.redirect('/sportsteams');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.render('sportsteams/new', {
        sportsteam: req.body.sportsteam,
        title: 'New Team'
      });
    });
};

exports.east = (req, res) => {
  SportsTeam.find().east()
    .then(sportsteams => {
      res.render('sportsteams/index', {
        sportsteams: sportsteams,
        title: 'EAST'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });

};

exports.west = (req, res) => {
  SportsTeam.find().west()
    .then(sportsteams => {
      res.render('sportsteams/index', {
        sportsteams: sportsteams,
        title: 'WEST'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });

};

exports.edit = (req, res) => {
  SportsTeam.findById(req.params.id)
    .then(sportsteam => {
      res.render('sportsteams/edit', {
        title: `Edit ${sportsteam.teamName}`,
        sportsteam: sportsteam
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/sportsteams');
    });
};

exports.update = (req, res) => {
  SportsTeam.updateOne({
    _id: req.body.id
  }, req.body.sportsteam, {
      runValidators: true
    })
    .then(() => {
      req.flash('success', 'Your new team was updated successfully.');
      res.redirect(`/sportsteams/${req.body.id}`);
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect(`/sportsteams/${req.body.id}/edit`);
    });
};

exports.destroy = (req, res) => {
  SportsTeam.deleteOne({
    _id: req.body.id
  })
    .then(() => {
      req.flash('success', 'Your team was deleted successfully.');
      res.redirect(`/sportsteams`);
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect(`/sportsteams`);
    });

};