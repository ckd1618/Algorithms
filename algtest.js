function newStr(words) {
    var arr = [];
    var currentWord = "";
    for (let i = 0; i <= words.length; i++) {
        console.log(words[i])
        if (words[i] === "," || i === words.length) {
            console.log(currentWord);
            arr.push(currentWord);
            currentWord = ""
            continue;
        }

        currentWord = currentWord + words[i];
    }
    console.log(arr);
    newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length != 4) {
            newarr.push(arr[i].toUpperCase())
        }
    }
    arrObj = {};
    for (let i = 0; i < newarr.length; i++) {
        arrObj[newarr[i]] = true;
    }
    arr3 = Object.keys(arrObj);
    return arr3;
}

var x = "hi,my,name,is,dach,and,i,am,fat";
console.log(newStr(x));