const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Book = require('./book')
mongoose.connect('mongodb+srv://apiuser:abcd1234@cluster0.agh0w.mongodb.net/rest-api?retryWrites=true&w=majority')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const router = express.Router();

router.get('/', (req,res)=>{
	res.json({message:'hooray! welcome to my API'});
})

// Create
router.post('/books', (req,res)=>{
	var newBook  = new Book;
	newBook.name = req.body.name;
	newBook.description = req.body.description;
	newBook.price = req.body.price;
	newBook.isbn = req.body.isbn;
	newBook.authors = req.body.authors;
	newBook.coverUrl = req.body.coverUrl;
	newBook.save((err)=>{
		if (err) res.json({error:'meessage'+err})
			res.json({message:'Book succesfully created!'})
	})
	
})
// Read all
router.get('/books', (req,res)=>{
	Book.find((err,books)=>{
		if (err) res.json({error:"message "+err})
			res.json({message:'OK', data:books})
	})
})
// Read one
router.get('/books/:id', (req,res)=>{
	Book.findById(req.params.id, (err,book)=>{
		if (err) res.json({error:"message "+err})
			res.json({message:'OK', data:book})
	})
})

// Update
router.put('/books/:id', (req,res)=>{
	
})

// Delete
router.delete('/books/:id', (req,res)=>{
	
})
app.use('/api',router);

app.listen(port);
console.log('Magic happens on port '+port);