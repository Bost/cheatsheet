// M-x console-repl
// console.log("Hello World");

var console = skewer;

// object: guarding function - contract that alows only string
var str = function (s) {
    var typeName = 'string';
    if (typeof s !== typeName) {
	throw new TypeError("typeof s: "+(typeof s)+ " must be "+typeName);
    } else {
	return s;
    }
};

// object: guarding function - (contract) asserts n is a signed 32-bit number
var int32 = function (n) {
    if ((n | 0) !== n) {
	throw new TypeError("Expected a 32-bit integer.");
    }
    return n;
};

// object: guarding function - Natural number (int32 and nonnegative)
var nat32 = function (n) {
    if ((n | 0) !== n || n < 0) {
	throw new TypeError("Expected a 32-bit natural.");
    }
    return n;
};

// object: guarding function - a contract that allows anything
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
var func  = typeOf("function");

var inc = function(x) {
    x = num(x);         // input itself must be a number
    return num(x + 1);  // return value must be a number
};

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

// // Creates a contract for an object whose
// // enumerable properties all satisfy the c-contract
// var objOf = function (c) {
//     func(c);        // check if c is a function
//     return function (o) {
//	obj(o);     // check if o is an object
//	var result = create(gpo(o));
//	for (i in o) {
//             result[i] = c(o[i]);
//	}
//	return result;
//     };
// };

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


// can be used for try-catch stuff; redeclared below
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
    //	return functor(c);
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
//	c = any;
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

// 1. check if c-contract is typeof Maybe and
// 2. execute it over this-Object. I.e. do: c(this)
Maybe.prototype.map = function (c) {
    return maybe(c)(this);  // this is the current Maybe-object
};

// It's sufficient to have mapFlatten and unit to get a Monad
var Monad = function () {};
// 1. check if c-contract is typeof Maybe and
// 2. execute it over this-Object and
// 3. flatten the structure
Monad.prototype.flatMap = function (c) {
    return this.map(c).flatten();
};
// make array into a monad; change the inheritance chain so that Array.prototype
// and Maybe.prototype inherit from Monad.prototype
Array.prototype.__proto__ = Monad.prototype;
Maybe.prototype.__proto__ = Monad.prototype;

var xs = [1,2,3], ys = [4,5,6], zs = [5];
// var xs = some(4), ys = some(5), zs = some(5);
// var xs = some(4), ys = none, zs = some(5);

/*
console.log(
    // 1. check if function (x) {..} is typeof Maybe and
    // 2. execute it over every element of xs-array and
    // 3. flatten the structure
    xs.flatMap(function (x) {               // each possible choice of x from xs
	return ys.flatMap(function (y) {    // each possible choice of y from ys
	    return zs.map(function (z) {    // each possible choice of z from zs
		return (x * y) + z;
	    });
	});
    })
);
*/

// Given an array of contracts, creates a contract for an array whose elems
// satisfy the respective contract
// prod-n - indexed by numbers
var prodn = function (cs) {
    arrOf(func)(cs);     // check if cs is an array of contracts
    var len = cs.length;
    return function (args) {
	arr(args);         // check if args is an array
	if (len != args.length) {
	    throw new TypeError("Length of cs and args must be the same");
	}
	var result = [];
	for (var i = 0; i < len; i++) {
	    // apply each contract to the corresponding argument
	    result[i] = cs[i](args[i]);
	};
	return result;
    };
};

var int32str = prodn([int32, str]);
// console.log(int32str([5, function () {} ])); // this fails
// console.log(int32str([5, "joe"]));

var objOf = function (c) {
    return function (x) {
	var result = {};
	for (var i in x) {
	    result[i] = c(x[i]);
	}
	return result;
    };
};

// prod-s - indexed by strings
var prods = function (cs) {
    // cs is a hashmap of contracts
    // - keys can be only strings (javascript hashmap limitation)
    // - values are functions
    objOf(func)(cs);                   // check if
    return function (args) {           // cs and args contains the same keys
	obj(args);
	var result = {};
	for (var i in args) {          // iterage over keys
	    // cs[i] - contract at key i applied at the key args[i]
	    result[i] = cs[i](args[i]);
	}
	return result;
    };
};

var int32str2 = prods({i: int32, s: str});
// console.log(int32str2({i: 5, s: "Jane"}));   // Object
// console.log(int32str2({i: 5, s: false}));    // TypeError: typeof s: boolean must be string
// console.log(int32str2({i: 5, s: "false"}));  // Object


// Product:           "give me everything in the list of cs-constrains"
// Coproduct: choice: "give me any one thing in the list of cs-constrains"


