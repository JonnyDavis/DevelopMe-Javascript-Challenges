
class address {
	constructor (number, street, town, postcode) {
		this.number = number;
		this.street = street;
		this.town = town;
		this.postcode = postcode;
	}


	fullAddress() {
 	let props = [
 		this.number, 
 		this.street, 
 		this.town, 
 		this.postcode
 	];

 	return props.join(", ");


	// fullAddress() {
	// 	return this.number + " " + this.street + ", " + this.town + ", " + this.postcode;
	// }
}

let Add1 = new address(1, "Made Up Street", "Bristol", "BS4 8TR");

console.log(Add1.fullAddress());

// use set i.e. postcode in a real application, otherwise people could get the order in which they have to parse things wrong.