/* Find distinct integers among the given input of arrays */

/*
Function that takes n number of arrays of integers and return distinct values among
@param array of array of integers
@returns array of ditinct integers
*/
function distinctArray(...arrays) {
  const all = arrays.flat()
  const occurances = {}
  
  all.forEach(num => {
    occurances[num] = (occurances[num] || 0)+1
  })
  
  const distinct = Object.keys(occurances).filter(key => occurances[key]===1)
  return distinct
}

// Calling the function
console.log(distinctArray([2,3,4], [3,4,5], [5,6,7], [8,9]))
