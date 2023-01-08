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


