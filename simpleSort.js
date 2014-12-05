function simple_sort(input) {
	var temp;
	for (i = 0; i < input.length-1; i++) {
		for (j = i+1; j < input.length; j++) {
			if (input[i] > input[j]) {
				temp = input[i];
				input[i] = input[j]
				input[j] = temp
			}
		}
	}
	return input
}

var array = [1,2,5,3,7,9,6,3];
console.log(simple_sort(array));