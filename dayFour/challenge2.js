let ArrNumbers = [4, 16, 2500]; 
let sqRtArr = [];

let roots = arr => {
	for (let i = 0; i < arr.length; i += 1) {
		sqRt = Math.sqrt(arr[i]);
		sqRtArr.push(sqRt);
		
	}

	return sqRtArr;
	
};

let result = roots(ArrNumbers);

console.log(result);