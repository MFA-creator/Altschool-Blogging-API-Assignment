import express from 'express';
import mongoose from 'mongoose';
import config from './configs/config.js';
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import middlewareErrorHandler from './middleware/middlewareErrorHandler.js';
import middlewareLogger from './middleware/middlewareLogger.js';

export default const app = express();

app.use(express.json()); // Body parser
app.use(middlewareLogger); // Logging middleware

app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);


app.use(middlewareErrorHandler);  // Error Handling Middleware

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
	console.log('Connected to MongoDB');
	app.listen(3000, () => {
		console.log('Server is running on port 3000');
	});
})
.catch(err => {
	console.error('Error connecting to MongoDB:', err);
});
