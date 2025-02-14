// forEach higher order array loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// 1t way
coding.forEach( function (val){
    console.log(val);
} )

// 2nd way
coding.forEach( (item) => {
    console.log(item);
} )

// 3rd way
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

// for each have item, index and whole array 
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

// forEach on Array of Objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )