const express = require('express')
const router = express.Router();
const Blog = require('../models/Blog')

router.get("",async(req,res)=>{
  try{
    const blogs = await Blog.find({});
    res.status(200).send(blogs)     
  }catch(e){
    console.log(e)
    res.status(500).send(e);
  }
})

router.post("",async(req,res)=>{
    try{
        const blog = new Blog(req.body);
        const blogSave = await blog.save()
        res.status(200).send(blog)
    }catch(e){
      console.log(e)
      res.status(500).send(e);
    }
})

router.delete("/:id",async(req,res)=>{
  try{
    const id = req.params.id;
    const blog = await Blog.findByIdAndDelete(id);
    res.status(200).send(blog);
  }catch(e){
    console.log(e)
    res.status(500).send(e);
  }
})

router.get("/:id",async(req,res)=>{
  try{
    const id = req.params.id;
    const blog = await Blog.findById(id)
    res.status(200).send(blog)
  }catch(e){
    console.log(e)
    res.status(200).send(e)
  }
})

router.patch("/:id",async(req,res)=>{
  try{
    const id = req.params.id
    const blog = await Blog.findByIdAndUpdate(id, req.body, {new:true})
    res.status(200).send(blog)
  }catch(e){
    console.log(e)
    res.status(200).send(e)
  }
})

module.exports = router
