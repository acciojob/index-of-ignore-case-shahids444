function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let str = s1.toLowerCase();
	let str2 = s2.toLowerCase();
	let ind = str.indexOf(str2)
	return ind;
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
