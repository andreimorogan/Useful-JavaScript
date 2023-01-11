// How to check if an object contains a property

const shoppingList = {
    bread: 2,
    milk: 2,
    tomatoes: 5,
}

const checkForProperty = (object, property) => Object.hasOwn(object, property);


// How to loop through an array, and find the largest number

const testArray = [true, 'Erik', -300, 100, 5, 10, 5255];

const largestNumber = (arr) => {
    let largest = 0;
    for (item of arr) {
        largest = item > largest ? item : largest;
    }
    return largest;
} /* output is : 5255 */


// How to convert object's properties and values into an array

const genericObject = {
    property1: true,
    property2: 'Hello',
    property3: 3500
}

const objectToArray = Object.entries(genericObject);


// How to convert an object-like array into an actual object

const objectLikeArray = [['property1', true],['property2', 'Hello'],['property3', 3500]];

const arrayToObject  = Object.fromEntries(objectLikeArray);


// How to create a function that generates a random hex number

const generateRandomColor = () => {
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}


// How to create a function that will test if the parameter passed is an RGB or Hex code, convert it to the opposite type or otherwise inform the user that it isn't a valid code

const hexCode = '#FF0000'; // expected output: 'rgb(255, 0, 0)'
const rgbCode = 'rgb(255, 0, 0)'; // expected output: '#FF0000'
const dummy = 'hello'; // expected output: "Invalid code"

const convertColor = (code) => {

    function isValidHexCode(code) {
        const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
        return hexRegex.test(code);
    }

    function isValidRGBCode(code) {
        const rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
        return rgbRegex.test(code);
    }

    function hexToRgb(code) {
        code = code.substring(1);
        let r = parseInt(code.substring(0,2), 16);
        let g = parseInt(code.substring(2,4), 16);
        let b = parseInt(code.substring(4,6), 16);
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }

        const rgbToHex = (code) => {
        return '#' + code.slice(4,-1).split(',').map(x => (+x).toString(16).padStart(2,0)).join('');
    }

    switch(true) {
        case isValidHexCode(code) === true:
            return hexToRgb(code);
        case isValidRGBCode(code) === true:
            return rgbToHex(code);
        default:
            return "Invalid code";
    }

}


// How to create a function that accepts an array as an argument, sorts the items numerically (ascending), groups equal numerical values in another array inside the original array, and groups the strings separately (also sorted numerically ascending)

const input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const inputWithStrings = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20, "2", "3", "2", "4"];

const sortArray = (array) => {
    array.sort((a, b) => a - b);
    const arrayOfStrings = [];
    const grouped = array.reduce((r, v, i, a) => {
        if (typeof v === 'string') {
            arrayOfStrings.push(v);
        } else if (v === a[i - 1]) {
            r[r.length - 1].push(v);
        } else {
            r.push(v === a[i + 1] ? [v] : v);
        }
        return r;
    }, []);
   const finalResult = grouped.concat([arrayOfStrings]);
    return finalResult;
}


// How to create a function that accepts an array and a target value as an argument, and returns all the pairs of items from the array that when added together result in the target value (the returned items are grouped in their own arrays inside the original array)

const inputArray = [1,2,3, 2, 2];

const arr = ['test', 25, 'hello', 25];

const targetArray = (arr, target) => {
    let finalResult = [];
    for (i = 0; i < arr.length ; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            arr[i] + arr[j] === target ? finalResult.push([arr[i], arr[j]]) : undefined;
        }
    }
    if (finalResult.length !== 0 && finalResult !== undefined) {
        return finalResult;
    } else {
        console.log('No two values have a sum that returns the target value.');
    }
}   




