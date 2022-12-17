const question = [{
    'que':'which of  the following is a markup language',
    'a' : 'html',
    'b' : 'css',
    'c' : 'java',
    'd' : 'php',
    'correct' : 'a'
},
{
    'que':" what year was js launched?",
    'a':"1996",
    'b':"1995",
    'c':"1994",
    'd':"1993",
   'correct' :"b",
},
]
let index =0;
const queBox = document.getElementById("queBox")
const loadQuestion =() => {
    const data = question[index]
    queBox.innerText = data.que;
    console.log(data)

}
loadQuestion();

