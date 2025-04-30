// open nodal on click
var nodal_open_btn = document.getElementById('mybtn');

var nodal_div = document.getElementById('myNodal');

var nodal_close_btn = document.getElementsByClassName('close')[0];

nodal_open_btn.onclick = function() {
   nodal_div.style.display = 'block';
}

nodal_close_btn.onclick = function() {
    nodal_div.style.display = 'none';
}


window.onclick = function(event){
    if(event.target == nodal_div){
        nodal_div.style.display = 'none';
    }
}




var slider = document.getElementById('Age');
var output = document.getElementById('ageRange');
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}
function sendStudentInfo(e) {
    e.preventDefault();

var name, gender, age, nationality;
name = document.getElementById('name').value;
gender = document.getElementById('gender').value;
age = document.getElementById('Age').value;
nationality = document.getElementById('Nationality').value;


var questions ;
   questions = '<h1> Traffic Question </h1>'
         
   questions += '<pre id="student_info"><p><mark style="background-color: lightblue">Student Information: </mark>Name: <strong>' + name + '</strong>      '; 
   questions += 'Gender: <strong>' + gender + '</strong>     ';
   questions += 'Age: <strong>' + age + '</strong>        ';
   questions += 'Nationlity: <strong>' + nationality + '</strong>       </pre>'; 

   questions += generateDate();
   questions += generateQuestion();

   questions += '<button id="mybtn" class="btn" onclick="submitAnswer(event)"> መልሱን ያስገቡ </button>'

   questions += ' ';

document.getElementById('question_header').innerHTML = questions;

nodal_div.style.display = 'none';
nodal_open_btn.style.display = 'none';

}
function generateDate(){

    var thisDate = ' ';
    var today = new Date();
    var date = today.getDate();
    var day = today.getDay();
    var month = today.getMonth();
    var year = today.getFullYear();


switch(day) {
    case 0:
        thisDate = 'Sunday';
        break;
    case 1:
        thisDate = 'Monday';
        break;
    case 2:
        thisDate = 'Tuesday';
        break;
    case 3:
        thisDate = 'Wednesday';
        break;
    case 4:
        thisDate = 'Thursday';
        break;
    case 5:
        thisDate = 'Friday';
        break;
    case 6:
        thisDate = 'Saturday';
        break;
}
 var monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];  
 var thisMonth = monthsArr[month];

 thisDate += ' ' + thisMonth + ' ' + date + ', ' + year;

