// 	// console.log('hello world');

// 	var myStudentDebt = 800;
// 	myStudentDebt = myStudentDebt -100;

// 	var myLuckyNumbers = [2,3,4,6];
// 	console.log(myLuckyNumbers);
// 	console.log(myLuckyNumbers[0]);

// 	myLuckyNumbers[2] = 36;
// 	console.log(myLuckyNumbers[2]);

// 	function addFive(x) {
// 		return x + 5;
// 	}

// 	function add(x, y){
// 		console.log(x + y);
// 	}

	

// 	if (myAge < 21) {
// 		console.log("u cant party");
// 	} else {
// 		console.log("parth on garth");
// 	}
	
// 	var myAge = 27;

// 	var hamburgers = 0;

// 	for (var i = 0; i < 10; i = i + 1){

// 		hamburgers = hamburgers + 1;
// 		console.log(hamburgers);
// 	}

// 	console.log("How many licks does it take to get to the center of a toosie pop??")

// function askMrOwl(numOfLicks)
// 	for (var licks = 1; licks <= numOfLicks; licks++) {
// 		if (licks < numOfLicks) {
// 			console.log("ahhh " +  licks);
// 		} else {
// 			console.log("CRUNCH!!")
// 		}
// 	}
// }
// askMrOwl(18);


function makeCheckerboard(width,height) {

	var checkerboard = "";

	for (row = 0; row < height; row++) {
		if (row % 2){
			for (column = 0; column < width; column++) {
				if (column % 2){
			checkerboard = checkerboard + "#"
		} else {
			checkerboard = checkerboard + " "
		}
	}
} else{	
	for (column=0; column < width; column++) {
		if (column % 2){
			checkerboard = checkerboard + " "
		} else {
			checkerboard = checkerboard + "#"
		}
	}
}
checkerboard = checkerboard + "\n"

}

console.log(checkerboard);
}

		
