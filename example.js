var count;
var list = [];

function addItem() {
    
    var listItem = document.getElementById("toDoList").value;
    if(!count){
        count = 0;
    }

    for(i = 0; i <= count; i++){
        list[count] = listItem;
    }

    document.getElementById("list").innerHTML +=
    count + ". " + listItem + "<br>"; 
    count += 1;
}

function removeItem(){

    var itemNumber;
    itemNumber = parseInt(document.getElementById("removeItem"), 
        base);
    list[itemNumber] = "";
}

function updateList(){

    document.getElementById("list").innerHTML = "";
    for(i = 0; i < count; i++){
        document.getElementById("list").innerHTML +=
        i + ". " + list[i] + "<br>";
    }
}

function clearList(){

    for(i = 0; i < count; i++){
        list[i] = "";
    }
    count = 0;
}