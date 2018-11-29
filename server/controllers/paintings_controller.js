module.exports = {
  add_painting: (req, res, next) => {
    const db = req.app.get('db');
    const { userid, title, year, dimensions, genre, url } = req.body;
    console.log('deconstructured req.body ', title, year, dimensions, genre, url);

    db.add_painting([ userid, title, year, dimensions, genre, url ])
      .then( () => res.status(200).send() )
      .catch( ( paintings ) => res.status(500).send( paintings ) );
  },

  getOne: ( req, res, next ) => {
    const db = req.app.get('db');
    const { params } = req;
    // console.log('params -> ', params);

    db.read_painting([ params.id ])
      .then( ( painting ) => res.status(200).send( painting ) )
      .catch( () => res.status(500).send() );
  },

  getByGenre: ( req, res, next ) => {
    const db = req.app.get('db');
    const { params } = req;

    db.read_some_paintings([ params.genre ])
      .then ( ( paintings ) => res.status(200).send( paintings ) )
      .catch( () => res.status(500).send() );
  },

  search: ( req, res, next ) => {
    const db = req.app.get('db');
    const { params } = req;

    // how do we write a function to work with it here
    db.read_all_paintings()
      .then ( ( paintings ) => res.status(200).send( paintings ))
      .catch( () => res.status(500).send() );
  },

  getByUser: (req, res, next) => {
    const db = req.app.get('db');
    const { params } = req;

    db.read_paintings_of_user([ params.user ])
      .then( (paintings) => res.status(200).send( paintings ) )
      .catch( () => res.status(500).send() );
  },

  getSlideShow: (req, res, next) => {
    const db = req.app.get('db');

    db.read_slideshow()
      .then( (paintings) => res.status(200).send( paintings ) )
      .catch( () => res.status(500).send() )
  },

  getAll: ( req, res, next ) => {
    const db = req.app.get('db');

    db.read_all_paintings()
      .then( ( paintings ) => res.status(200).send( paintings ) )
      .catch( () => res.status(500).send() );
  },

  update: ( req, res, next ) => {
    const db = req.app.get('db');
    const { params, body } = req;
    // console.log('params, body -> ', params, body);

    db.update_painting([ params.id, body.data ])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  // made the decision not to use keyword 'delete' to name the function
  destroy: ( req, res, next ) => {
    const db = req.app.get('db');
    const { params } = req;

    db.delete_painting([ params.id ])
      .then( ( paintings ) => res.status(200).send( paintings ) )
      .catch( () => res.status(500).send() );
  }
};