


/* function looping(start , end  , breaknum , contineunum) {
    if(start==null || end==null || breaknum==undefined || contineunum==undefined)
        alert("please enter all numbers")
    else
       for(var i = start ; i <= end ; i++){
         if(i==breaknum)
            break
        else if(i==contineunum)
            continue
        else console.log(i)
       }
}
looping(5,15,14,11) */

var cources = ["html","css","java","javascript"]
cources.forEach((element)=>{
    console.log(element)
})
var courcesToDelete =prompt("enter the course you want to delete")
var consoleToDeleteIndex = cources.findIndex(element => element==courcesToDelete)





