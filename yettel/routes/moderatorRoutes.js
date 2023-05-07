const express = require('express');
const router = express.Router();

const blogValidation = require('../validation/blogValidation');
const { validate } = require('express-validation')
const authenticateJWT = require('../middleware/auth');

// Controllers
const blogsControler = require('../controller/blogsControler');
const usersControler = require('../controller/usersControler');

// Routes
router.post('/login', usersControler.login);
router.post('/refreshToken', authenticateJWT, usersControler.refreshToken);

router.get('/blogs', authenticateJWT, blogsControler.getBlogs);
router.post('/create/blog', authenticateJWT, validate(blogValidation.blogCreateValidation, {}, {}), blogsControler.createBlog);
router.delete('/blog/:id', authenticateJWT, blogsControler.deleteBlog)
router.patch('/blog/:id', authenticateJWT, validate(blogValidation.blogUpdateValidation, {}, {}), blogsControler.updateBlog)

module.exports = router;


