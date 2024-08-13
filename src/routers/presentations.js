
const express = require('express');
const router = express.Router(); // create new router
const Presentation = require('../models/Presentation'); // import presentation model



////////////////////////////////////// ROUTE HANDLER //////////////////////////////////////

// route handler to create a new presentation
const createPresentation = async (req, res) => {
    try {
        console.log("createPresentation");
        const presentation = new Presentation(req.body);  // create a new Presentation using the request body
        await presentation.save();      // save the presentation to the database
        res.status(201).json(presentation);
    } catch (error) {
        res.status(400).json({ error: error.message }); //send an HTTP response back to the clien, 400 status code of their is error
    }
};

// route handler to get a presentation by title
const getPresentation = async (req, res) => {
    try {
        console.log("getPresentation");
        const presentation = await Presentation.findOne({ title: req.params.title });    //// find a presentation by the title
        if (!presentation) return res.status(404).json({ error: 'Presentation not found' }); // if Presentation not found respond with 404
        res.json(presentation);
    } catch (error) {
        res.status(500).json({ error: error.message }); //send an HTTP response back to the clien, 500 status code of their is error
    }
};


// route handler to add a new slide to a presentation
const putSlide = async (req, res) => {
    try {
        console.log("putSlide");
        const presentation = await Presentation.findOne({ title: req.params.title });   // find a presentation by the title
        if (!presentation) return res.status(404).json({ error: 'Presentation not found' }); // if Presentation not found respond with 404

        presentation.slides.push(req.body.slide); // add the new slide to the presntation
        await presentation.save();                // save the updated presentation
        res.status(200).json(presentation);       // respond with the updated presentation
    } catch (error) {
        res.status(400).json({ error: error.message }); //send an HTTP response back to the clien, 500 status code of their is error
    }
};


// rout handler to modify an existing slide
const alterSlide = async (req, res) => {
    try {
        console.log("alterSlide");
        const presentation = await Presentation.findOne({ 'slides._id': req.body._id });    // find the presentation containing the slide by its ID
        if (!presentation) return res.status(404).json({ error: 'Slide not found' });

        const slide = presentation.slides.id(req.body._id); // alter the slide by ID
        Object.assign(slide, req.body);  //pdate the slide with the new data
        await presentation.save();      // save the updated presentation
        res.status(200).json(slide);    // respond with the updated presentation
    } catch (error) {
        res.status(400).json({ error: error.message }); //send an HTTP response back to the clien, 400 status code of their is error
    }
};


const updateAuthorsList = async (req, res) => {
    try {
        console.log("updateAuthorsList");
        const presentation = await Presentation.findOne({ title: req.params.title });   // find the presentation by title
        if (!presentation) return res.status(404).json({ error: 'Presentation not found' });

        presentation.authors = req.body.authors;
        await presentation.save();  //save the updated presentation
        res.status(200).json(presentation); // respond with the updated presentation
    } catch (error) {
        res.status(400).json({ error: error.message }); //send an HTTP response back to the clien, 400 status code of their is error
    }
};

const deleteSlide = async (req, res) => {
    try {
        console.log("deleteSlide");
        const presentation = await Presentation.findOne({ 'slides._id': req.params.slideId }); // find the presentation containing the slide by its ID

        if (!presentation) return res.status(404).json({ error: 'Slide not found' });   // respond with 404 if not found

        presentation.slides.id(req.params.slideId).deleteOne();
        await presentation.save();
        res.status(200).json({ message: 'Slide deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message }); //send an HTTP response back to the clien, 400 status code of their is error
    }
};

const deletePresentation = async (req, res) => {
    try {
        console.log("deletePresentation");
        const presentation = await Presentation.findOneAndDelete({ title: req.params.title }); // find and delete the presentation by title
        if (!presentation) return res.status(404).json({ error: 'Presentation not found' }); // respond with 404 if not found

        res.status(200).json({ message: 'Presentation deleted successfully' }); // respond with success message
    } catch (error) {
        res.status(500).json({ error: error.message }); //send an HTTP response back to the clien, 500 status code of their is error
    }
};


// route handler to get all presentations
const getAllPresentations = async (req, res) => {
    try {
        console.log("getAllPresentations");
        const presentations = await Presentation.find({}); //retrieve all presentations
        res.json(presentations);    //respond with the list of all presentation
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



//////////////////////////////////// define the routes and associate them with their handlers ///////////////////////////////////

router.post('/', createPresentation);

router.get('/', getAllPresentations);

router.get('/:title', getPresentation);

router.put('/slides/:title', putSlide);

router.patch('/slides/', alterSlide);

router.patch('/:title/authors', updateAuthorsList);

router.delete('/slides/:slideId', deleteSlide);

router.delete('/:title', deletePresentation);




module.exports = router;          //// export the router for use in the server
