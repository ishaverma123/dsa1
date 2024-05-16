function diamondpattern(n) {
    //First line 
    var stars = 1;
    var spaces = Math.floor(n / 2);
    for (var i = 0; i <= n; i++) {
        //in every Iteration we will print a line the diamond pattern
        var s = "";
        for (var j = 0; j < spaces; j++)
            s += " ";
        for (var j = 0; j < stars; j++)
            s += "*";
        console.log(s);
        if (i < n / 2) {
            //Increase
            stars += 2;
            spaces -= 1;
        }
        else {
            //decrease
            stars -= 2;
            spaces += 1;
        }
    }
}
diamondpattern(7);
