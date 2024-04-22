import express from 'express';
import signup from '../controllers/signup.js';
import login from '../controllers/login.js'


export default const authRoutes = express.Router();

authRoutes.post('/signup', signup);  //POST signup

authRoutes.post('/login', login);  // POST login
