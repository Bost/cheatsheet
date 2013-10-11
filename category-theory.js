/*
Impedance mismatch in data programming (has many manifestation):
Way to access collection of data is too strongly dependent on the details of the collection
Accessing data:
- relational dbase - you need to know that it collection of square tables, foreign keys etc.
		   - own thing
- objects in memory - graph of objects with referencies to each other and possibly in a cyclic form
		    - edge labeled graph
- xml - node labeled tree

Generalisation of all kinds of collections? Monad or monoid == Collection of things. There are a handfull of operations that matter on collections of things.
Common for all of those, it's realization is a standart query operators in LINQ.
Appropriate mathematical generalization of Set, Tree, Stack, Queue, Deck, Try, Parity/Priority Queue, Relation is a Monoid.
Monoid is a collection of thing with a way of putting things together (independent of what the things are).
Operations:
- Put the thing toggether
- Figure out what's in the monoid
are closed in the monoid.

Take one thing that's in the monoid, take another thing that's in the monoid, use the combination operator you get 3rd thing that's in the monoid.

"Don't leave the monoid". Typical realization of monoid is monad.

*/

// M-x console-repl
// console.log("Hello World");

var console = skewer;

function stackTrace() {
    var err = new Error();
    return err.stack;
}
// object: guarding function - contract that alows only string
var str = function (s) {
    var typeName = 'string';
    if (typeof s !== typeName) {
	console.log(stackTrace());
	throw new TypeError("typeof s: "+(typeof s)+ " must be "+typeName);
    } else {
	return s;
    }
};

// object: guarding function - (contract) asserts n is a signed 32-bit number
var int32 = function (n) {
    if ((n | 0) !== n) {
	console.log(stackTrace());
	throw new TypeError("Expected a 32-bit integer.");
    }
    return n;
};

// object: guarding function - Natural number (int32 and nonnegative)
var nat32 = function (n) {
    if ((n | 0) !== n || n < 0) {
	console.log(stackTrace());
	throw new TypeError("Expected a 32-bit natural.");
    }
    return n;
};

// object: guarding function - a contract that allows anything
var any = function (x) { return x; };

var repeat;
// morphism - i.e. a changes applied to s-value
repeat = function (s) {
    s = str(s);
    return str(s+s);
};

