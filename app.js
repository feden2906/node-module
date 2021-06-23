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

const pathMale=path.join(__dirname, 'data','male')
const pathFemale=path.join(__dirname, 'data','female')

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


// const pathAll = path.join(__dirname, 'data','all')
// const pathFinal = path.join(__dirname, 'data','final')
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