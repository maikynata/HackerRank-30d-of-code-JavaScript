
let myPromise = new Promise((resolve, reject) => {
    let num = 1 + 2
    if (num == 2 ) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

myPromise.then((message) => {
    console.log("This is then " + message)
}).catch((message) => {
    console.log("This is catch " + message)
})