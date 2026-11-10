//const cannot be reassigned, use let in such case
let status_val = "CREATED";
status_val = "IN_TRANSIT";
console.log(status_val);
let name = "Aamer";
let experience = 10;

console.log("Hello " + name);
console.log("Experience: " + experience + " years");

let a = 10;
let b = 20;

console.log("Sum:", a + b);
const shipment = {status: "CREATED"};
shipment.status="DELIVERED";
//The object property can change, but the shipment variable cannot be reassigned to another object.
console.log("Shipment status "+shipment.status)

let c; //type is undefined as no value is assigned
console.log(typeof c);

const shipment_1 = {trackingid:"ABC001",status:"DELIVERED"}; //TYPE object
const events = ["PICKUP","DESTHUB","DELIVERED"]; // type object
//both types object , for second variable if want to check list or not - use Array.isArray
console.log(Array.isArray(events)); //prints true
console.log("--------------------------")
const apiResponse = {
    trackingNumber: "AJA10001",
    shipmentType: "OUTBOUND",
    weight: 4.5,
    isDelivered: false,
    deliveryDate: null,
    events: [
        "CREATED",
        "PICKED_UP",
        "IN_TRANSIT"
    ]
};

console.log(typeof apiResponse.trackingNumber);
console.log(typeof apiResponse.weight);
console.log(typeof apiResponse.isDelivered);

console.log(Array.isArray(apiResponse.events));

console.log(apiResponse.deliveryDate === null); /// use === for equality check
