function ConstructorExample( param1, param2, param3 ){
    this.param1 = param1; // this hace referencia al objeto ConstructorExample
    this.param2 = param2;
    this.param3 = param3;
}

const Variable = new ConstructorExample("param1","param2","param3"); // Using New we create a new object.

console.log(Variable)

ConstructorExample.prototype.FunctionOrPropertyNew = function(){
    console.log("Hello hello")
}

ConstructorExample.prototype.param4 = null; // We use PROTOTYPE to add new functions or properties.

const Variable2 = new ConstructorExample("param1","param2","param3"); // Using New we create a new object.

console.log(Variable2)

Variable2.param4 = "param4";


console.log(Variable2)

