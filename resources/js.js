
	var questionBank=[];
	
function createQuestions(questionBank){
$("#csvFile").attr("style","display:none;");
			for(var i=0, clas="";i<questionBank.length;i++)
			{
							
				if(i>0)  clas="class='hide'";
				var div="<div "+clas+">	<table><tbody><tr><th> <h1><center>"+questionBank[i]['q']+"</center></h1></th></tr><tr><td><input type='radio' name='a"+i+"'>"+questionBank[i]['a1']+"<br><input type='radio' name='a"+i+"'>"+questionBank[i]['a2']+"<br><input type='radio' name='a"+i+"'>"+questionBank[i]['a3']+"<br><input type='radio' name='a"+i+"'>"+questionBank[i]['a4']+"<br></td></tr></tbody></table></div>";
				$("#questionsContainer").append(div);
				//$("<div "+clas+">"+questionBank[i]['q']+"</div>").appendTo($("#questionsContainer"))
				}
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

	}); 
}); 