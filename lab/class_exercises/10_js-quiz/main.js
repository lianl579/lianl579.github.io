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

//triangle
//-------------------------

function makeTriangle(height) {

	var checkerboard = "";

	for (row = 0; row < height; row++) {
		if (row < height),
		checkerboard = checkerboard + "#"
		   row = row + 1;

console.log(checkerboard);
}
