// strings
const myVariable = 'Mathematics'

// The .length() property
console.log(myVariable.length)
console.log('Every good boy does fine'.length)

// .charAt() :: returns the character at the position you provide 
console.log(myVariable.charAt(3))
console.log(myVariable.charAt(9))

// .indexOf() :: returns the position of the first character of the string you provide counting from the LHS 
console.log(myVariable.indexOf('ati'))
console.log(myVariable.indexOf('Mat'))
// e.g .indexOf
const string = 'The code undefined code code !'
console.log(string.indexOf('Code'))
console.log(string.indexOf('code'))
console.log(string.indexOf('code', 4))
console.log(string.indexOf('code', 5))
console.log(string.indexOf(''))     

// .lastIndexOf() :: returns the position of the first character of the string you provide counting from the LHS
console.log(myVariable.lastIndexOf('ati'))
console.log(myVariable.lastIndexOf('mat'))
// e.g .lastIndexOf :: returns the position of the first character of the string you provide counting from the RHS
console.log(string.lastIndexOf('Code'))
console.log(string.lastIndexOf('code'))
console.log(string.lastIndexOf('code', 4))
console.log(string.lastIndexOf('code', 5))
console.log(string.lastIndexOf(''))

// .toLowerCase() 
let ltext = 'HELLO WORLD! :)'
let lresult = ltext.toLowerCase()
document.getElementById('lowercase').innerHTML = lresult

// .toUpperCase()
let utext = 'citizens of earth :)'
let uresult = utext.toUpperCase()
document.getElementById('uppercase').innerHTML = uresult

// .replace() method :: searches a string for a value or a regular expression and returns a new string with the value(s) replaced but it does not change the original string
let repl = document.getElementById('repl').innerHTML
document.getElementById('repl').innerHTML = repl.replace('Rwanda', 'Nigeria:)')

// .replaceAll() method:: searches a string for a value or regular expression and returns a new string with all the value(s) replaced but it does not change the original string
let replA = 'I love cats. Cats are very easy to love. Cats are very popular.'
replA = replA.replaceAll('Cats', 'Dogs')
replA = replA.replaceAll('cats', 'dogs')
document.getElementById('replA').innerHTML = replA

// .slice() method :: extracts a part of a string and returns the extracted part(s) in a new string
let slc = 'Hello World!'
let sresult = slc.slice(6, 12)
document.getElementById('slc').innerHTML = sresult

// .split() method :: splits a string into an array of substrings, and returns the array.
let spl = 'How are you doing today?'
const myArray = spl.split(' ')
document.getElementById('spl').innerHTML = myArray

// .charAt() method :: returns the character at a specified index (position) in a string.
let char = 'Hello World!'
let cletter = char.charAt(0)
document.getElementById('char').innerHTML = cletter

// .charCodeAt() method :: returns a UTF-16 code (an integer between 0 and 65535)
let charC = 'Hello World!'
document.getElementById('charC').innerHTML = charC.charCodeAt(10)

// .concat() method :: joins two or more strings.
let text1 = 'Sea'
let text2 = 'food'
let tresult = text1.concat(text2)
document.getElementById('conc').innerHTML = tresult

// .startsWith() method :: returns true if a string starts with a specified string:
let strWtext = 'Hello world, welcome to the universe.'
let strWresult = strWtext.startsWith('Hello')
document.getElementById('strW').innerHTML = strWresult

// .endsWith() method :: returns true if a string ends with a specified string, otherwise false. 
let eWtext = 'Hello World'
let eWresult = eWtext.endsWith('World')
document.getElementById('endsW').innerHTML = eWresult

// .includes() :: returns true if a string contains a specified string
let incltext = 'Univelcitys cohort 6B5;)'
let inclresult = incltext.includes('cohort 6B5')
document.getElementById('incl').innerHTML = inclresult

// .substring() method :: extracts a part of a string and returns the extracted part(s) in a new string (NB: Start and end values less than 0 are treated as 0)
let substrgtext = 'I love Jesus ;)...do you?'
let substrgresult = substrgtext.substring(0, 15)
document.getElementById('substrg').innerHTML = substrgresult

// .substr() :: extracts a part of a string and returns the extracted part(s) in a new string (NB: The second parameter specifies the length of the extracted part)
let substrtext = 'I love Jesus ;)...do you?'
let substrresult = substrtext.substr(0, 15)
document.getElementById('substr').innerHTML = substrresult

// .trim() :: removes whitespace from both sides of a string
let trtext = '  wherefore lay aside every weight  '
let trresult = trtext.trim()
document.getElementById('tr').innerHTML = trresult

// .trimStart :: removes whitespace only from the start of a string
let trStext = '   and the sin which so easily besets'
let trSresult = trStext.trimStart()
document.getElementById('trS').innerHTML = trSresult  

// .trimEnd() :: removes whitespace only from the end of a string
let trEtext = '   Put on the whole armour of God   '
let trEresult = trEtext.trimEnd()
document.getElementById('trE').innerHTML = trEresult

// .padStart() :: pads a string from the start, with another string (multiple times) until it reaches a given length
let pdStext = '7'
pdStext = pdStext.padStart(10, '0')
document.getElementById('pdS').innerHTML = pdStext

// .padEnd() :: pads a string from the end, with another string (multiple times) until it reaches a given length
let pdEtext = '12'
pdEtext = pdEtext.padEnd(10, '0')
document.getElementById('pdE').innerHTML = pdEtext