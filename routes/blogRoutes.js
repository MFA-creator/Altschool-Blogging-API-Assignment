import express from 'express';
import createBlog from '../controllers/createBlog.js';
import verifyToken from '../controllers/verifyToken.js';

export default const blogRoutes = express.Router();

blogRoutes.post('/blogs', verifyToken, createBlog);  // POST blogs (create a new blog)
