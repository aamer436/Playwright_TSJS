//arithmetic operators
const weight=8;
const additionalWeight=3;
console.log(weight + additionalWeight); //11
console.log(weight - additionalWeight); //5
console.log(weight*additionalWeight); //24
console.log(weight/additionalWeight); //division 2.666
console.log(weight%additionalWeight); //remainder 2
console.log(weight ** 2); //power 64
//comparision operators
console.log(weight > 2); // >,<,>=,<=,===,!==
// == compares value after possible type conversion
// === compares value and type
//!= and !== are corresponding inequality operators
console.log("------------------");
const var1="1";
console.log(var1==1); //true since type conversion happens from string to int and compared
console.log(var1===1); //false since value matches but type does not.
console.log(0==false); //returns true
console.log(0===false); //returns false

console.log("----------------------");
//type conversion functions
const weight1="5.75";
const w=Number(weight1);
console.log(w) //5.75
console.log(typeof w);//Number
console.log(Number("")); //0
console.log(Number("ABC"))//NaN
console.log(Number("12.5"));//12.5
console.log(parseInt("12.5"));//12
console.log(parseFloat("12.5"))//12.5
console.log("-------------");
console.log(Boolean("Hello"));
console.log(Boolean(""));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(123)); // any means true like - string, number>0
console.log(Boolean(null));//nothing means false
console.log(Boolean(undefined))
console.log(Boolean([])) //empty array or list - false
console.log(Boolean({})) //empty object - false

console.log("------------------------------------")
const status1 = "DELIVERED";

if (status1 === "DELIVERED" && status1 === "RTO") {
    console.log("Shipment journey completed");
}

const status2 = "DELIVERED";

if (status2 === "DELIVERED" || status2 === "RTO") {
    console.log("Shipment journey completed");
}else{
    console.log("shipment not delivered or rto")
}

const isDelivered = false;

if (!isDelivered) {
    console.log("Shipment is still pending delivery");
}

const isDelivered1=true;
const result=isDelivered?"Delivered":"Pending";
console.log("Delivery status "+result);

//Nullish coalescing
console.log("----- Nullish coalescing---------------")
const retryCount=0;
console.log(retryCount||3) // here 3 is the default value.. 
//if left value is false, then the outcome is default value which is 3

console.log(retryCount??3) //0
// ?? uses default value when left value is null or undefined.
//here it is 0, hence outcome will be 0 only.

let retryCount1;
console.log(retryCount1??3) //3 based on above explanation 

console.log("Practice example")
const shipment = {
    trackingNumber: "AJA300001",
    statusCode: "200",
    weight: "6.5",
    isAddressValid: true,
    deliveryDate: null
};
const statusCode = Number(shipment.statusCode);
const weight3 = Number(shipment.weight);

if (
    statusCode === 200 &&
    weight3 > 0 &&
    shipment.isAddressValid === true
) {
    console.log("Shipment validation passed"); //output
} else {
    console.log("Shipment validation failed");
}

const deliveryStatus = shipment.deliveryDate ?? "Pending";

console.log(deliveryStatus);// output = pending as left value is null

console.log("-------Exercise 1-----------")
const shipment3 = {
    weight: "7.5",
    status: "IN_TRANSIT",
    addressValid: true,
    paymentStatus: "PAID"
};
if(Number(shipment3.weight)>0 && shipment3.status==="IN_TRANSIT" && shipment3.addressValid && shipment3.paymentStatus === "PAID"){
    console.log("match") // output
}else{
    console.log("no match")
}