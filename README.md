# js-utils
JavaScript utility functions

- algorithm.js
	- binarySearch
- array.js
	- compact
	- range
	- fill
	- includesAll
	- filterByOccurences
	- group
	- chunk
	- contentsAreEqual
	- filterIndices
	- findIndexOfSequence
	- findIndicesOfSequence
	- findEmptyIndices
	- isSparse
	- swap
	- shuffle
- browser.js
	- MinimalEventEmitter
		- emit
		- on
		- off
		- once
	- MinimalWebSocketClient
		- connect
		- disconnect
		- send
		- getURL
	- download
	- animate
	- getCookiesObject
- function.js
	- throttle
	- debounce
- math.js
	- norm
	- lerp
	- clamp
	- round
	- wrap
	- isPrime
	- isApproxEqual
	- PI
	- getFactors
- geometry.js
	- radiansToDegrees
	- degreesToRadians
	- Point
		- areEqual
		- constructor
		- copy
	- Line
		- areParallel
		- areEqual
		- getIntersections
		- constructor
		- copy
		- containsPoint
		- getRadians
		- getDegrees
- matrix.js
	- createMatrix
	- wrapMatrix
	- isRegular
	- getDimensions
	- rotateMatrix
- misc.js
	- isIterable
	- isNullish
	- isPrimitive
	- typeOf
	- attempt
	- sleep
- object.js
	- isEmpty
	- filterByProps
	- deepClone
	- deepCompare
	- deepExtend
	- extract
	- deepRemove
	- findPaths
	- recurse
- random.js
	- randFloat
	- randInt
	- randItem
	- randArray
	- randString
	- randHexColor
- string.js
	- capitalize
	- decapitalize
	- toPascalCase
	- toCamelCase
	- toSnakeCase
	- toKebabCase
	- spliceString
	- truncateString
	- isEmail
- time.js
	- WEEK_DAYS
	- MONTHS
	- MILLIS_BEFORE_1970
	- createTimeFormat	
