const myObject =
{
    js: "JavaScript",
    css: "C++",
    r: "ruby",
    py: "python"
}

for (const key in myObject) 
{
    // console.log(`${key} is key of value: ${myObject[key]}`);    
}

const programming = ["js", "rb", "c++", "py", "html"]

for (const key in programming) 
{
    // console.log(key);
    // console.log(programming[key]);
}

/*const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) 
{
    console.log(key);    
}*/