module.exports = {
	getHouses       : (req, res, next) => {
		const dbInstance = req.app.get('db');

		dbInstance.read()
				  .then((resp) => res.status(200).send(resp))
				  .catch((err) => res.status(500).send(err));
	},
	addHouse   : (req, res, next) => {
		const dbInstance = req.app.get('db');
		let {name, address, city, state, zipcode} = req.body;
		zipcode = +zipcode;

		dbInstance.addHouse([name, address, city, state, zipcode])
				  .then((resp) => res.status(200).send(resp))
				  .catch((err) => res.status(500).send(err));
	},
	removeHouse: (req, res, next) => {
		const dbInstance = req.app.get('db'),
			  {id}       = req.params;

		dbInstance.removeHouse([id])
				  .then((resp) => res.status(200).send(resp))
				  .catch((err) => res.status(500).send(err));
	}
};