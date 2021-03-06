const bcrypt = require ('bcrypt');
const saltRound = 12;

module.exports = {
  register: (req, res, next) => {
    const db = req.app.get('db');
    const { username, password } = req.body;
    bcrypt.hash(password, saltRound)
    .then(hashedPassword => {
      db.create_user([ username, hashedPassword ]).then(() => {
        req.session.user = { username };
        res.status(200).json({ user: req.session.user });
      }).catch((error) => {
        // console.log('error ', error);
        res.status(500).json({ message: 'Something bad happened!' })
      })
    })
    .catch( () => res.status(500).send() )
  },

  login: (req, res, next) => {
    const db = req.app.get('db');
    const { username, password } = req.body;
    db.get_user([username])
      .then(users => {
        // console.log('users -> ', users)
        if (users.length) {
          bcrypt.compare(password, users[0].password).then(passwordMatch => {
            if (passwordMatch) {
              req.session.user = { username: users[0].username };
              res.status(200).json({ user: req.session.user });
            } else {
              res.status(401).json({ message: 'Wrong password' })
            }
          })
          .catch( () => res.status(500).send() );
        }
        else {
          res.status(403).json({ message: "That user is not registered" });
        }
      })
    .catch( () => res.status(500).send() );
  },

  logout: (req, res, next) => {
    // console.log('req.session destr ->', req.session)
    req.session.destroy();
    res.status(200).send();
  },

  getUserData: (req, res, next) => {
    // console.log('req.session ->', req.session)
    res.json({ user: req.session.user })
  },

  getUserId: (req, res, next) => {
    const db = req.app.get('db');
    const { params } = req;
    // console.log('params.user -> ', params.user)
    db.get_user([ params.user ])
      .then( user => res.status(200).send(user) )
      .catch( () => res.status(500).send() )
  }
};