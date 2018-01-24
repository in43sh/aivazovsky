const bcrypt = require ('bcrypt');
const saltRound = 12;

module.exports = {
  register: (req, res, next) => {
    const db = req.app.get('db');
    const { username, password } = req.body;
    bcrypt.hash(password, saltRound).then(hashedPassword => {
      db.create_user([ username, hashedPassword ]).then(() => {
        req.session.user = { username };
        res.json({ user: req.session.user });
      }).catch((error) => {
        console.log('error ', error);
        res.status(500).json({ message: 'Something bad happened!' })
      })
    })
  },

  login: (req, res, next) => {
    const db = req.app.get('db');
    const { username, password } = req.body;
    db.find_user([username]).then(users => {
      console.log(users)
      if (users.length) {
        bcrypt.compare(password, users[0].password).then(passwordMatch => {
          if (passwordMatch) {
            req.session.user = { username: users[0].username };
            res.json({ user: req.session.user });
          } else {
            res.status(403).json({ message: 'Wrong password' })
          }
        })
      }
      else {
        res.status(403).json({ message: "That user is not registered" });
      }
    })
  },

  logout: (req, res, next) => {
    req.session.destroy();
    res.status(200).send();
  },

  getUserData: (req, res, next) => {
    res.json({ user: req.session.user })
  }
};