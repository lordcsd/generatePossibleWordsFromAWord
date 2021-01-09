let fs = require('fs');

let myList = [];

let wait = setInterval(() => {
    // if (which <= 984) {
    //     fs.readFile(`./each/${which}.txt`, (err, buf) => {
    //         myList.push("'''" + buf.toString().replace(`MHB ${which-1}`,'') + "'''");
    //     })
    //     which += 1
    // }
    // else {
    //     console.log("over");
    //     stop()
    // }
    if (myList.length < 1){
        fs.readFile(`./allWordsStr.txt`, (err, buf) => {
            myList = buf.toString().replace(/,/g,"','");
       })
    }
    else {
        stop()
    }


}, 400)


function stop() {
    clearInterval(wait);
    fs.writeFile('newCompile.txt',myList,(err) =>{
        err ? console.log(err) : console.log("successful")
    })
}