const mongoose = require('mongoose');

mongoose
    
	.connect('mongodb://localhost:27017/db-final-project', {
		useNewUrlParser: true,
		useUniFiedTopology: true,
		// useCreateIndex: true,
		// useFindAndModify: false
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.log('Failed to connect to MongoDB', err));
