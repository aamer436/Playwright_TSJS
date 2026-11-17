//String - 3 ways to initialize string
const first = "TEST";
const second = 'TEST';
const third = `TEST`; //called template literal, useful to insert variables in a string using ${}

const trackingId = "AJA3000";
const statusVal = 'DELIVERED';
const message = `shipment ${trackingId} status is ${statusVal}`
console.log(message) //shipment AJA3000 status is DELIVERED
//traditional way using +
const message1 = "Shipment "+trackingId+" status is "+statusVal
const orderId = "ORD1001";
const apiUrl = `https://api.example.com/orders/${orderId}`;

//string methods
const fourth = " delivereD ";
console.log(fourth.trim()) //trim spaces
console.log(fourth.toUpperCase());//to upper
console.log(fourth.toLowerCase());//to lower
console.log(fourth.trim().toLowerCase());

//these return true or false
console.log(fourth.includes("deliver")); 
console.log(fourth.trim().startsWith("deli"));
console.log(fourth.trim().endsWith("reD"));

//extract substring
console.log(fourth.trim().slice(0,3)); //del
console.log(fourth.trim().slice(3)); //ivereD
console.log(fourth.trim().slice(-3)); //reD

//split function - returns array
const shipmentStatuses = "CREATED,PICKED_UP,IN_TRANSIT,DELIVERED";
const statuses = shipmentStatuses.split(",");
console.log("statuses and its length "+statuses+" "+statuses.length);
console.log(statuses[0])

//replace, replaceAll
const shipmentStatus = "OUTBOUND-SHIPMENT";
console.log(shipmentStatus.replace("-","_"));
const t = "PASSED PASSED PASSED";
console.log(t.replace("PASSED","FAILED")); //FAILED PASSED PASSED
console.log(t.replaceAll("PASSED","FAILED")); //FAILED FAILED FAILED

//indexOf, charAt, length
const t1 = "shipment-delivered";
console.log(t1.indexOf("delivered")); //returns 9
console.log(t1.indexOf("test"))//returns -1 as index not found
console.log("t1 length "+t1.length); //18
console.log(t1.charAt(1));//i

//string immutability
let s="CREATED";
s[0]="A";
console.log(s);//prints CREATED
//however we can assign completely new string to a variable declared with let
let s1="CREATED";
s1=s1.replace("CREATED","DELIVERED");
console.log("S1 value "+s1) //prints DELIVERED


console.log("---------Excercise 1------------")
const trackingIds = [
    " aja300001 ",
    "AJA300002",
    " aja300003"
];
trackingId[0].trim().toUpperCase().startsWith("AJA");
const normalizedIds = trackingIds.map(
    id => id.trim().toUpperCase()
)
console.log(normalizedIds)

const allValid = trackingIds.every(
    id => id.startsWith("AJA")
)
console.log(allValid);

console.log("---------Exercise 2----------------")
const statusHistory =
    "CREATED,PICKED_UP,IN_TRANSIT,OUT_FOR_DELIVERY,DELIVERED";
const statusList = statusHistory.split(",");
console.log("first "+statusList[0]+" last "+statusList[statusList.length-1])
console.log(statusList.includes("DELIVERED"))
