module.exports = {
  add_painting: (req, res, next) => {
    const db = req.app.get('db');
    const { title, year, size, location } = req.body;
    console.log(title, year, size, location);

    db.add_painting([ title, year, size, location ])
    .then( () => res.status(200).send() )
    .then( () => res.status(500).send() );
  },

  getOne: ( req, res, next ) => {
    const db = req.app.get('db');
    const { params } = req;

    db.read_painting([ params.id ])
      .then( painting => res.status(200).send( painting ) )
      .catch( () => res.status(500).send() );
  },

  getAll: ( req, res, next ) => {
    const db = req.app.get('db');

    db.read_paintings()
      .then( paintings => res.status(200).send( paintings ) )
      .catch( () => res.status(500).send() );
  },

  update: ( req, res, next ) => {
    const db = req.app.get('db');
    const { params, query } = req;

    db.update_painting([ params.id, query.desc ])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  delete: ( req, res, next ) => {
    const db = req.app.get('db');
    const { params } = req;

    db.delete_painting([ params.id ])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  }
};