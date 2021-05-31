let raceNumber = Math.floor(Math.random() * 1000);
let regEarly=Boolean(true);
let runnerAge=18;
if(runnerAge>18 && regEarly){
	raceNumber=raceNumber+1000;
}
if(runnerAge>18 && regEarly){
	console.log(`they will race at 9:30AM and the raceNumber is ${raceNumber}`);
}
else if(runnerAge>18 && !regEarly){

console.log(`they will race at 11:00AM and the raceNumber is ${raceNumber}`);
}
else if(runnerAge<18){
	console.log(`they will race at 12:30AM and the raceNumber is ${raceNumber}`);

}
else{
	console.log(`to see the registration desk`);
}
