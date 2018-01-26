
let address = {
	street: "1 Made Up Street",
	town: "Bristol",
	postcode: "BS4 8TR",

 fullAddress() {
 	let props = [ 
 		this.street, 
 		this.town, 
 		this.postcode
 	];

 	return props.join(", ");
 	
 	// return this.number + " " + this.street + ", " + this.town + ", " + this.postcode;
 }

};

console.log(address.fullAddress());


