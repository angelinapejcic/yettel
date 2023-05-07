const express = require('express');
const router = express.Router();
const userValidation = require('../validation/userValidation');
const blogValidation = require('../validation/blogValidation');
const { validate } = require('express-validation')

const authenticateJWT = require('../middleware/auth');

// Controllers
const usersControler = require('../controller/usersControler');
const blogsControler = require('../controller/blogsControler');

// Routes
router.post('/login', usersControler.login);
router.post('/refreshToken', authenticateJWT, usersControler.refreshToken);

// User routes
router.get('/users', authenticateJWT, usersControler.getUsers);
router.post('/create/user', authenticateJWT, validate(userValidation.userCreateValidation, {}, {}), usersControler.createUser);
router.delete('/user/:id', authenticateJWT, usersControler.deleteUser)
router.patch('/user/:id', authenticateJWT, validate(userValidation.userUpdateValidation, {}, {}), usersControler.updateUser)

// Blog routes
router.get('/blogs', authenticateJWT, blogsControler.getBlogs);
router.post('/create/blog', authenticateJWT, validate(blogValidation.blogCreateValidation, {}, {}), blogsControler.createBlog);
router.delete('/blog/:id', authenticateJWT, blogsControler.deleteBlog)
router.patch('/blog/:id', authenticateJWT, validate(blogValidation.blogUpdateValidation, {}, {}), blogsControler.updateBlog)

module.exports = router;
