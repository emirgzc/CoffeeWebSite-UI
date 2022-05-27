const express = require('express')
const router = express.Router()
const About = require('../models/About')
const Menu = require('../models/Menu')
const Urunler = require('../models/Urun')
const Yorumlar = require('../models/Yorum')
const Blog = require('../models/Blog')


router.get('/', (req,res) => {
    About.find({}).then(sliders => {
        res.render('site2/', {sliders: sliders})
    })
})

router.get('/about', (req,res) => {
    About.find({}).then(about => {
        res.render('site2/about', {about: about})
    })
})

router.get('/menu', (req, res) => {
    Menu.find({}).then(menu => {
        res.render('site2/menu', {menu: menu})
    })
})

router.get('/urunlerimiz', (req, res) => {
    Urunler.find({}).then(urun => {
        res.render('site2/urunlerimiz', {urun: urun})
    })
})

router.get('/yorumlar', (req, res) => {
    Yorumlar.find({}).then(yorum => {
        res.render('site2/yorumlar', {yorum: yorum})
    })
})

router.get('/blog', (req, res) => {
    Blog.find({}).then(blog => {
        res.render('site2/blog', {blog: blog})
    })
})






module.exports = router