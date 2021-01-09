let gotten = require('./wordsArray')
let myArray = []
function getCombinations(word){
    let letters = word.split('')
    let highestComb
    let comArray = []
    let getHighestCombNumber = sent =>{
        let num = ''
        for(let i = sent.length;i>0;i--){
            num += i
        }
        highestComb = num
    }
    getHighestCombNumber(word)

    let list = []
    for(let i = 0;i <= Number(highestComb);i++){
        let iman = `${i}`
        let one = 0

        for(let j = 0;j<highestComb.length;j++){
            if(iman.length == highestComb.length && highestComb.includes(iman[j])){
                one += 1
                if(one == 3){
                    list.push(iman)
                    one = 0
                }
            }
        }
    }

    let newList = []
    for(let i = 0;i<list.length;i++){
        let highestCombArray = highestComb.split('')
        let eachArray = `${list[i]}`.split('')
        let one = 0
        let tallyArray = []
        for(let j = 0;j< eachArray.length;j++){
            if(highestCombArray.includes(eachArray[j]) && !tallyArray.includes(eachArray[j])){
                tallyArray.push(eachArray[j])
                one += 1
            }
        }
        if(one == highestComb.length){
            newList.push(list[i])
        }
        else if(one < highestComb.length){
            one = 0
        }
    }
    let combWords = []
    getWordsArray =()=>{
        let each = ''
        for(let i = 0;i<newList.length;i++){
            let arraym = newList[i].split('')
            for(let j = 0;j<arraym.length;j++){
                each += word[Number(arraym[j])-1]
            }
            combWords.push(each)
            each = ''
        }
    }
    getWordsArray()
    return combWords
}

let children = []
function getChildren(word,index){
    myArray = getCombinations(word)
    for(let i = 0;i<gotten[index].length;i++){
        for(let j = 0;j < myArray.length;j++){
            if(myArray[j].includes(gotten[index][i]) && !children.includes(gotten[index][i])){
                children.push(gotten[index][i])
            }
        }
    }
}

function getAllChildren(word){
    getChildren(word,0)
    getChildren(word,1)
    getChildren(word,2)
    getChildren(word,3)
    console.log(children)
}

getAllChildren('child')