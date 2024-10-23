// const arr = [1,2,3,6,8,4,5]

// const result = arr.map((item) => {
//     return item + 1;
// }).map((item) => item * 2)
// .map((item) => item - 2)
// .map((item) => item / 3)
// .map((item) => Math.floor(item))
// .filter((item) => item >= 2)
// .filter((item) => item < 3)


// console.log(result)


// console.log(arr.map((item, index) => {
//     if(index<= 1) return item + 1


//     return item
// }))

// const result = arr.sort((a,b) = a - b)

// console.log(result)


 
// const arr1 = ['str', 'str', 'str','ddddddddddddd']
// const result = arr1.map((item, index) => item + index).map((item) => item.slice(1))
// .filter((item) => item.length > 10)


// console.log(result)



// const arr = ['tr1', 'str2', 'str3', 'str111111111114']

// const result = arr.reduce((acc, curr, index) => {
//     if( curr.length > 3 && curr.length < 10)  
//         acc.push(curr.slice(1) + index)
//     return acc;
// },[])

// console.log(result)


// const arr = [1,2,3,4,5,6,7]

// const arr = ['tr1', 'str2', 'str3', 'str111111111114']

// const sum = arr.reduce((acc, curr, idx) => {
//   if(idx < 2)return acc.length + curr.length
//   return acc
// })

// console.log(sum)


// const arr = [1,2,3,4,5,7,4,5,6]

// const biggest = arr.reduce((acc, curr)=>{
//     console.log(acc, acc> curr)
//     return acc > curr ? acc : curr
// })

// console.log(biggest)



// const arr = ['str', 'str1','str2', 'str3', 'str444444242424', 'axstr3']
// const biggest = arr.reduce((acc, curr) =>{
//     return acc.length > curr.length ? acc : curr;
// })
// console.log(biggest)



// const arr = ['str', 'str1','str2', 'str3', 'str444444242424', 'axstr3']
// arr.forEach(item => console.log(item))



// const arr = [1,2,3,4,5,7,4,5,6]

// const findItem = (list, item) =>{
//     return list.some((listItem)=> listItem === item)
// }

// console.log(findItem(arr, 3))
// console.log(findItem(arr, 10))




// const arr = [1,2,3,4,5,7,4,5,6]

// const findItem = (list, item) =>{
//     return !!list.find((listItem)=> listItem === item)
// }

// console.log(findItem(arr, 3))
// console.log(findItem(arr, 10))



// const arr = [1,2,3,4,5,7,4,5,6]

// const findItem = (list, item) =>{
//     return list.filter((listItem)=> listItem === item).length > 0
// }

// console.log(findItem(arr, 3))
// console.log(findItem(arr, 10))
