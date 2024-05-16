function diamondpattern(n: number) : void{
    //First line 
    let stars = 1;
    let spaces = Math.floor(n/2);

    for (let i = 0; i <=n; i++) {
        //in every Iteration we will print a line the diamond pattern
        let s = "";
for (let j = 0; j < spaces; j++)  s+=" ";
for (let j = 0; j < stars; j++) s+="*";
console.log(s);

if(i <n/2){
    //Increase
    stars += 2;
    spaces -=1;
}else{
    //decrease
    stars -=2;
    spaces +=1;
}

}
}
diamondpattern(7);