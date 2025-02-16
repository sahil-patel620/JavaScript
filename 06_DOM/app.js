 // function to add list
 function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("Python")
addLanguage("Typescript")
addLanguage("Java")
addLanguage('C++')

//function to add list using createTextNode (optimized than previous one)
function addOptiLanguage(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName))   //Creates a text string from the specified value.
    document.querySelector('.language').appendChild(li)
}
addOptiLanguage('golang')

//Edit 1st way
const secondLang = document.querySelector("li:nth-child(2)")
console.log(secondLang);
secondLang.innerHTML = "Mojo"
//replace 
const newli = document.createElement('li')
newli.textContent = "Mojo"
secondLang.replaceWith(newli)

//edit 2nd way 
const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = '<li>TypeScript</li>'

//remove
const lastLang = document.querySelector('li:last-child')
lastLang.remove()