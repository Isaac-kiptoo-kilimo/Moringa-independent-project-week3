
function createQuestion(id, quiz_, answers){
	return {
		id: id,
		question: quiz_,
		answers: answers
	}
}

function answers(answers_){
	const ans_array = []
	const ans_ = answers_.split('|')
	for(let i = 0; i < ans_.length; i++){
		// console.log(i, ans_[i])
		if(ans_[i].trim()){
			// console.log(i, ans_[i].split('=')[0], ans_[i].split('=')[1])
			ans_array.push({
				id: i,
				answer: ans_[i].split('=')[1] && ans_[i].split('=')[0].trim().replace(/:/g, "="),
				correct: ans_[i].split('=')[1] && ans_[i].split('=')[1].trim() === 'true' ? true : false
			})
		}
		else{
			// console.log(undefined)
		}
	}

	return ans_array
}

const questions = [
	createQuestion(1, 'What does does HTML stand for?', answers("Hyper Text Markup Language=true | Hyper Text Mark-up=false| Hyper Text Language Markup=false | H Text Markup Language=false | ")),
	createQuestion(2, 'What is an alternate way to define the following CSS rule?font-weight: bold;', answers("font-weight: 800=true | font-weight: 200=false | font-weight: 400=false | font-weight: 700 =false| ")),
	createQuestion(3, 'Which CSS property is used to specify text color?', answers("font=false | font-color=false | color=true | Text-color=false | ")),
	createQuestion(4, 'What are the four attributes we want to include on every img element?', answers("src, alt, height, width=true | srcset, alt, ratio, file, size=false | src, alternative,intriniscsize, orientation=false | source, height, width, orientation=false | ")),
	createQuestion(5, 'When we want to convey importance, seriousness, or urgency, which element do we use?', answers("<strong>=true | <i>=false | <br>=false | <important>=false | ")),
	createQuestion(6, 'What does CSS stand for?', answers("Cascading Style Sheets=true | Colorful Style Sheets=false | Creative Style Sheets=false | Computer Style Sheets=false | ")),
	createQuestion(7, 'What is the correct HTML for referring to an external style sheet?', answers("<stylesheet>mystyle.css</stylesheet>=false | <style src:'mystyle.css'>=false | <link rel:'stylesheet' type:'text/css' href:'mystyle.css'>=true | <link rel:stylesheet'>=false | ")),
	createQuestion(8, 'Where in an HTML document is the correct place to refer to an external style sheet?', answers("n the <body> section=false | At the end of the document=false | In the <head> section=true | In the <header>section= false| ")),
	createQuestion(9, 'Which HTML tag is used to define an internal style sheet?', answers("<script>=false | <style>=true | <css>=false | <Html>=false")),
	createQuestion(10, 'Which is the correct CSS syntax?', answers("{body;color:black;=false | body {color: black;=true | body:color=black;}=false | body:color=black | ")),
	createQuestion(11, 'How do you insert a comment in a CSS file?', answers("// this is a comment=false | // this is a comment //=false | * this is a comment */=true | this is a coment=false  ")),
	createQuestion(12, 'Which property is used to change the background color?', answers("background-color=true | color=false | bg-color=false | background-image=false | ")),
	createQuestion(13, 'How do you add a background color for all <h1> elements?', answers('h1.all(background-color:#FFFFFF)=false | h1 {background-color:#FFFFFF;=true | all.h1 {background-color:#FFFFFF;}=false | ...h1 {background-color:#FFFFFF;}=false |' )),
	createQuestion( 14, 'Which CSS property is used to change the text color of an element?', answers("fgcolor=false | color=true | text-color=false | image-color =false| ")),
	createQuestion(15, 'Which CSS property controls the text size?', answers("text-size=false | font-size=true | text-style=false | font-style=false | ")),
	createQuestion(16, 'Inside which HTML element do we put the JavaScript?', answers("<scripting>=false | <javascript>=false | <script>=true | <js>=false")),
	createQuestion(17, 'Where is the correct place to insert a JavaScript?', answers("Both the <head> section and the <body> section are correct=true | The <head> section=false | The <body> section=false | The <header> section=false | ")),
	createQuestion(18, 'What is the correct syntax for referring to an external script called "xxx.js"?', answers('<script name:"xxx.js">=false | <script src:"xxx.js">=true | <script href:"xxx.js">=false | <script img:"xxx.js">=false | ')),
	createQuestion(19, 'The external JavaScript file must contain the <script> tag.', answers("false=false | none=false | true=true | not sure= false | ")),
	createQuestion(20, 'How do you write "Hello World" in an alert box?', answers("alert('Hello World')=true | <i>msgBox('Hello World')=false | alertBox('Hello World')=false | msg('Hello World');=false")),
]


