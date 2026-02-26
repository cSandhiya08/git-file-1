// pattern 
let n=5
let triangle=""
for(i=1;i<=n;i++){
    for(j=1;j<=i;j++){
       triangle +="*"
    }
    triangle +="\n"
}
console.log(triangle)

//Fetch API
fetch ("https://dummyjson.com/products")
.then(res=>res.json())
.then(data=>{
    let filter= data.products.filter(p=>p.rating > 4.7)
    console.log(filter)
})

//map
const Number=[1,2,3,4,5,6,7,8,9,10]
let mapnum= Number.map(p=>p*2)
console.log(mapnum)

//filter
let filternum=Number.filter(p=>p%2===0)
console.log(filternum)

//reduce
let nreduce=Number.reduce((acc,cur)=>acc+cur,0)
console.log(nreduce)

//sort
const fruit=["Apple","Orange","Banana","Graphs"]
let Sfruits=fruit.sort()
console.log(Sfruits)

//find
let findnum=Number.find(p=>p%2===0)
console.log(findnum)

//set
const arr1=[2,4,4,6,8,3,7,4,7]
const nset=new Set(arr1)
console.log(nset)

//for each
const arr=[2,4,6,8,4,7]
const newarr=[]
const foreach=arr.forEach((val)=>{
    newarr.push(val)
})
console.log(newarr)

//forof
const values=["aaa","bbb","ccc"]
for(let value of values){
    console.log(value)
} 

//for in
const person={
    name:"San", 
    age:25,
    city:"Chennai"
}
for(let key in person){
    console.log(key,person[key])
}   

//Object 
const User={
    Name :"San",
    Id :"01",
    Dept:"CS",
    City :"Chennai"
}
console.log(Object.keys(User))
console.log(Object.values(User))
console.log(Object.entries(User))

//functions
function click(){
    console.log("Click")
}
click()

//arrow functions
const arrow=[2,3,4]
const a=arrow.map(p=>p*2)
console.log(a)








