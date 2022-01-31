# js-utils
Javascript utility functions


I most definitely contradict my general code formatting several times here


- general/
	- array.js
		- compact
		- range
		- includesAll
		- filterByOccurences
		- group
		- chunk
		- contentsAreEqual
		- filterIndices
		- findIndexOfSequence
		- findIndicesOfSequence
		- findMissingIndices
		- isSparse
		- swap
		- shuffle
		- multiply
	- func.js
		- throttle
		- debounce
	- logger.js
		- Logger
			- constructor
			- getId
			- log
			- addTimer
			- endTimer
	- math.js
		- norm
		- lerp
		- clamp
		- round
		- wrap
		- isPrime
		- isApproxEqual
		- pi
		- Point
			- compare
			- constructor
		- Line
			- compare
			- getIntersectPoints
			- areIntersecting
			- constructor
			- getLength
			- containsPoint
		- Angle
			- compare
			- radiansToDegrees
			- degreesToRadians
			- constructor
			- getRadians
			- getDegrees
		- Polygon
			- getOverlapPoints
			- areOverlapping
			- constructor
			- getArea
			- containsPoint
	- matrix.js
		- createMatrix
		- isRegular
		- getDimensions
		- rotateMatrix
	- misc.js
		- typeOf
		- isIterable
		- isNullish
		- isPrimitive
		- attempt
		- sleep
		- noop
		- echo
	- object.js
		- isEmptyObject
		- filterObjectsByProps
		- deepClone
		- deepCompare
		- deepExtend
		- extract
		- deepRemove
		- findPath
		- recurse
	- random.js
		- randFloat
		- randInt
		- randItem
		- randArray
		- randString
		- randHexColor
	- sort.js
		- insertSort
		- mergeSort
	- string.js
		- capitalize
		- decapitalize
		- spliceString
		- truncateString
		- toPascalCase
		- toCamelCase
		- toSnakeCase
		- toKebabCase
	- time.js
		- WEEK_DAYS
		- MONTHS
		- MILLIS_BEFORE_1970
		- destructDate
		- createTimeFormat
- browser/
	- client.js
		- WebSocketClient
			- connect
			- disconnect
			- send
			- getURL
	- misc.js
		- EventEmitter
			- emit
			- on
			- off
			- once
- node/
	- file.js
		- readJSONConfigDir
	- server.js
		- ExpressWebSocketServer
			- use
			- listen
			- getPort
			- send
			- close
