const blogsModel = require('../models/blogsModel')
const mongoUtils = require('../_helpers/mongoUtils')

module.exports = {
    getBlogs,
    likeBlog,
    createBlog,
    deleteBlog,
    updateBlog,
};

async function getBlogs(search, options) {
    let query;
    if (search) {
        query = { $or: [{ author: { $regex: search } }, { title: { $regex: search } }] }
    }
    else {
        query = {};
    }
    return mongoUtils(blogsModel, query, options.page, options.perPage);
}

async function likeBlog(id) {
    return blogsModel.findOneAndUpdate({ _id: id }, { $inc: { 'likes': 1 } })
}

async function createBlog(data) {
    const newBlog =
    {
        ...data
    }

    return new blogsModel(newBlog).save()
}

async function deleteBlog(id) {
    return blogsModel.deleteOne({ _id: id })
}

async function updateBlog(id, data) {
    return blogsModel.findByIdAndUpdate({ _id: id }, data, {new: true})
}

