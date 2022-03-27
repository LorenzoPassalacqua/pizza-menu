function getReceipit(){
    var text1 = "<h3>Your order</h3>";
    var runningtotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.lenght; i++) {
        if (sizeArray[i].checked == true) {
            var selectsize = sizeArray[i].value;
            text1 = text1 + selectsize + "<br>";
        }
    }
    if (selectsize === "Small pizza"){
        sizeTotal = 6;
    }
    else if (selectsize === "Personal pizza"){
        sizeTotal = 8;
    }
    else if (selectsize === "Medium pizza"){
        sizeTotal = 10;
    }
    else if (selectsize === "Large pizza"){
        sizeTotal = 14;
    }
    else if (selectsize === "Extra large pizza"){
        sizeTotal = 16;
    }
    runningtotal = sizeTotal;
    console.log (selectsize + "= $" + sizeTotal +".00" );
    console.log ("size text1: " + text1);
    console.log ("subtotal: $" + runningtotal +".00");
    getTopping (runningtotal, text1)
};

function getTopping(runningtotal, text1){
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++){
        if (toppingArray[j].checked){
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value +")");
            text1 = text1 + toppingArray[j].value + "<br>"
        }
    }

    var toppingCount = selectedTopping.lenght;
    if (toppingCount > 1){
        toppingTotal = (toppingCount -1);
    }
    else {
        toppingTotal = 0;
    }
    runningtotal = (runningtotal + toppingTotal);
    console.log ("total selected topping item: " + toppingCount);
    console.log (toppingCount + " topping -1 free topping= " + "$" + toppingTotal + ".00");
    console.log ("topping text1: "+ text1);
    console.log ("purchase total: " + "$" + runningtotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3> Total $" + runningtotal + ".00</h3>";
}