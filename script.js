let username=document.getElementById("username")
let errmsgEl=document.getElementById("errmsg")
let startAssesmentEl=document.getElementById("startAssesment")
let usernameintest=document.getElementById("usernameintest")
let timeLeftEl=document.getElementById("timeLeft")
let questionContainerEl=document.getElementById("questionContainer")
let QuestionEl=document.getElementById("Question")
let options1El=document.getElementById("options1")
let options2El=document.getElementById("options2")
let options3El=document.getElementById("options3")
let options4El=document.getElementById("options4")

let op1Text=document.getElementById("op1")
let op2Text=document.getElementById("op2")
let op3Text=document.getElementById("op3")
let op4Text=document.getElementById("op4")

let submitBtn=document.getElementById("submit")
let NextBtn=document.getElementById("Next")
let scoreDisplay=document.getElementById("scoreDisplay")
let scoreImg=document.getElementById("scoreImg")
let displayScoreContainer=document.getElementById("displayScoreContainer")



username.addEventListener("blur",(event)=>{
    if (event.target.value==""){
        errmsgEl.textContent="*Required"
    }
    else{
        errmsgEl.textContent=""
    }
})

startAssesmentEl.onclick=function(){
    if (username.value==""){
        errmsgEl.textContent="*Required"

    }
    else{
        startAssesmentEl.setAttribute("onclick","display('sectionTest')")
        usernameintest.textContent="  Hi  "+username.value 
        //time left counter
        let minutes=9 
        let seconds=60
        let n=setInterval(function(){
            seconds-=1
            if (seconds==0){
                seconds=60
                minutes-=1}
            if (minutes<0){
                clearInterval(n)
            }
            timeLeftEl.textContent=`TIME LEFT ${minutes} : ${seconds}`
        },1000)
    }
}



let Questions=[
    {Q:"The HTML standard that does not require quotes around attribute values is said to be",
    op1:"HTML 1",
    op2:"HTML 3",
    op3:"HTML 5",
    op4:"HTML 7",
    correct:"op3"},
    
    {Q:"In HTML, the element defining a table heading is",
    op1:"<style>",
    op2:"<head>",
    op3:"<thead>",
    op4:"<th>",
    correct:"op4"},
    
    {Q:"A caption for a figure can be defined in HTML5 by using the tag",
    op1:"<caption>",
    op2:"<figurecap>",
    op3:"<figcaption>",
    op4:"<fcaption>",
    correct:"op3"},
    
    {Q:"A HTML element known to be <ins>, defines",
    op1:"Incapsulation",
    op2:"Insertion",
    op3:"Instance",
    op4:"Instantiation",
    correct:"op2"},
    
    {Q:"A HTML element that is used to group the footer content in a table is known to be",
    op1:"<tfoot>",
    op2:"<tfooter>",
    op3:"<tbody>",
    op4:"<tgroup>",
    correct:"op1"},
    
    {Q:"The number of attributes required for <div> element, is/are of",
    op1:"0",
    op2:"1",
    op3:"2",
    op4:"3",
    correct:"op1"},
    
    {Q:"The element <em> of HTML defines",
    op1:"Exponent mode text",
    op2:"Empirical text",
    op3:"Strong text",
    op4:"Emphasized text",
    correct:"op4"},
    
    {Q:"In a web address, the name of a document or address is defined by the",
    op1:"Filename",
    op2:"Domain name",
    op3:"Port",
    op4:"Prefix",
    correct:"op1"},
    
    {Q:"To convert variables to numbers, methods offered by JavaScipt are of",
    op1:"2 types",
    op2:"3 types",
    op3:"4 types",
    op4:"5 types",
    correct:"op2"},
    
    {Q:"A client side script is defined by the tag",
    op1:"<clientscript>",
    op2:"<tfooter>",
    op3:"<script>",
    op4:"<javascript>",
    correct:"op3"},
    
    ]

    let QIndex=0
    let corectOption=""
    let eachQ=Questions[QIndex]
    QuestionEl.textContent=eachQ.Q
    op1Text.textContent=eachQ.op1
    op2Text.textContent=eachQ.op2
    op3Text.textContent=eachQ.op3
    op4Text.textContent=eachQ.op4
    corectOption=eachQ.correct
    let score=0
    let s="correct"+(QIndex+1)
    let finalScore={
        score:0
    }
    NextBtn.onclick=function(){
        displayScoreContainer.setAttribute("class","d-none")
        let eachQ=Questions[QIndex]
        QuestionEl.textContent=eachQ.Q
        op1Text.textContent=eachQ.op1
        op2Text.textContent=eachQ.op2
        op3Text.textContent=eachQ.op3
        op4Text.textContent=eachQ.op4
        corectOption=eachQ.correct   
        submitBtn.setAttribute("onclick","checkAnswer()")    
    }
    function checkAnswer(){
        displayScoreContainer.setAttribute("class","mt-3 d-flex flex-row justify-content-center startbtn")
        const optionsAll = document.querySelectorAll('input[name="options"]');
        let selectedValue;
        for (const eachOption of optionsAll) {
            if (eachOption.checked) {
                selectedValue = eachOption.value;
                break;
            }
        }  
        
        if (QIndex==9){
            scoreDisplay.textContent=`Your Total Score ${score}`
        }
        else{
            scoreDisplay.textContent=`Your Score ${score}`  
        }
        if (selectedValue==corectOption){
            QIndex+=1
            scoreImg.src="/images/correct.jpg"
            score+=1
            finalScore.score=score
            scoreDisplay.textContent=`Your Score ${score}`
            NextBtn.setAttribute("class","btn btn-primary ml-4")
            submitBtn.setAttribute("onclick","")
        }
        else{
            scoreImg.src="/images/wrong.jpg"
            scoreDisplay.textContent=`Please Select Correct Answer`
            NextBtn.setAttribute("class","d-none btn btn-primary ml-4")
        }
        
    }


   
console.log(finalScore)
    