// Example:
// input:  [contract_0, .. , contract_i, .. , contract_n] mapped over two-elem array [choice_0, choice_1]
// output: [contract_i = cs[choice_0], contract_i(choice_1)] i.e. choice_1 satisfies constract_i
var coprodn = function (cs) {
    arrOf(func)(cs);               // cs must be an array of constain-functions
    var len = cs.length;
    return function (choice) {
	arr(choice);               // choice-parameter is an array ..
	if (choice.length != 2) {  // .. of two elements where ..
	    throw new TypeError("Expected an array size of 2 instead of: "+choice.length);
	}
	var ch0 = choice[0], ch1 = choice[1];
	nat32(ch0);          // .. the first element is a natural number and ..
	if (ch0 >= len) {    // .. its value is an index to the cs-array of contracts
	    throw new TypeError("Tag choice[0]: "+ch0+" must be < cs.length: "+len);
	};
	// .. which choses which contracts satisfies the 2nd element of the choice-parameter
	return [ch0, cs[ch0](ch1)];    // return a pair-array [contract, 2nd-elem-of-choice-param]
    };
};

var fnCoprodn = coprodn([int32, nat32, str]); // three options available: fnCoprod-param can be an array where:
console.log(fnCoprodn([0, -5]));              // 1st elem is 0 and 2nd elem is a positive or negative number
console.log(fnCoprodn([1, 8]));               // 1st elem is 1 and 2nd elem is positive number
console.log(fnCoprodn([2, "feri"]));          // 1st elem is 2 and 2nd elem is a string
					      // any other combination is catched by an exception:
// console.log(fnCoprodn([1, "jack"]));       // TypeError: Expected a 32-bit natural.
// console.log(fnCoprodn([4, "jack"]));       // Uncaught TypeError: Tag choice[0]: 4 must be < cs.length: 3

// [{'left', int23}, {'right', str}]
var coprods = function (cs) {
    objOf(func)(cs);               // cs must be an array of constain-functions
    var len = cs.length;
    return function (choice) {
	arr(choice);               // choice-parameter is an array ..
	if (choice.length != 2) {  // .. of two elements where ..
	    throw new TypeError("Expected an array size of 2 instead of: "+choice.length);
	}
	var ch0 = choice[0], ch1 = choice[1];
	str(ch0);            // .. the first element is a string and ..
	if (!cs.hasOwnProperty(ch0)) {  // hasOwnProperty(..) is provided
	    throw new TypeError("Unknown tag choice[0]: "+ch0);
	}
	// .. which choses which contracts satisfies the 2nd element of the choice-parameter
	return [ch0, cs[ch0](ch1)];    // return a pair-array [contract, 2nd-elem-of-choice-param]
    };
};

var fnCoprods = coprods({left: int32, right: str}); // three options available: fnCoprod-param can be an array where:
// console.log(fnCoprods(['left', -5]));               // ["left", -5]
// console.log(fnCoprods(['right', 'foo']));           // ["right", "foo"]


var maybeCoprods = function (c) {
    return coprods({
	none: prodn([]),
	some: c
    });
};

var fnCoprodsMaybe = maybeCoprods(int32); // equivalent to coprods({none: prodn([]), some: int32});
// console.log(fnCoprodsMaybe(['none', s]));      // Uncaught ReferenceError: s is not defined
// console.log(fnCoprodsMaybe(['some', 'bar']));  // TypeError: Expected a 32-bit integer.
// console.log(fnCoprodsMaybe(['none', 5]));      // TypeError: typeof a: number must be [object Array] (i.e. array)
// console.log(fnCoprodsMaybe(['none', [5]]));    // TypeError: Length of cs and args must be the same
// console.log(fnCoprodsMaybe(['none', []]));     // ["none", []]
// console.log(fnCoprodsMaybe(['some', 5]));      // ["some", 5]

// Pullback: a tupple
// Given an array of functions, returns a contract for those arrays where the elements
// all map to the same value under given functions, e.g. given [f, g] we get a contract
// for those [x, y] for which f(x) === g(y).
var pbn = function (fs) {  // fs is an array of functions
    var c = prodn(fs);     // create a constraint i.e. a product of those functions
    var len = fs.length;
    return function (args) {
	arr(args);
	var result = c(args);  // apply f to x, g to y etc. (i.e. compute f(x), g(y) etc.)
	for (var i = 1; i < len; ++i) { // i strarts from 1
	    if (result[i] !== result[i - 1]) {
		throw new TypeError("Failed to match pullback constraint");
	    }
	}
	return result; // an array [f(x), g(y), ...]
    };
};

// domain   codomain   domain    codomain
//   S ---f---> T        T ---g---> U         these are composable
//   S ---f---> T        R ---g---> U         these are not composable
// Pullback is needed to check that everything gives the same answer in the tupple.
// E.g. when multiplying matrixes: multiply rows with columns

// TODO from video 12 inclusive
var hom = function () {};
