// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Pencil'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
	// getLength passes the length of the array into the callback.
	return cb(arr.length);
}

function last(arr, cb) {
	// last passes the last item of the array into the callback.
	return cb(arr[arr.length-1]);
}

//last(items, result => console.log(result));

function sumNums(x, y, cb) {
	// sumNums adds two numbers (x, y) and passes the result to the callback.
	return cb(x + y);
}

// sumNums(5, 7, result => console.log(result));

function multiplyNums(x, y, cb) {
	// multiplyNums multiplies two numbers and passes the result to the callback.
	return cb(x * y);
}

// multiplyNums(5, 7, result => console.log(result));

function contains(item, list, cb) {
	// contains checks if an item is present inside of the given array/list.
	// Pass true to the callback if it is, otherwise pass false.


	// this does not work because it keeps returning the answer for each element
	// list.forEach(element => {
	// 	if (element === item){
	// 		return cb(true);
	// 	} else {
	// 		return cb(false);
	// 	}
	// });

	// Solution 1
	// for (let i = 0; i < list.length; i++) {
	// 	const element = list[i];
	// 	if (element === item) {
	// 		return cb(true);
	// 	} else {
	// 		return cb(false);
	// 	}
	// }

	// Solution 2
	// if (items.indexOf(item) === -1) {
	// 	return cb(false);
	// } else {
	// 	return cb(true);
	// }

	// Solution 3
	// return items.indexOf(item) === -1 ? cb(false) : cb(true);

	// Solution 4
	// return cb(list.includes(item));

	// Solution 5
	// return cb(list.some(i => i === item))

	// Solution 6
	return cb(list.some(function(currItem) {
		return currItem === item;
	}));
}

// contains('Gum', items, result => console.log(result));


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
	// removeDuplicates removes all duplicate values from the given array.
	// Pass the duplicate free array to the callback function.
	// Do not mutate the original array.

	let newArray = [];

	// Solution 1
	// for (let i = 0; i < array.length; i++) {
	// 	const element = array[i];
		
	// 	if (newArray.indexOf(element) === -1) {
	// 		newArray.push(element);
	// 	}
	// }

	// Solution 2
	newArray = array.filter(function name(currItem, index, arr) {
		return arr.indexOf(currItem) === index;
	});

	return cb(newArray);
}

removeDuplicates(items, result => console.log(result));
