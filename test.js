const mongoose = require('mongoose')

const Blog = require('./models/blog')

mongoose.connect('mongodb://localhost/coffee_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

Blog.create({
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1337',
    date:'12 Aralık 2022, Cuma',
    title: 'Coffee Four',
    content:'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam Minus Vel? Nemo.'
}, (err, data) => {
    console.log(err,data)

})