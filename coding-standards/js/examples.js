/*
    IMPORTANT!!!!
    ###############################
    Do not change indenting in this script content
    ###############################
*/
var examples = {
    indenting: [
`
function calculateValue() {
    let a = 0;
    return a;
}
`,
`
function calculateValue() {
let a = 0;
 return a;
}
`
    ],
    semicolons: [
`
let firstName = 'John';
let lastName = 'Tester';

function getFullName() {
    // Statements...
}
`,
`
let firstName = 'John'
let lastName = 'Tester'

function getFullName() {
    // Statements...
};
`
    ],
    'semicolon-return': [
`
function getFullName() {
    let name = 'James Brown';
    return name;
}
`,
`
function getFullName() {
    let name = 'James Brown';
    return
        name;
}
`
    ],
    'semicolon-anonymous': [
`
let value = function() {
    // Statements...
};
`,
`
let value = function() {
    // Statements...
}
`
    ],
    'semicolon-while': [
`
do {
    // Statements...
} while (condition);
`,
`
do {
    // Statements...
} while (condition)
`
    ],
    camelcase: [
`
let type = 'humanoid';
let firstName = 'James';
let lastName = 'James';
let age = 22;
let fullName = 'James Brown';
let addressLine = 'Main street 1';
let city = 'London';
let lastSeenAt = '2018-09-24 12:12:12';
`,
`
let Type = 'humanoid';
let firstname = 'James';
let last_name = 'James';
let aGe = 22;
let FullName = 'James Brown';
let ADDRESSLINE = 'Main street 1';
let _city = 'London';
let last_seen_at = '2018-09-24 12:12:12';
`
    ],
    variables: [
`
let script = 'JavaScript';

function foo() {
    let type = 'humanoid';
    let city;
    let firstName = 'James',
        lastName = 'James',
        age = 22;
    let persons,
        animals,
        aliens;

    // Statements...
    if (type === 'humanoid') {
        console.log('kind of animal');
    }
}
`,
`
let script = 'JavaScript'; let type = 'humanoid';

function foo() {
    // Statements...
    if (type === 'humanoid') {
        console.log('kind of animal');
    }

    let type = 'humanoid'; let city;
    let firstName = 'James',
        lastName = 'James', age = 22;

    console.log(lastName);
    let persons,animals,aliens;
    let data = ''; let superdata = '';
    console.log(animals, data);
}
`
    ],
    constants: [
`
const PI = 3.14;
const FIRST_MANE = 'John';
const LAST_NAME = 'Doe';
const TYPE = 'Human';
const DATE_OF_BIRTH = '2028-12-31';
`,
`
const Pi = 3.14;
const fisrtName = 'John';
const LASTNAME = 'Doe';
const type = 'Human';
const DATEOF_BIRTH = '2028-12-31';
`
    ],
    arrays: [
`
var someArray = ['hello', 'world'];
var emptyArray = [];
var anotherArray = ['hello', 'world', 'again'];
`,
`
var someArray = [ 'hello', 'world' ];
var emptyArray = [ ];
var anotherArray = ['hello','world','again'];

`
    ],
    'arrays-lines': [
`
var fruits = [
    'apples',
    'banana',
    'pineapple',
];

var animals = [
    'cats',
    'dogs',
    'beavers'
];

var bugs = [
    'missing semicolons',
    'no trailing spaces'
];
`,
`
var fruits = [
    'apples',
    'banana',
    'pineapple'
];

var animals = [
    'cats', 'dogs',
    'beavers'
];

var bugs = [
'typo',
  'missing semicolons',
'no trailing spaces'
];
`
    ],
    typeof: [
`
if (typeof myVariable === 'string') {
    // Statement...
}
`,
`
if (typeof (myVariable) === 'string') {
    // Statement...
}
`
    ],
    'functions-naming': [
`
function calculateAge(yearOfBirth) {
    // Statements...
}

function submitForm() {
    // Statements...
}

function translateToEnglish(word) {
    // Statements...
}
`,
`
function a(b) {
    // Statements...
}

function buttonFunction() {
    // Statements...
}

function translator(a) {
    // Statements...
}
`
    ],
    'functions-camelcase': [
`
function calculateAge() {
    // Statements...
}

function getUpdatedStockPrices() {
    // Statements...
}
`,
`
function Calculateage() {
    // Statements...
}

function get_updated_stock_prices() {
    // Statements...
}
`
    ],
    'functions-named': [
`
// Function expression
const calculateAge = function () {
    // Statements...
}

// Function declaration (named function)
calculateAge() {
    // Statements...
}
`,
`
// Function expression
const calculateAge = function() {
    // Statements...
}

// Function declaration (named function)
calculateAge () {
    // Statements...
}
`
    ],
    'functions-value': [
`
const defaultSettings = {
    async: true,
    autosave: true,
}

function getData(url, settings) {
    // use 'defaultSettings' if 'settings' is undefined
    let settings = settings || defaultSettings;

    console.log(url, settings.autosave);
}

getData('google.de', {async: false, autosave: false});
// -> result: google.de, false
getData('google.de');
// -> result: google.de, true
`,
`
const defaultSettings = {
    async: true,
    autosave: true,
}

function getData(settings, url) {
    // use 'defaultSettings' if 'settings' is undefined
    let settings = settings || defaultSettings;

    console.log(url, settings.autosave);
}

getData({async: false, autosave: false}, 'google.de');
// -> result: google.de, false
getData('google.de');
// -> result: {async: false, autosave: false}, undefined
`
    ],
    'functions-calls': [
`
var saved = save(name, age, address);
var result = calculateAge(birthdate);
showResults(data, range);
`,
`
var saved = save( name, age, address );
var result = calculateAge (birthdate);
showResults (data,range);
`
    ],
    'constructors': [
`
class User {
    // Statements...
}

function CollapsibleDetails(node) {
    // Statements...
}

let visitor = new User();
let collapsibleDetail = new CollapsibleDetails(element);
`,
`
class user {
    // Statements...
}

function collapsibleDetails(node) {
    // Statements...
}

let visitor = new user();
let collapsibleDetail = collapsibleDetails(element);
`
    ],
    'comments': [
`
// Unselect all checkboxes.
doSomething();

/** Select all checkboxes. */
doSomethingElse();

/**
 * Set the shoe's color.
 *
 * @param {string} color - The shoe color.
 */
 function setColor(color) {
     // Statements...
 };
`,
`

`
    ],
    'concatenation': [
`
var string = 'Foo' + bar;
string = bar + 'foo';
string = bar() + 'foo';
string = 'foo' + 'bar';

var string += 'Foo';
string += bar;
string += baz();
`,
`
var string = 'Foo'+bar;
string = bar +'foo';
string=bar()+'foo';
string = 'foo'+'bar';

var string +='Foo';
string+=bar;
string+=   baz();
`
    ],
    'control': [
`
if (condition1 || condition2) {
    action1();
}
else if (condition3 && condition4) {
    action2();
}
else {
    defaultAction();
}
`,
`
if(condition1 || condition2){
    action1();
}else if (condition3 && condition4) {
    action2();
}
else {defaultAction();}
`
    ],
    'switch': [
`
switch (condition) {
    case 1:
        action1();
        break;

    case 2:
        action2();
        break;

    default:
        defaultAction();
}
`,
`
switch(condition){
    case 1:
        action1();
    break;

    case 2: action2() ;break;

    default: defaultAction();
}
`
    ],
    'try': [
`
try {
    // Statements...
}
catch (error) {
    // Error handling...
}
finally {
    return false;
}
`,
`
try{
    // Statements...
}catch(error){
// Error handling...
} finally { return false; }
`
    ],
    'for-in': [
`
for (var variable in object) {
    if (filter) {
        // Statements...
    }
}
`,
`
for (var variable in object) {
    // Statements...
}
`
    ],
    'for-in-has': [
`
let props = [];

for (var variable in object) {
    if (object.hasOwnProperty(variable)) {
        props.push(object[variable]);
    }
}
`,
`
let props = [];

for (var variable in object) {
    props.push(object[variable]);
}
`
    ],
    'comparsion': [
`
if (firstName === 'John' && lastName !== badLastName ) {
    // Statements...
}
`,
`
if (firstName == 'John' && lastName != badLastName ) {
    // Statements...
}
`
    ],
    'comma-operator': [
`

`,
`
/** This sets x to 9. */
var x = (y = 3, z = 9);
`
    ],
    'blocks': [
`
if (test) {
    return false;
}

function() {
    return false;
}
`,
`
if (test)
    return false;

if (test) return false;

if (test) { return false; }

function() { return false; }
`
    ],
    sample: [
`

`,
`

`
    ],
}