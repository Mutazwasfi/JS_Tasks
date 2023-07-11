let string = "";
let count = 1;

for(let i=0;i<4;i++) {

    for(let r=0;r<=i;r++) {
        string += count;
        count++;
    }
    string += "\n";
}
console.log(string);
