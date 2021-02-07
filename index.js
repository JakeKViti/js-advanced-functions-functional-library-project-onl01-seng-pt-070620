const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const numbers in collection){
        callback(collection[numbers])
      }
        return collection
    },

    map: function(collection, callback) { //(x) => (x * 3)
        let array = [];
        for (const numbers in collection){
          array.push(callback(collection[numbers]))
        }
        return array
    },

    reduce: function(collection, callback, acc=0) { 
      //const callback = (acc, val, collection) => (acc + (val * 3)

			if (acc == 0) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			for (let i = 0; i < collection.length; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;
		},

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      let array = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          array.push(collection[i])
        }
      }
      return array
    },

    size: function(collection) {
      let i = 0
      for (const numbers in collection){
        i++;
      }
      return i
    },

    first: function(collection, n=1) {
      let array = []
      for (let i = 0; i < n; i++) {
        if (n == 1){
          return collection[i]
        }
        array.push(collection[i])
      }
      return array
    },

    last: function(collection, num = 1) {
      //return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
      if (num === 1){
        return collection[collection.length - 1]
      }                       
      return collection.slice(collection.length - num, collection.length)
    },

    compact: function(collection) {
      //false, null, 0, "", undefined and NaN 
      let array = []
      for (let i = 0; i < collection.length; i++) {
        if (collection[i]) {
          array.push(collection[i])
        }
      }
      return array
    },

    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },


    flatten: function(collection, shallow=false, newArr=[]) {
      //[1, [2, 3], [[4, 5], 6, [7, [8, 9]]]]
      let newArray = []
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow == true){
      newArray = collection
      return newArray.flat()
    }
    for (let val of collection) {
      console.log(val)
          this.flatten(val, false, newArr)
        }
      return newArr
    },

    uniq: function(collection, predicate) {
      
    },

    keys: function(collection, predicate) {
      
    },

    values: function(collection, predicate) {
      
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
