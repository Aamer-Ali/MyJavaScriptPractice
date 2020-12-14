function addition(a,b){
    return a + b;
}

var result  = addition(10,2);
document.write("The result is " + result);

function arrayTesting(){
    var cars = ["BMW","Volvo","Audi"];
    
    for (let i = 0; i < cars.length; i++) {
        document.write("<h3>" +cars[i]+"</h3>");
    }
}

arrayTesting();

//create objects in javscript...

// var Car ={
//     car_brand:"Tesla",
//     car_model:"Model 3",
//     car_price:530000,

//     testAutoPiolet : function(){
//         document.write("This is function from object");
//     }
// }

// document.write(Car.car_brand);
// Car.testAutoPiolet();



//create objects in javscript... 
// Here we can use function as class....

function Car(car_brand,car_model,price)
{
    this.car_brand = car_brand;
    this.car_model = car_model;
    this.price = price;
    this.testAutoPiolet = function(){
        document.write("<H3> This is auto piolet test running </H3>")
    }
}

var bmw = new Car("BMW", "S Class", 12000000);
var audi = new Car("Audi", "Model M", 2000000);
bmw.testAutoPiolet();
audi.testAutoPiolet();