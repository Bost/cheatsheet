// Some javascript tests


// M-x skewer-repl
// skewer.log("Hello World");

skewer.log(this.toString());        // "[object Window]"
skewer.log(toString());             // "[object Window]"
skewer.log({});                     // {}
skewer.log({}.toString);            // function toString() { [native code] }
skewer.log({}.toString());          // "[object Object]"
skewer.log({}.toString.call);       // function toString() { [native code] }
skewer.log({}.toString.call());     // "[object Undefined]"
skewer.log({}.toString().call);     // undefined
// skewer.log({}.toString().call());   // TypeError: Object [object Object] has no method 'call'
skewer.log({}.toString.call("x"));  // "[object String]"
skewer.log("x".toString());         // "x"
skewer.log((typeof "x"));           // "string"
skewer.log(Function);               // function Function() { [native code] }
skewer.log(Object);                 // function Object() { [native code] }

var x = 10;
var o = { x: 15 };

function f(msg) {
    skewer.log(msg + ": "+ this.x);
}

f("Invoking f");
f.call(o, "Invoking f via o");            // i.e. o.f("Invoking ..."); 'in context of o'
f.apply(o, ["Invoking f through apply"]); // i.e apply function f in context of o, use arguments in [...]
// skewer.log(foo.toString);
// skewer.log(foo.toString());
