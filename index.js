function standardizeInput(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }
  
function myEach(collection, callback) {
    const newCollection = standardizeInput(collection);
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      callback(newCollection[idx]);
    }
  
    return collection;
  }
  
function myMap(collection, callback) {
    const newCollection = standardizeInput(collection);
  
    const newArr = [];
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      newArr.push(callback(newCollection[idx]));
    }
  
    return newArr;
  }
  
function myReduce(collection, callback, acc) {
    let newCollection = standardizeInput(collection);
  
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
  
    const newLength = newCollection.length;
  
    for (let i = 0; i < newLength; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }
  
function myFind(collection, predicate) {
    const newCollection = standardizeInput(collection);
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) return newCollection[idx];
    }
  
    return undefined;
  }
  
function myFilter(collection, predicate) {
    const newCollection = standardizeInput(collection);
  
    const newArr = [];
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
    }
  
    return newArr;
  }
  
function mySize(collection) {
    const newCollection = standardizeInput(collection);
    return newCollection.length;
  }
  
  // Array Functions
function myFirst(arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
  }
  
function myLast(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
  }
  
function mySortBy(arr, callback) {
    const newArr = [...arr];
    return newArr.sort(function(a, b) {
      if (callback(a) > callback(b)) {
        return 1;
      } else if (callback(b) > callback(a)) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  
function unpack(receiver, arr) {
    for (let val of arr) {
      receiver.push(val);
    }
  }

function myFlatten(collection, shallow, newArr=[]) {
    if (shallow) {
      for (let val of collection) {
        Array.isArray(val) ? unpack(newArr, val) : newArr.push(val);
      }
    } else {
     
      for (let val of collection) {
        if (Array.isArray(val)) {
          myFlatten(val, false, newArr);
        } else {
          newArr.push(val);
        }
      }
    }
    return newArr;
  }
  
  // Object Functions
  
function myKeys(obj) {
    const keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }
  
function myValues(obj) {
    const values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;
  
  }