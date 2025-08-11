
var degree = prompt("enter your degree")

if(degree==null) 
    console.log("Enter your degree")
else if (degree>100)
    console.log("wrong degree")
else if (degree>=90)
    console.log("A")
else if(degree>=80 )
    console.log("B")
else if(degree>=70 )
    console.log("C")
else 
    console.log("F")