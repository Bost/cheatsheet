// Some javascript tests

// M-x skewer-repl
// skewer.log("Hello World");

/*
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
*/


// theFunction.apply(valueForThis, arrayOfArgs)
// theFunction.call(valueForThis, arg1, arg2, ...)

var                x= 'topObj.x'              , y= 'topObj.y'    , z= 'topObj.z';
var objForThis = { x: 'objForThis.x'          , y: 'objForThis.y', z: 'objForThis.z'};
var arrOfArgs =  [    'Applying objForThis.fn',    this.y        ,     objForThis.z, 'arrW' ];

function fn(msg, argY, argZ, argW) {
    skewer.log(msg + '(msg, argY, argZ, argW): '+
	       'this.x === ' + this.x + ', '+
	       'argY === ' + argY + ', '+
	       'argZ === ' + argZ + ', '+
	       'argW === ' + argW);
}

      fn(            'Invoking       this.fn', this.y, this.z      , 'fnW');
 fn.call(objForThis, 'Calling  objForThis.fn', this.y, objForThis.z, 'callW');
fn.apply(objForThis,                     arrOfArgs);

// skewer.log(foo.toString);
// skewer.log(foo.toString());
