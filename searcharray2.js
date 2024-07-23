let arr = ["a", "b", "c", "d"];
let tofind = "a";
let found=false;

for (let x = 0; x < arr.length; x++) {
if( tofind === arr[x]){
found=true
}
  }
      if(found){
   console.log(tofind,"is  present")
   }else{
    console.log(tofind,"is not  present")
   }
