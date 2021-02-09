// Your code here
const mapToNegativize = function(array){
    let b=[]
    array.map(a=>{
        b.push(a*(-1))
    })
    return b;
}
const mapToNoChange = function (array) {
    const arr=[...array]
    return arr;
}

const mapToDouble = function (array){
    let b=[]
    array.map(a=>{
        b.push(a*2)
    })
    return b;
}

const mapToSquare = function (array){
    let b=[]
    array.map(a=>{
        b.push(a**2)
    })
    return b;
}

const reduceToTotal= function (sourceArray, startingPoint=0){
    let total = startingPoint
    for(let i=0; i<sourceArray.length; i++){
        total += sourceArray[i];
    }
    return total;
}

const reduceToAllTrue = function(sourceArray){
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!sourceArray[i]) return false
      }
      return true
    }
    
function reduceToAnyTrue(sourceArray) {
      for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) return true
      }
      return false
}
