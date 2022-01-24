function myEach(collection, callback) {
    for (let accessor in collection) {
        callback(collection[accessor]);
    }
    return collection;
}

function myMap(collection, callback) {
    let modifiedArray = [];
    for (let accessor in collection) {
        modifiedArray.push(callback(collection[accessor]));
    }
    return modifiedArray;
}

function myReduce(collection, callback, acc) {
    let copy = Array.isArray() ? [...collection] : Object.values(collection);
    acc = acc || copy.shift();
    for (let accessor of copy) {
        acc = callback(acc, accessor, copy);
    }
return acc;
}

function myFind(collection, callback) {
    for (let accessor in collection) {
        if (callback(collection[accessor])) {
            return collection[accessor];
        };
    }
}

function myFilter(collection, callback) {
    let selectedArray = [];
    for (let accessor in collection) {
        if (callback(collection[accessor])) {
            selectedArray.push(collection[accessor]);
        };
    }
return selectedArray;
}

function mySize(collection) {
    return (Object.keys(collection).length);
}

function myFirst(collection, n) {
    let tempArr = [];
    let count = 1;

    for (let accessor in collection) {
        if (count <= n) {
            tempArr.push(collection[accessor]);
            count++;
        }
    }
    return tempArr.length > 1 ? tempArr : collection[0];
}

function myLast(collection, n) {
    let indexStart = collection.length - n;    
    return n > 1 ? collection.slice(indexStart, collection.length) : parseInt(collection.slice(collection.length - 1));
}

function myKeys(obj) {
    let arr = [];
    for (let keys in obj) {
        arr.push(keys);
    }
    return arr;
}

function myValues(obj) {
    let arr = [];
    for (let values in obj) {
        arr.push(obj[values]);
    }
    return arr;
}