return thisDate;
}
function generateQuestion(){
    var trafficQuestion = '', str;



    var questionsArray = [
        'This road sign indicate:',
        'This sign indicates the ________ vehicles can safely travel in this area:',
        'This warning sign:',
        'This sign warns of a ________ head:',
        'This road signs means:',
        'This road signs means:',
        'This signal measn:',
        'This sign means:',
        'This road signs means:',
        'This sign means:',
    ];

    // var answerChoice = ' ';
    var choicesArray = [
        ' Guide Sign, Regulatroy Sign, Warning Sign, Speed Reduction sign',
        ' Reduction Speed, Minimum Speed,  Maximum Speed, Suggested Speed',
        'provides advance notice to upcoming speed limit change, shows the current speed limit that all vehicles traveling in the direction of the arrow must not exceed, indicates the suggested highest safe speed, tells drivers that the minimum safe speed is 45 MPH',
		'soft shoulder, hill, no passing zone, truck',
		'Merging traffic, Do not enter, You must come to a complete stop, Slow down! stop if necessary and yield the right-of-way',
		'Roundabout ahead, Parking spaces are reserved for people with disabled parking permits, Traffic must turn in the direction of the arrow, Lanes are reserved for carpool vehicles',
		'Move to the left, Stop, Slow down, Proceed',
		'the road may be slippery when wet, no turns are allowed on this road, narrow road ahead, series of curves ahead',
		'Do not block intersection, No right turn, Low clearance, Yield the right-of-way to oncoming vehicles',
		'The divided highway on which drivers are traveling ends ahead, A road crosses the main highway ahead, Drivers are coming to a point where another traffic lane joins the one they are on, None of the above'
    ];
    //  var answerImage = ' ';
    var imagesArray = [
		'img/1_slower-traffic-keep-right.jpeg',
		'img/2_speed-limit-sign.jpeg',
		'img/3_speed-reduction-sign.jpeg',
		'img/4_hill-sign.jpeg',
		'img/5_yield-sign.jpeg',
		'img/6_parking-disabled-sign.jpeg',
		'img/7_flag-stop.jpeg',
		'img/8_winding-road-sign.jpeg',
		'img/9_low-clearance-sign-2.jpeg',
		'img/10_merging-traffic-sign.jpeg'
	];
    for(var i = 0; i < questionsArray.length; i++){
    trafficQuestion += '<p><br><br> <hr>' + (i + 1) + '. ' + questionsArray[i] + '</p>';
    trafficQuestion += '<div class="question_left">';
    trafficQuestion += '<img src=" ' + imagesArray[i]  + ' " alt="no image" class="traffic_img">' 
    trafficQuestion += '</div>';

     
    str = choicesArray[i].split(', ');
    
   

    trafficQuestion += '<div class="question_right"> ';
    trafficQuestion += '<form>';
    for(var j = 0; j < str.length; j++){

        trafficQuestion += '<label class="choices">';
        trafficQuestion += str[j];
        trafficQuestion += '<input id="choice' + i + '_' + j + '" type="radio" name="radio" value="' + str[j] + '">';
        trafficQuestion += '<span class="chceckmark"></span>';
        trafficQuestion += '</label>';
        
    }
    trafficQuestion += '</form>';
    trafficQuestion += '</div> <br><br>';
    
 }

   return trafficQuestion;
  

}
function submitAnswer(event){
    event.preventDefault();

 var  question_0_answer, question_1_answer, question_2_answer, question_3_answer,
		question_4_answer, question_5_answer, question_6_answer, question_7_answer,
		question_8_answer, question_9_answer;

        var question_0_choices_array = [], question_1_choices_array = [], question_2_choices_array = [],
		question_3_choices_array = [], question_4_choices_array = [], question_5_choices_array = [],
		question_6_choices_array = [], question_7_choices_array = [], question_8_choices_array = [],
		question_9_choices_array = [];

    var question_0_choices_array = [];
    for(var i = 0; i < 4; i++){
        question_0_choices_array[i] = document.getElementById('choice0_' + i); // 0_0, 0_1, 0_2, 0_3
		question_1_choices_array[i] = document.getElementById('choice1_' + i); // 1_0, 1_1, 1_2, 1_3
		question_2_choices_array[i] = document.getElementById('choice2_' + i);
		question_3_choices_array[i] = document.getElementById('choice3_' + i);
		question_4_choices_array[i] = document.getElementById('choice4_' + i);
		question_5_choices_array[i] = document.getElementById('choice5_' + i);
		question_6_choices_array[i] = document.getElementById('choice6_' + i);
		question_7_choices_array[i] = document.getElementById('choice7_' + i);
		question_8_choices_array[i] = document.getElementById('choice8_' + i);
		question_9_choices_array[i] = document.getElementById('choice9_' + i);


        if(question_0_choices_array[i].checked){
			question_0_answer = question_0_choices_array[i].value;
    }
    if(question_1_choices_array[i].checked){
        question_1_answer = question_1_choices_array[i].value;
    }

    if(question_2_choices_array[i].checked){
        question_2_answer = question_2_choices_array[i].value;
    }
    if(question_3_choices_array[i].checked){
        question_3_answer = question_3_choices_array[i].value;
    }
    if(question_4_choices_array[i].checked){
        question_4_answer = question_4_choices_array[i].value;
    }
    if(question_5_choices_array[i].checked){
        question_5_answer = question_5_choices_array[i].value;
    }
    if(question_6_choices_array[i].checked){
        question_6_answer = question_6_choices_array[i].value;
    }
    if(question_7_choices_array[i].checked){
        question_7_answer = question_7_choices_array[i].value;
    }
    if(question_8_choices_array[i].checked){
        question_8_answer = question_8_choices_array[i].value;
    }
    if(question_9_choices_array[i].checked){
        question_9_answer = question_9_choices_array[i].value;
    }
}
	// gather student 10 answers
	studentAnswersArr = [question_0_answer, question_1_answer, question_2_answer, question_3_answer,
		question_4_answer, question_5_answer, question_6_answer, question_7_answer,
		question_8_answer, question_9_answer];

	// b, c, a, b, d, b, b, d, c, c
	correctAnswersArr = ['a regulatory sign', 'maximum speed',
		'provides advance notice to upcoming speed limit change', 
		'hill', 'Slow down! stop if necessary and yield the right-of-way', 
		'Parking spaces are reserved for people with disabled parking permits', 
		'Stop', 'series of curves ahead', 'Low clearance', 
		'Drivers are coming to a point where another traffic lane joins the one they are on'];


	// sent submitted choices for grading
	gradeAnswers(studentAnswersArr, correctAnswersArr);
}


// this function grades submitted answers
function gradeAnswers(responseArr, correctArr){
	var counter = 0, finalGrade, decision, message, certificate;
	
	// get student info from output
	var stu_info_arr = studentInfo(); // name, gender, age, nationality

	// get current date
	var today = generateDate();



	// compare to the correct answers and !!COUNT!! the correct ones
	for(var i = 0; i < responseArr.length; i++){
		if(responseArr[i] == correctArr[i]){
			counter++; // increases as answer is correct
		}
	}


	// final grade out of 100%
	// if answers 6 out of 10, 6/10 = 0.6; 0.6*100 = 60; score = 60%
	finalGrade = (counter/10) * 100;

	// decide the passing grade, only allowd to miss one question
	if(finalGrade >= 90){
		decision = 'Passed!';
		message = 'Congradulations! You are now ready for practical test.';
	} else {
		decision = 'Failed!';
		message = 'Exam must be retaken. You are only allowd to miss one question!';
	}

	// generate certificate
	certificate = '=================== Driving Test Exam ===================';
	certificate += '<br>Student: ' + stu_info_arr[0];
	certificate += '<br>Exam taken on: ' + today;
	certificate += '<br>Score: ' + finalGrade + '%';
	certificate += '<br>Decision: ' + decision;
	certificate += '<br>' + message;
	certificate += '<br>Correct Answers: 1. b, 2. c, 3. a, 4. b, 5. d, 6. b, 7. b, 8. d, 9. c, 10. c';
	certificate += '<br>========Instructor Name Sintayehu Getabalew============================================';


	// export certificate
	document.getElementById('question_header').innerHTML = certificate;

}

function studentInfo(){
	var stuInfoStr = document.getElementById('student_info').textContent;
	var stuInfoArr = stuInfoStr.split(' '); // 17 elements
	var studentInfo = [];
	var j = 0;

	for(var i = 0; i < stuInfoArr.length; i++){
		if(stuInfoArr[i].includes(':') || stuInfoArr[i] == ''){
			// do nothing
		} else {
			studentInfo[j] = stuInfoArr[i];
			j++; // increases as we find correct info
		}
	}


	return studentInfo;
}
 

 

 




 