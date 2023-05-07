const blogsService = require('../service/blogsService')

exports.getBlogs = async (req, res, next) => {
    try {
        let options;
        if (req.query && req.query.page && req.query.perPage) {
            options =
            {
                page: req.query.page,
                perPage: req.query.perPage
            }
        }
        else {
            options =
            {
                page: 1,
                perPage: 10
            }
        }

        const blogs = await blogsService.getBlogs(req.query.search, options);
        res.status(200).json(blogs);
    } catch (e) {
        return next(e)
    }
}

exports.createBlog = async (req, res, next) => {
    try {
        const data =
        {
            title: req.body.title,
            author: req.body.author,
            body: req.body.body,
            category: req.body.category
        }

        const blog = await blogsService.createBlog(data);
        res.status(200).json(blog);
    } catch (e) {
        return next(e)
    }
}

exports.deleteBlog = async (req, res, next) => {
    try {
        const deletedBlog = await blogsService.deleteBlog(req.params.id);
        res.status(200).json(deletedBlog);

    } catch (e) {
        return next(e)
    }
}

exports.updateBlog = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data =
        {
            ...req.body,
            updateDate: new Date()
        }

        const blog = await blogsService.updateBlog(id, data);
        res.status(200).json(blog);
    } catch (e) {
        return next(e)
    }
}

exports.likeBlog = async (req, res, next) => {
    try {
        await blogsService.likeBlog(req.params.id);
        res.status(200).json({ success: true });
    } catch (e) {
        return next(e)
    }
}