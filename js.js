// get data from csv file
	var questionBank=[];
		document.getElementById('csvFile').addEventListener('change', function() { 
			
			var csvReader=new FileReader(); 
			csvReader.onload=function(){ 
		var arrayOfQuestions=document.getElementById('output').textContent=csvReader.result.split("\n"); 
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
			} 
			
			csvReader.readAsText(this.files[0]); 
		}) 