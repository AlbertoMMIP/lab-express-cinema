const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  const data = {
    title:'Home | Cinema IronHack',
    style: 'index.css'
  };
  res.render('index',{data});
});
router.get('/movies', (req, res) => {
    const data = {
        title:'Movies | Cinema IronHack',
        style: 'movies.css'
    };
    Movie.find()
        .then( movies =>{
            res.render('movies',{data,movies})
        } )

});
router.get('/movie/:id', (req, res) => {
    const data = {
        title:'Movies Detail | Cinema IronHack'
    };
    Movie.findById(req.params.id)
        .then( movie =>{
            res.render('movieDetail',{data,movie})
        } )

});
module.exports = router;
