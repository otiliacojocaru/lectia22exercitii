// const str = 'string'

// for(let i = 0; i < str.length; i++){
//     console.log(str[i])
// }



// const str = 'string'
// for(let i = str.length -1; i >= 0; i--){
//     console.log(str[i])
// }




// const str = 'string'
// for(let i = 0; i < str.length; i++){
//     console.log(str[str.length - 1 - i])
// }



// const str = 'string'

// let strInvers = ''
// for(let i = 0; i < str.length; i++){
//     strInvers = strInvers + str[str.length - 1 - i]
// }
// console.log(strInvers)



// const str = 'string'

// const result = str.split('').reverse().join('')

// console.log(result)


const polindrom = 'level'

const checkPolindrom = (str) => {
    let result = true

    for(let i = 0; i < str.length/2; i++) {
        if(str[i] !== str[str.length - 1 - i]) return false
    }

    return result
}

console.log(checkPolindrom(polindrom))