// SORTING ARRAY USING MERGE-SORT ALGORITHM
// AUTHOR: RAJAN GUPTA
// CREATED: 1 DEC 2014
// UPDATED: 1 DEC 2014

// Merge-Sort function
function merge_sort(inArray) {
	if (inArray.length > 1) {
		// Split array using split function
		var splitArray = split(inArray);
		// Returns sorted array if array.len > 1
		return merge(merge_sort(splitArray[0]), merge_sort(splitArray[1]));
	}
	else {
		// Returns array if array.len == 1
		return inArray;
	}
}

// Split the input array inArray into two equal/almost-equal parts
// Returns two split arrays within master array
function split(inArray) {
	var outArray = [];
	var len = inArray.length;
	if (len % 2 == 0) {
		// Equally split the array into two parts
		return outArray = [inArray.slice(0,len/2),inArray.slice(len/2,len)];
	}
	else {
		// Unequally split with first array having one extra element than second array
		return outArray = [inArray.slice(0,len/2+1),inArray.slice(len/2+1,len+1)];
	}
}

// Merges two input arrays in ascending order
function merge(inArray1, inArray2) {
	var len1 = inArray1.length;
	var len2 = inArray2.length;
	var i = 0, j = 0, k = 0;
	var outArray = []
	// Run the loop till program reaches end of any of the array
	while (i < len1 && j < len2) {
		// Add element to outArray according to which one is higher
		// Keep incrementing the index of the array whose element has been added
		if (inArray1[i] < inArray2[j]) {
			outArray[k] = inArray1[i]
			i += 1
		}
		else {
			outArray[k] = inArray2[j]
			j += 1
		}
		k += 1
	}
	// Concatenate the remaining elements of the array index of which has not reached the end
	if (i == len1) {outArray = outArray.concat(inArray2.slice(j,len2+1));}
	if (j == len2) {outArray = outArray.concat(inArray1.slice(i,len1+1));}
	return outArray;
}