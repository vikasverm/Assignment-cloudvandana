
var str="This is a sunny day";
function wordsReverser(string){
return string.split("").reverse().join("").split(" ").reverse().join(" ")  
}

console.log(wordsReverser(str));
