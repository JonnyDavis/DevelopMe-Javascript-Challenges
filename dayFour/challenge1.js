
let dateNow = new Date("2017-01-01")
let startDate = new Date("1984-04-16");

let daysSince = date => {
	let mSeconds = dateNow.getTime() - date.getTime();
	return Math.floor((mSeconds / 60000) / 1440);

};

let result = daysSince(startDate);

console.log(result);