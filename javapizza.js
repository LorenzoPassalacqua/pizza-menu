var runningTotal = 0;


function getReceipit(){
    runningTotal = 0;
    var selectsize;
    var text1 = "<h3>Your order</h3>";
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked == true) {
            selectsize = sizeArray[i].value;
            text1 = text1 + selectsize + "<br>";
        }
    }
    if (selectsize === "small pizza"){
        sizeTotal = 6;
    }
    else if (selectsize === "personal pizza"){
        sizeTotal = 8;
    }
    else if (selectsize === "medium pizza"){
        sizeTotal = 10;
    }
    else if (selectsize === "large pizza"){
        sizeTotal = 14;
    }
    else if (selectsize === "extra large"){
        sizeTotal = 16;
    }
    runningTotal += sizeTotal;
    console.log (selectsize + "= $" + sizeTotal +".00" );
    console.log ("size text1: " + text1);
    console.log ("subtotal: $" + runningTotal +".00");
   var t = getTopping (); console.log(t)
   var v = getVeg ();   console.log(v)
   document.getElementById("showText").innerHTML = text1 + t + v + "<h3> Total $" + runningTotal + ".00</h3>"
}; 

function getTopping(){
    var text2 = "";
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++){ 
        if (toppingArray[j].checked){
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value +")");
            text2 += toppingArray[j].value + "<br>"
        }
    }

    var toppingCount = selectedTopping.length; 
    console.log(toppingCount)
    if (toppingCount > 1){
        toppingTotal = (toppingCount -1);
    }
    else {
        toppingTotal = toppingCount;
    }
    runningTotal += toppingTotal;
    console.log ("total selected topping item: " + toppingCount);
    console.log (toppingCount + " topping -1 free topping= " + "$" + toppingTotal + ".00");
    console.log ("purchase total: " + "$" + runningTotal + ".00");
    return text2;
}

function getVeg (){
    var text3 = "";
    var vegTotal = 0;
    var selectedVeg = [];
    var vegArray = document.getElementsByClassName("veg");
    for (var n = 0; n < vegArray.length; n++){
        if (vegArray[n].checked){
            selectedVeg.push(vegArray[n].value);
            console.log ("selected veggi item: (" + vegArray[n].value +")");
            text3 += vegArray[n].value + "<br>"
        }
    }

    var vegCount = selectedVeg.length;
    if (vegCount > 1){
        vegTotal = (vegCount -1);
    }
    else {
        vegTotal = vegCount;
    }
    runningTotal += vegTotal;
    console.log ("total selected veggies item: " + vegCount);
    console.log (vegCount + " veggie -1 free veggi= " + "$" + vegTotal + ".00");
    console.log ("purchase total: " + "$" + runningTotal + ".00");
    return text3;
}

