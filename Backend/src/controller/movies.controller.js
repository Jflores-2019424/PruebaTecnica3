'use strict'

const Movie = require("../models/movies.model")

const createMovie = async(req, res) =>{
    const { title } =  req.body
    try{
        let movie = await Movie.findOne({title})
        if(movie) return res.status(500).json({message: "Title already in use", ok: false, movie: movie})
        movie = new Movie(req.body)

        movie = await movie.save()

        return res.status(200).json({message: `Movie ${title} addded correctly`})
    }catch(err){
        console.log(err);
        return res.status(500).json({message: "error"})
    }
}

const listMovie = async(req, res) =>{
    try{
        const movie = await Movie.find();
        if(!movie){
            return res.status(400).json({message: "No movies found"})
        }else{
            return res.status(200).json({message: "Movies available", movie})
        }
    }catch(err){
        console.log(err)
    }
}

const addFunction = async(req, res) =>{
    try{
        const id = req.params.id;
        const { date } = req.body

        const show = await Movie.findByIdAndUpdate(
            id,
            {
                $push: {
                    functions: {
                        date: date
                    },
                },
            },
            {new: true}
        )
        if(!show){
            return res.status(404).json({message: "Movie not found"})
        }

        return res.status(200).json({show})
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    createMovie,
    listMovie,
    addFunction
}