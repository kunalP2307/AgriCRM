function addToCart(prodId){
    alert("product Added To Cart")
    localStorage.setItem("cartEmpt",1)
    if(prodId == 101){
        localStorage.setItem("cartProdId","101");
        localStorage.setItem("cartProdName","Sihore Wheat 30Kg");
        localStorage.setItem("cartProdCat","Cereals and Grains");
        localStorage.setItem("cartProdPrice","990");
        localStorage.setItem("cartProdDetails","One of the most important staple food for human");
        localStorage.setItem("cartProdImg","images/ProdImages/cereals/sihore.jpeg");
    }

    else if(prodId == 205){
        localStorage.setItem("cartProdId","205");
        localStorage.setItem("cartProdName","Mango 2Dozens");
        localStorage.setItem("cartProdCat","Trophical Fruits");
        localStorage.setItem("cartProdPrice","799");
        localStorage.setItem("cartProdDetails","Fresh,Unprocessed,Natural Ripe Mangoes");
        localStorage.setItem("cartProdImg","images/ProdImages/fruits/mango.jpeg");
        
    }
}