
	var questionBank=[];
function shuffle(a){
	for(var i=0;i<a.length;i+=Math.floor(Math.random()*a.length)){
		a.unshift(a.splice(i,1)[0]);
	}
	return a;
}	
function createQuestions(questionBank){
$("#csvFile").attr("style","display:none;");
			//questionBank = questionBank.sort(() => Math.random() - 0.5)
			questionBank = shuffle(questionBank); // create our own shuffle :)
			for(var i=0, clas="";i<questionBank.length;i++)
			{
							
				if(i>0){ 
				clas="class='hide'";
				}
				
				$("#id0").attr("class","hide"); //hide first previous;
				var div="<div id='q"+i+"' "+clas+">	<table class='bigFont'><tbody><tr><th> <h1><center>"+questionBank[i]['q']+"</center></h1></th></tr><tr><td><input type='radio' name='a"+i+"' id='a"+i+"' value='1' onclick=showHideNext("+i+")>"+questionBank[i]['a1']+"<br><br><input type='radio' name='a"+i+"'  id='a"+i+"' value='2' onclick=showHideNext("+i+")>"+questionBank[i]['a2']+"<br><br><input type='radio' name='a"+i+"'  id='a"+i+"' value='3' onclick=showHideNext("+i+")>"+questionBank[i]['a3']+"<br><br><input type='radio' name='a"+i+"' id='a"+i+"' value='4' onclick=showHideNext("+i+")>"+questionBank[i]['a4']+"<br><br></td></tr><tr id='prevNext'><td><button class='hide' id='id"+i+"' onclick='showHide(this.id)'>Previous</button><button class='hide' id='"+i+"' onclick='showHide(this.id,1)'>Next</button></td></tr></tbody></table></div>";
				$("#questionsContainer").append(div);
				//$("<div "+clas+">"+questionBank[i]['q']+"</div>").appendTo($("#questionsContainer"))
				}

}
var usermarks=[];
function showHide(id,a){

	console.log(id)
	if(a!=1)id=id[2];
	//console.log(id);
	//console.log($("#a"+id+":checked").val(),"#a"+id)
	//console.log(Number($("#a"+id+":checked").val())==Number(questionBank[id]['ans']));
	if(Number($("#a"+id+":checked").val())==Number(questionBank[id]['ans']))var score=1;
	else score=0;
	usermarks[id]={qNo:id,mark:score,userAnswer:$("#a"+id+":checked").val(),trueAnswer:Number(questionBank[id]['ans'])};
$("#q"+id).attr("class","hide");
id=Number(id);
if(a===1){

id++;

 if(Number(id)===questionBank.length){
	
					var sum=0;t="<table class='bigFont' border='1'><tr><th>Question</th><th>Answer Check</th><th>Mark</th></tr>";
				for(j=0;j<usermarks.length;j++){
					sum+=usermarks[j]['mark'];
					if(questionBank[j]['a'+usermarks[j]['userAnswer']]===questionBank[j]['a'+usermarks[j]['trueAnswer']])var assess="Your Answer <b>"+questionBank[j]['a'+usermarks[j]['userAnswer']]+"</b> is True";
					else var assess="Your Answer <b>"+questionBank[j]['a'+usermarks[j]['userAnswer']]+"</b> is False and the True one is: <br><b>"+questionBank[j]['a'+usermarks[j]['trueAnswer']]+"</b>";
					t+="<tr><td>"+questionBank[j]['q']+"</td><td>"+assess+"</td><td>"+usermarks[j]['mark']+"</td></tr>";
				}
				t+="</table>";
				if(sum>(j/2)) var result="You pass with "+sum+" mark out of "+j;
				else  var result="You fail with "+sum+" mark out of "+j;
				var end="<div class='bigFont' >"+t+""+result+"</div>"
				$("#questionsContainer").append(end);
}
}
else id--;
$("#q"+id).attr("class","");
}	
function showHideNext(id){
	$("#"+id).attr("class","");
	if(Number(id)>0)
	$("#id"+id).attr("class","");
	//check submit
if(Number(id)===questionBank.length-1){
	$("#"+id).text("submit");
	$("#"+id).attr("disabled","disabled");
	
 	var assure= confirm("Have you finsh and you want to submit!");
	console.log(id);
	if(assure)$("#"+id).prop('disabled', false);
}
}
$(document).ready(function() { 
/// this link on how you get file content https://www.geeksforgeeks.org/how-to-read-a-local-text-file-using-javascript/ && https://javascript.info/file we apply it in our project
	$("#csvFile").change(function() { 
					var csvReader=new FileReader(); 
					csvReader.readAsText(this.files[0]); 
			csvReader.onload=function(){ 
		var arrayOfQuestions=csvReader.result.split("\n"); 
		//console.log(csvReader.result.split("\n"));
		//for-loop to iterate over data after we split it using new line then we split each line to object inside for-loop 
			for( var i=1;i< arrayOfQuestions.length;i++){
				/***** you have to use if line has data (arr.length**/
				if(arrayOfQuestions[i].split(";").length===6){
				arrayOfQuestions[i]=arrayOfQuestions[i].split(";");
				var obj={
				q:arrayOfQuestions[i][0],
				a1:arrayOfQuestions[i][1],
				a2:arrayOfQuestions[i][2],
				a3:arrayOfQuestions[i][3],
				a4:arrayOfQuestions[i][4],
				ans:arrayOfQuestions[i][5]
				}
				//console.log(obj);
				//push question to questionBank arrayOfQuestion
				questionBank.push(obj);
				}
						 
			}
			// function to Create Questions DIVs
				createQuestions(questionBank);		
			} 
			
			

	}); 
}); 