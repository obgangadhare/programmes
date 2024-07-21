let string = "Omkar g"
let revstring = "";
console.log(string.length)
for(var i=string.length-1; i>=0;i--){
    revstring += string[i];
}
console.log(revstring);