var typeOf = function (typeName) {
    typeName = str(typeName); // typeName itself must be a string
    return function(p) {
	if (typeof p !== typeName) {
	    console.log(stackTrace());
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
	console.log(stackTrace());
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
	    console.log(stackTrace());
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

// Given an array of contracts, it creates a contract for an array whose each
// element satisfies coressponding contract.
// prod-n - indexed by numbers
var prodn = function (cs) {
    arrOf(func)(cs);     // check if cs is an array of contracts
    var len = cs.length;
    return function (args) {
	arr(args);         // check if args is an array
	if (len != args.length) {
	    console.log(stackTrace());
	    throw new TypeError("Arrays cs and args must have equal length. cs.length: "+len+", args.length: "+args.length);
	}
	var result = [];
	// check that every argument passed the corresponding contract
	for (var i = 0; i < len; i++) {
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
	    console.log(stackTrace());
	    throw new TypeError("Expected an array size of 2 instead of: "+choice.length);
	}
	var ch0 = choice[0], ch1 = choice[1];
	nat32(ch0);          // .. the first element is a natural number and ..
	if (ch0 >= len) {    // .. its value is an index to the cs-array of contracts
	    console.log(stackTrace());
	    throw new TypeError("Tag choice[0]: "+ch0+" must be < cs.length: "+len);
	};
	// .. which choses which contracts satisfies the 2nd element of the choice-parameter
	return [ch0, cs[ch0](ch1)];    // return a pair-array [contract, 2nd-elem-of-choice-param]
    };
};

var fnCoprodn = coprodn([int32, nat32, str]); // three options available: fnCoprod-param can be an array where:
// console.log(fnCoprodn([0, -5]));              // 1st elem is 0 and 2nd elem is a positive or negative number
// console.log(fnCoprodn([1, 8]));               // 1st elem is 1 and 2nd elem is positive number
// console.log(fnCoprodn([2, "feri"]));          // 1st elem is 2 and 2nd elem is a string
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
	    console.log(stackTrace());
	    throw new TypeError("Expected an array size of 2 instead of: "+choice.length);
	}
	var ch0 = choice[0], ch1 = choice[1];
	str(ch0);            // .. the first element is a string and ..
	if (!cs.hasOwnProperty(ch0)) {  // hasOwnProperty(..) is provided
	    console.log(stackTrace());
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
		console.log(stackTrace());
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

var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

// Homomorphism - allows us to write function without mentioning any contract in the body
// Creates a contract for function whose inputs and outputs satisfy the given contracts.
// in1, .., inN, out-arguments do not have to be contracts. They can be also guarded functions.
var hom;
hom = function (/* in1, .., inN, out */) { // arbitrary-sized argument-array
    var argLen = arguments.length;
    // arguments is a special javascript stuff. It's an array-like Object (Arguments-Object)
    // It isn't standart object, but has nummeric indices like an array
    var inArgs = slice(arguments, 0, argLen-1); // first n-1 args are input args; create an array from them
    var inFns = arrOf(func)(inArgs);            // check that inArgs is an array of functions
    var inFnsProd = prodn(inFns);               // create an inFnsProd-contract for an array where each elem is a functions
    var outFn = func(arguments[argLen-1]);      // check that out-argument is a function, too

    // outContractComment behaves like middle - higher order contracts
    var outContractCommented = function (middle) {// result is a contract expecting guarded middle-function
	var outContract = function xfn(varArgs) {
	    var xfnProd = inFnsProd(slice(arguments));// check xfn-arguments against inFns-product-contract
	    var middleResult = middle.apply(this, xfnProd);// apply middle-function on arguments in xfnProd-array
	    return outFn(middleResult);         // check result of middle(..) against outContract (last hom-argument)
	};

	// add some comment to the source code of outContract-function for debugging purposes. I.e.:
	outContract.toString = (function (srcCode) {// create a function with a srcCode returning
	    return function () {                    // another function, where the another
		return srcCode + '/* guarded */';   // function adds some comment to the srcCode
	    };
	})('' + middle);                        // middle-function source code
	// apply out-function to product of middle-function
	return outContract;
    };
    return outContractCommented;
};

hom = function (/* input1, .. inputN, out */) {
    var argLen = arguments.length;
    var before = prodn(arrOf(func)(slice(arguments, 0, argLen - 1)));
    var after = func(arguments[argLen - 1]);
    var result = function (middle) {
	var result = function(varArgs) {
	    // console.log("va:"+varArgs);
	    // if (args.length !== argLen - 1 ) {
	    //	console.log(stackTrace());
	    //	throw new TypeError('args.length !== argLen - 1: '+args.length+' !== '+(argLen-1));
	    // }
	    return after(                             // 4. check result of step 3. against after contract
		middle.apply(this,                    // 3. calculate this.middle(varArgs)
			     before(                  // 2. check the array-object against the before-contract
				 slice(arguments)))); // 1. create an array-object
	};
	result.toString = (function (str) {   // result.toString is a function with one str-argument
	    return function () {              // that returns a function
		return str + '/* guarded */'; // returning str + comment
	    };
	})('' + middle);
	return result;
    };
    return result;
};

// fnBefore and fnAfter get applied before and after the middle-function.
// (see Aspect-Oriented Programming). They can be any functions (see definition), not just contracts
var fnBefore = int32, fnAfter = str;
repeat = hom(fnBefore, fnAfter)(function middle(i) {
    return (''+ i + i);
});

var one = hom(int32)(function () { // no input params, int32 is output-contract
    return;
});

// Monoid Examples: concatenation - associative (order doesnt matter, not commutative)
//                                - unital (has identity element: '' empty string)
//                  addition      - associative (and also commutative)
//                                - unital; identity element is 0

// Monoid example:
var compose = function (f, g) {
    return function (x) {
	return f(g(x));
    };
};

var compositionIdentity = function (x) {
    return x;
};

// compose(compose(f, g), h) === compose(f, compose(g, h));
// var f = function (x) { return x+1; };
// var g = function (x) { return x+3; };
// console.log(g(1));
// console.log(f(1));
// console.log(compose(f, g)(1));

// monoid: any set with associative unital binary operation and the identity element
var monoid = function (set,      // contract for a set of elements (values)
		       times,    // associative binary (unital) operation
		       ident) {  // identity element (noary operation)
    return prods({               // product-contract indexed by string
	t: func,
	'*': hom(set, set, set), // note: we can't really verify associativity of '*'
	1: hom(set)              // and identity of 1; we can write test for small cases
    })({                         // prods-contract
	t: set,
	'*': times,
	1: ident
    });
};

var testAssoc = function (mon, a, b, c) {
    a = mon.t(a);
    b = mon.t(b);
    c = mon.t(c);
    var op = mon['*'];
    // (a * b) * c === a * (b * c);
    if (op(op(a, b), c) !== op(a, (op(b, c)))) {
	console.log(stackTrace());
	throw new TypeError("The operation is not assoctiative: "+op);
    }
};

var concat = monoid (
    str,
    function (x, y) { return x + y; },
    function () { return ''; }
);

var addition = monoid (
    num,
    function (x, y) { return x + y; },
    function () { return 0; }
);

// strMonoid['*'] fetches the concatenation function
// console.log(concat['*']("Hello, ", "world!"));


// monad: monoid object in a endofunctor category
// a monad is a monoid in a category whos objects are functors and
// whose morhisms are natural transformations (maps between functors)
var monad = function(ftor,
		     times,
		     ident) {
    return function (t) {
	func(t);
	return prods({
	    t: func,
	    '*': hom(ftor(ftor(t)), ftor(t)), // tensor product
	    1: hom(any(t), ftor(t))
	})({
	    t: ftor(t),
	    '*': times(t),
	    1: ident(t)
	});
    };
};

var arrOfMonad = monad(arrOf, arrOfFlatten, arrOfUnit);
var arrInt32 = arrOfMonad(int32);
// arrInt32[1] is the ident function: ftor(int32) and that is arrOf(int32) and that creates
// an array from 5: [5]
// console.log(arrInt32[1](5));

// arrInt32['*'] is the hom function: ftor(ftor(t)) --> ftor(t) and that is
// arrOf(arrOf(int32)) --> arrOf(int32) and that is arrOfFlatten(int32) --> arrOf(int32)
// create an array from 5: [5]
// console.log(arrInt32['*']([[1,2,3], [4,5]]));

// that is ftor(t) and that if a check of contract: arrOf(int32)([1,2,3]);
// console.log(arrInt32.t([1,2,3]));


var M = function () {
    var pairs = [];
    this.for = function (v, e) {    // just store theory v,e pair in the pairs
	pairs.push({e: e, v: v});
	return this;
    };
    this.yield = function (body) {  // yield computes a string
	var p1 = pairs.map(
	       function (pair, index) {
		   var mapFunc = (index === pairs.length - 1) ? 'map' : 'flatMap';
		   return '(' + pair.e + ').'+mapFunc+'(function(' + pair.v + ') { return ';
	       }
	);
	var p2 = '(' + body + ');';
	var p3 = pairs.map(function () { return '});';});
	var desugared = p1.join('') + p2 + p3.join('');
	pairs = [];
	return desugared;
    };
};

M.for = function (v, e) {
    return (new M).for(v, e);
};


var upto = hom(int32, arrOf(int32))(function (x) {
  var r = [];
  for (var i = 0; i < x; ++i) {
    r.push(i);
  }
  return r;
});

// "(x).flatMap(function(x) { return (tys).map(function(y) { return (x * y);});});"
// console.log(M.for('x', 'txs').for('y','tys').yield('x * y'));

// For x in xs an for y in ys yield x * y: [5, 6, 7, 10, 12, 14, 15, 18, 21]
// take an element in x and for each element in ys yield x * y and flatten the array
//console.log(eval(M.for('x', 'xs').for('y','ys').yield('x * y')));
//console.log(eval(M.for('x', 'upto(5)').for('y','ys').yield('x * y')));

// takes a list of functions and returns a function of one input
var equalizer = function(fs) {
    var len = fs.length;
    if (len < 1) {
	console.log(stackTrace());
	throw new TypeError('fs.lenght must be > 0');
    }
    return function (x) {
	var tuple = [];
	for (var i = 0; i < len; ++i) {
	    tuple[i] = x;
	}
	// pbn: pullback apply each function to the same input and check they all
	// get the same answer
	return pbn(fs)(tuple)[0]; // [0] returns that answer
    };
};

// Return n-th Fibbonaci number
var fib = hom(nat32, nat32)(function (n) {
    return ([0,1,1,2,3,5,8,13,21,34,55,89,144,233,337])[n];
});

var square = hom(nat32, nat32)(function (n) {
    return n * n;
});

// check if n-th number of Fibbonaci sequence is equal to its squared value:
// 12th Fibbonaci number is 144 == 12 * 12
// console.log(equalizer([fib, square])(12));

// monadic operators:
// where: filter
// select: map
// select many: bind (fold; right handed fold)
// order by:
// group by:


// monoid homomorphisms: (function between homomorphisms but it's also a special
// guarded function, it preserves the structure of a monoid

var bit = function (b) {
    if (b !== 0 && b !== 1) {
	console.log(stackTrace());
	throw new TypeError('Expected 0 or 1 instead of: '+b);
    }
    return b;
};

// Constant function returning a function of x:
// Signature is: give me function of any kind and I return a function that
// takes no input and returns that thing
var K = hom(any, hom(any))(function (x) {
    return function () {
	return x;
    };
});

var xor = hom(bit, bit, bit)(function (x, y) { return x ^ y; });
var xorMonoid = monoid(int32, xor, K(0));

var add = hom(int32, int32, int32)(function (x, y) { return x + y; });
var addMonoid = monoid(int32, add, K(0));
// console.log(addMonoid[1]());

// Monoid homomorphism: conversion from int32 to bit; a guarded function between two set of values
var parity = hom(int32, bit)(function (n) { return n % 2; });

// Monoidal function
// Inputs:
//     m1 - source monoid
//     m2 - target monoid
//     f - transition function: m1 → m2
// Outputs:
//     {..} object
// nomFunc can act as a guarded function between monoids
// or as a monoid if f is an identity function
var monFunc = function (m1, m2, f) {
    return {
	// monoid type of monFunc is a function f with signature: m1.t → m2.t
	t: hom(m1.t, m2.t)(f), // function between contracts
	'*': equalizer([ // equalizer returns 0th function from its input array
	    function (x, y) { return f(m1['*'](x, y)); },
	    function (x, y) { return m2['*'](f(x), f(y)); }
	]),
	1: equalizer([
	    // this function returned
	    // m1[1] is a guarded function returning returning 0;
	    // m1[1]() is its application - i.e. 0-value
	    // f(0) is a transformation of a function returning 0-element
	    function () { return f(m1[1]()); },
	    // function returning 0-element
	    m2[1]
	])
    };
};

var monHom = function (before,  after) {
    // monHom return a new guarded function between before- and after-monoid (i.e. contracts)
    return function (middle) {
	return {
	    t: hom(before.t, after.t)(middle.t),
	    '*': hom(before.t, before.t, after.t)(middle['*']),
	    1: hom(after.t)(middle[1])
	};
    };
};

var leq = function (pair) {
    prodn([num, num])(pair);         // check that pair is an array of two numbers
    var x = pair[0], y = pair[1];
    if (x > y) {
	throw new TypeError('' + x + ' must be less or equal than '+ y);
    }
    return pair;
};

// Any partial order can be turned into a category: Examples with leq and div
// It's a category where there is at most one morphism between any two objects

// leqHom compose the less-or-equal statements
var leqHom = function (before, after) {
    leq(before); leq(after); // check that before and after are pairs
    return function (middle) {
	leq(middle);
	if (before[1] !== middle[0]) {
	    throw new TypeError('Expected '+middle[0]);
	}
	if (middle[1] !== after[0]) {
	    throw new TypeError('Expected '+after[1]);
	}
	return [before[0], after[1]];
    };
};

// console.log(leqHom([3,5], [7,9])([5,7]));  // 3 ≤ 5 ≤ 7 ≤ 9

var div = function (pair) {
    prodn([nat32, nat32])(pair);
    // var x = pair[0], y = pair[1];
    if ((y / x) % 1 !== 0) {
	throw new TypeError(x + ' does not divide ' + y);
    }
    return pair;
};

var divHom = function (before, after) {
    div(before); div(after);
    return function (middle) {
	div(middle);
	if (before[1] !== middle[0]) {
	    throw new TypeError('Expected '+middle[0]);
	}
	if (middle[1] !== after[0]) {
	    throw new TypeError('Expected '+after[0]);
	}
	return [before[0], after[1]];
    };
};
// console.log(divHom([3,6], [12,24])([6,12]));  // 3 | 6 | 12 | 24 ⇒ 3 | 24

// Category takes a c-contract for the morphisms
// No loss of informations - we can think of the objects as the identity morphisms
// all we need to know what a morphism is and how to compose morphisms
var category = function (c, cHom) {
    return prods({
	// c is a contract-function
	c: func,
	// cHom takes before-contract, after-contract and returns a function
	// that expects a middle and produces a composition of it
	cHom: hom(c, c, hom(c, c))
    })({
	c: c,
	cHom: cHom
    });
};

var LEQ = category(leq, leqHom);
var DIV = category(div, divHom);

var guard = function (triple) {
    return prodn([func, func, hom(triple[0], triple[1])])(triple);
    //             |     |    +-- function going from input contract to output contract
    //             |     +------- input contract
    //             +------------- output contract
};

// casting contract and guarded functions in this form
var guardHom = function (triple) {
    before = guardFunc(before);
    after = guardFund(after);
    return function (middle) {
	middle = guardFunc(middle);
	return function (x) {
	    return [before[0],
		    after[1],
		    after[2](                // 3. apply after[2] on result of 2.
			middle[2](           // 2. apply middle[2] on result of 1.
			    before[2](x)))   // 1. apply before[x] on x
	    ];
	};
    };
};

var GUARD = category(guardFunc, guardHom);

var repeat = function (n) {
    return '' + n + n;
};

var len = function (a) {
    return a.Length;
};

var half = function (s) {
    return s.length/4;
};

var gLen = guard([arr, int32, len]);
var gRepeat = guard([int32, str, repeat]);
var gHalf = guard([str, int32, half]);

// gLen: arr → int32          // before
// gRepeat: int32 → str       // middle
// gQuarter: str → int32      // after
guardHom(gLen, gQuarter)(gRepeat);

// TODO from video #18
