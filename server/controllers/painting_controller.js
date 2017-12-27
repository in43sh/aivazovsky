module.exports = {
  add: (req, res, next) => {
    const db = req.app.get('db');
    const { title, year, size, location } = req.body;
    console.log(title, year, size, location);

    db.add_painting([ title, year, size, location ])
    .then( () => res.status(200).send() )
    .then( () => res.status(500).send() );
  }
}