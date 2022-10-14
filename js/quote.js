const text = [
{
  quote: 
  "The way to get started is to quit talking and begin doing.",
  author: "Walt Disney" ,
},
{
  quote:
  "Tough times never last, but tough people do.",
  author: "Robert H. Schuller" ,
},
{
  quote: 
  "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
  author: "Angelina Jolie",
},
{
  quote: 
  "Grind Hard, Shine Hard.",
  author: "Dwayne Johnson",
},
{
  quote: 
  "It hurt because it mattered.",
  author: "John Green" ,
},
{
  quote: 
  "Knowlegde is power and money." ,
  author: "Bill gates",
},
{
  quote:
  "The secret of getting ahead is getting started." ,
  author: "Mark Twain",
},
{
  quote:
  "Habit is second nature.",
  author: "Michel de Montaigne" ,
},
{
  quote:
  "Study without desire spoils the memory, and it retains nothing that it takes in.",
  author:"Leonardo da Vinci" ,
},
{
  quote: 
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  author:"Nelson Mandela" ,
}
];

const quote = document.querySelector("#quote")
const author = document.querySelector("#author")

const randomQuote = text[Math.floor(Math.random()*10)]

quote.innerText = `${randomQuote.quote}`
author.innerText = `${randomQuote.author}`

