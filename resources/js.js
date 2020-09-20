var questionBank=[];
	
function createQuestions(questionBank){
$("#csvFile").attr("style","display:none;");
			for(var i=0, clas="";i<questionBank.length;i++)
			{
							
				if(i>0){ 
				clas="class='hide'";
				
				
				}
				var div="<div id='q"+i+"' "+clas+">	<table><tbody><tr><th> <h1><center>"+questionBank[i]['q']+"</center></h1></th></tr><tr><td><input type='radio' name='a"+i+"' id='a"+i+"' value='1'>"+questionBank[i]['a1']+"<br><input type='radio' name='a"+i+"'  id='a"+i+"' value='2'>"+questionBank[i]['a2']+"<br><input type='radio' name='a"+i+"'  id='a"+i+"' value='3'>"+questionBank[i]['a3']+"<br><input type='radio' name='a"+i+"' id='a"+i+"' value='4'>"+questionBank[i]['a4']+"<br></td></tr><tr id='prevNext'><td><button id='"+i+"' onclick='showHide(this.id)'>Next</button></td></tr></tbody></table></div>";
				$("#questionsContainer").append(div);
				//$("<div "+clas+">"+questionBank[i]['q']+"</div>").appendTo($("#questionsContainer"))
				}
}
var userAnswers=[];
function showHide(id){
	//console.log($("#a"+id+":checked").val(),"#a"+id)
	//console.log(Number($("#a"+id+":checked").val())==Number(questionBank[id]['ans']));
	if(Number($("#a"+id+":checked").val())==Number(questionBank[id]['ans']))userAnswers[id]={qNo:id,answer:1};
	else userAnswers[id]={qNo:id,answer:0};
$("#q"+id).attr("class","hide");
id=Number(id);
id++;
​
$("#q"+id).attr("class","");
​
​
}	
$(document).ready(function() { 
		
	$("#csvFile").change(function() { 
					var csvReader=new FileReader(); 
			csvReader.onload=function(){ 
		var arrayOfQuestions=csvReader.result.split("\n"); 
		//console.log(csvReader.result.split("\n"));
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
				createQuestions(questionBank);		
			} 
			
			csvReader.readAsText(this.files[0]); 
​
	}); 
}); 