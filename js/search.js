//  Product Category Array
var category = ["cereals","fruits","vegetables","dairy","milk","seeds","nuts","spices","equipments","animal husbandry"]
    // Products of Specific Category
var cereals = ["wheat"];
var fruits = [];
var vegetables = [];
var dairy = [];
var milk = [];
var seeds = ["sesame","sunflower","flaxseeds","chia","hemp"];
var nuts = ["almonds","pistachios","walnuts","cashews","hazelnuts","peanuts"];
var spices = ["turmeric","jeera","ilaychi","coriander","garam masala","ginger","garlic","hing","chilli"];
var equipments = ["tractor","sprayer","cutters","planters","handy_equipments"];
var animal_husbandry = ["cows","buffalo","hen","goat"];
// Category of the Searched Product
var prodCategory = "";
    function searchItem(){
        item = document.getElementById("search").value;
        if(checkforCategory(item)){
            if(item == category[0]){
                window.location.href = "cereals.html";
            }
            if(item == category[1]){
                window.location.href = "fruits.html";
            }
            if(item == category[2]){
                window.location.href = "vegetables.html";
            }
            if(item == category[3]){
                window.location.href = "dairy_milk.html";
            }
            if(item == category[4]){
                window.location.href = "dairy_milk.html";
            }
            if(item == category[5]){
                window.location.href = "seeds.html";
            }
            if(item == category[6]){
                window.location.href = "nuts.html";
            }
            if(item == category[7]){
                window.location.href = "spices.html";
            }
            if(item == category[8]){
                window.location.href = "agricultral_equipment.html";
            }
            if(item == category[9]){
                window.location.href = "animal_husbandry.html";
            }
        }  
        else if(checkforProduct(item)){
            alert(prodCategory)
            var link = prodCategory+'#'+item;
            window.location.href = link;
        }
    }
    function checkforCategory(value){
        if(category.includes(value)){
            return true;
        }
    } 
    function checkforProduct(value){
        if(cereals.includes(value)){
            prodCategory = "cereals.html";
            return true;
        }
        else if(fruits.includes(value)){
            prodCategory = "fruits.html";
            return true;
        }
        else if(vegetables.includes(value)){
            prodCategory = "vegetables.html";
            return true;
        }
        else if(dairy.includes(value)){
            prodCategory = "dairy_milk.html";
            return true;
        }
        else if(milk.includes(value)){
            prodCategory = "dairy_milk.html";
            return true;
        }
        else if(seeds.includes(value)){
            prodCategory = "seeds.html";
            return true;
        }
        else if(nuts.includes(value)){
            prodCategory = "nuts.html";
            return true;
        }
        else if(spices.includes(value)){
            prodCategory = "spices.html";
            return true;
        }
        else if(equipments .includes(value)){
            prodCategory = "agricultral_equipment.html";
            return true;
        }
        else if(animal_husbandry.includes(value)){
            prodCategory = "animal_husbandry.html";
            return true;
        }
        else {
            return false;
        }
    }
    