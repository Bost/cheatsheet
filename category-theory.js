// M-x console-repl
// console.log("Hello World");

var console = skewer;

// object: A contract that alows only string
var str = function (s) {
    var typeName = 'string';
    if (typeof s !== typeName) {
	throw new TypeError("typeof s: "+(typeof s)+ " must be "+typeName);
    } else {
	return s;
    }
};

// object: A contract that allows anything
var any = function (x) { return x; };

// morphism - i.e. a changes applied to s-value
var repeat = function (s) {
    s = str(s);
    return str(s+s);
};

var typeOf = function (typeName) {
    typeName = str(typeName); // typeName itself must be a string
    return function(p) {
	if (typeof p !== typeName) {
	    throw new TypeError("typeof p: "+(typeof p)+ " must be "+typeName);
	} else {
	    return p;
	}
    };
};

// contracts
var bool  = typeOf("boolean");
var num   = typeOf("number");
var obj   = typeOf("object");
var undef = typeOf("undefined");

var inc = function(x) {
    x = num(x);         // input itself must be a number
    return num(x + 1);  // return value must be a number
};

// sdfa sdf \dd  afdasfda sf

var arr = function(a) {
    var typeName = "[object Array]";
    // {} - object literal
    // {}.toString - toString method of object.literal; toString method is inherited from Object.prototype
    // {}.toString.call(a) - invoke the call property of the toString method;
    //                       defined in function.prototype;
    //                       the call-property exists for every function; use the a-value as the this-binden
    //                       when toString-function uses this-object, then this-object refers to a-object 
    if ({}.toString.call(a) !== typeName) {
	throw new TypeError("typeof a: "+(typeof a)+ " must be "+typeName+ " (i.e. array)");
    } else {
	return a;
    }
};

//console.log(arr([1, 2, 3]));
// console.log(arr("[1, 2, 3]")); // TypeError: typeof a: string must be [object Array] (i.e. array)

// functor does mapping between categories:
// - can act on both the objects and the morphisms of the given category
// - produces new objects and new morphisms; i.e. given a c-contract it returns an array of contracts 
//   every elem of a-array is checked againt c-contract
var arrOf = function (c) {
    return function (a) {
	a = arr(a);       // check if a is an array
	return a.map(c);  // map c-contract over every item of the a-array
    };
};

var Maybe = function () {};  // constructor for data type to inherit from
var None = function () {};   // constructor for data type to inherit from
None.prototype = Object.create(Maybe.prototype); // any instance of None is also an instance of Maybe
None.prototype.toString = function () { return "None"; };
var none = new None();  // instance of None-data type; why not: function () { return new None(); }; ???

var Some = function (x) { // Some is just a wrapper around the provided value x
    this.x = x;
};
Some.prototype = Object.create(Maybe.prototype); // some is also an instance of Maybe
Some.prototype.toString = function () { return "Some("+this.x+")"; };
var some = function (x) { return new Some(x); }; // we don't have to type 'new' all the time


// can be used for try-catch stuff
var maybe = function (c) {
    return function (m) {
	if (m instanceof None) {
	    return m;
	} else if (m instanceof Some) {
	    return some(c(m.x)); // check if m.x is according to the c-contract and return a new Some-object
	} else {
	    throw new TypeError("Expected None or Some(value): "+ m); // TODO print the instace of m
	}
    };
};

// var instanceOf_None_or_Some = maybe(repeat);
// console.log(instanceOf_None_or_Some);
//console.log('' + maybe(repeat)(none));  // map repeat-function over zero element array 
//console.log('' + maybe(repeat)(some("joe")));

Maybe.prototype.getOrElse = function (x) {
    if (this instanceof Some) {
	return this.x;
    } else {
	return x;
    }
};

// console.log(maybe(repeat)(some("joe")).getOrElse("jane"));
// console.log(maybe(repeat)(none).getOrElse("jane"));


// functor does mapping between categories
var twice = function (functor) {
    return function (c) {
	return functor(functor(c));
    };
};

// functor does mapping between categories
var once = function (functor) {
    // this is the same as the line below
    // return function (c) {
    // 	return functor(c);
    // };
    return functor;
};

// functor does mapping between categories
var noTimes = function (functor) {
    return function (c) {
	return c;
    };
};

// x wrapped in [] is called unit
var arrOfUnit = function (c) {
    return function (x) {
	x = noTimes(arrOf)(c)(x);             // apply an array of no times to c ???
	return once(arrOf)(c)([x]); // apply once to c ???
    };
};


// Array.unit = function (c) {
//     if (c === void 0) {  // synonym for undefined (for earlier javascript versions)
// 	c = any;
//     }
// };

Array.unit = function (x) {
    return [x];
};

var maybeUnit = function (c) {
    return function (x) {
	x = noTimes(maybe)(c)(x);
	return once(maybe)(c)(some(x));
    };
};

// Maybe.unit is a function of x returning a new function returning doing this.x = x
// i.e. it should return something like [x]
Maybe.unit = some;

var arrOfFlatten = function (c) {
    return function (aax) {
	aax = twice(arrOf)(c)(aax); // aax is an array of arrays: [[1,2,3],[4,5]]
	var result = [], len = aax.length;
	for (var i = 0; i < len; ++i) {
	    result = result.concat(aax[i]);
	}
	return once(arrOf)(c)(result);
    };
};

Array.prototype.flatten = function (c) {
    if (c === void 0) {
	c = any; 
    }
    return arrOfFlatten(c)(this);
};

// unwrapp one level. I.e. maybe-maybe-x  -->  maybe-x
var maybeFlatten = function (c) {
    return function (mmx) {
	// 3 cases are possible: 1. None 2. Some-None 3. Some-Some-int32
	mmx = twice(maybe)(c)(mmx);
	var result = mmx;
	if (result instanceof Some) {
	    result = result.x;    // unwrapping one level
	} /* else if (result instanceof None) {   // this is not neccessary
	    result = result;      // return None
	} */
	return once(maybe)(c)(result);
    };
};


Maybe.prototype.flatten = function (c) {
    if (c === void 0) {
    	c = any;
    }
    return maybeFlatten(c)(this);
};

// console.log([[1,2,3],[4,5]]);
// console.log([[1,2,3],[4,5]].flatten());
// console.log(some(some(4)).flatten());
// console.log(some(none).flatten());
// console.log(none.flatten());
// console.log(some(some(4)));

Maybe.prototype.map = function (c) {
    return maybe(c)(this);  // this is the current Maybe-object
};

// It's sufficient to have mapFlatten and unit to get a Monad
var Monad = function () {};
Monad.prototype.flatMap = function (c) {
    return this.map(c).flatten();
};
// make array into a monad; change the inheritance chain so that Array.prototype
// and Maybe.prototype inherit from Monad.prototype
Array.prototype.__proto__ = Monad.prototype;
Maybe.prototype.__proto__ = Monad.prototype;

// var xs = [1,2,3], ys = [4,5,6], zs = [5];
// var xs = some(4), ys = some(5), zs = some(5);
var xs = some(4), ys = none, zs = some(5);

console.log(
    // each possible choice of x from xs
    xs.flatMap(function (x) {
	// each possible choice of y from ys
	return ys.flatMap(function (y) {
	    // each possible choice of z from zs
	    return zs.map(function (z) {
		return (x * y) + z;
	    });
	});
    })
);
