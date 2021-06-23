const fs = require('fs')
const path = require('path')

const path1800 = path.join(__dirname, 'data', '1800')
const path2000 = path.join(__dirname, 'data', '2000')

// 1._______________________________________________________________________________________
// const movieFiles = (firstPath, secondPAth) => {
//     fs.readdir(firstPath, ((err, files) => {
//         for (const file of files) {
//             fs.rename(path.join(firstPath, file), path.join(secondPAth, file), () => {
//             })
//         }
//     }))
// }
// movieFiles(path1800,path2000)
// movieFiles(path2000,path1800)

// 2._______________________________________________________________________________________

const pathMale = path.join(__dirname, 'data', 'male')
const pathFemale = path.join(__dirname, 'data', 'female')

// const moveGender=(genderPath)=>{
//     fs.readdir(genderPath, (err, files) => {
//         for (const file of files) {
//             fs.readFile(path.join(genderPath,file),(err,data)=>{
//
//                 if(JSON.parse(data).gender==='female'){
//                     fs.rename(path.join(genderPath,file),path.join(pathFemale,file),(err)=>{})
//                 }else{
//                     fs.rename(path.join(genderPath,file),path.join(pathMale,file),(err)=>{})
//                 }
//             })
//
//         }
//     })
// }
// moveGender(path2000)
// moveGender(path1800)

// 3._______________________________________________________________________________________

//
// const pathAll = path.join(__dirname, 'data','all')
// const pathFinal = path.join(__dirname, 'data','finall')
//
// const mover = (folderPath) => {
//     fs.readdir(folderPath, (err1, files) => {
//         for (const file of files) {
//             fs.stat(path.join(folderPath, file), (err2, stats) => {
//                 if (stats.isDirectory()) {
//                     return mover(path.join(folderPath, file));
//                 }
//
//                 fs.rename(path.join(folderPath, file), path.join(pathFinal, file), () => { });
//             })
//         }
//     })
// };
//
// mover(pathAll);

// 4.______________class___work____________________________________________________________________
const manOlderPath = path.join(__dirname, 'manOlder20')
const manYongerPath = path.join(__dirname, 'manYonger20')
const womanOlderPath = path.join(__dirname, 'womanOlder20')
const womanYongerPath = path.join(__dirname, 'womanYonger20')


const users = [
    {name: 'Olya', gender: 'female', age: 12},
    {name: 'Katya', gender: 'female', age: 23},
    {name: 'Denys', gender: 'male', age: 56},
    {name: 'Lilya', gender: 'female', age: 33},
    {name: 'ilona', gender: 'female', age: 43},
    {name: 'petro', gender: 'male', age: 17},
    {name: 'olena', gender: 'female', age: 65},
]

users.forEach((user) => {
    if (user.age > 20 && user.gender === 'female') {
        fs.appendFile(path.join(womanOlderPath, `${user.name}.txt`), `${JSON.stringify(user)}`, (err) => console.log(err))
    } else if (user.age < 20 && user.gender === 'female') {
        fs.appendFile(path.join(womanYongerPath, `${user.name}.txt`), `${JSON.stringify(user)}`, (err) => console.log(err))
    } else if (user.age > 20 && user.gender === 'male') {
        fs.appendFile(path.join(manOlderPath, `${user.name}.txt`), `${JSON.stringify(user)}`, (err) => console.log(err))
    } else if (user.age < 20 && user.gender === 'male') {
        fs.appendFile(path.join(manYongerPath, `${user.name}.txt`), `${JSON.stringify(user)}`, (err) => console.log(err))
    }
})


