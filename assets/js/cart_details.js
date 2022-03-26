const btn = document.querySelectorAll("#cart_view");
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        var btnItem = event.target;
        var product = btnItem.parentElement.parentElement.parentElement;
        var productImg = product.querySelector("img").src;
        var productName = product.querySelector("H1").innerText;
        var productPrice = product.querySelector(".price").innerText;

        addcart(productPrice,productName,productImg);
    }})
   
})
function addcart(productPrice,productName,productImg){
    var addli = document.createElement("li");
    var cartItem = document.querySelectorAll(".list_cart_item li");
    for(var i=0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll("h2");
        if(productT[i].innerHTML==productName) {
            alert("san pham da ton tai");
            return;
        }
    }
    var liContent = `<div class="item_cart">
    <div class="data_cart">
        <div class="item_thumb">
            <img src="`+productImg+`" alt="">
        </div>
        <div class="data">
            <a href="">
                <h2>`+productName+`</h2>
            </a>
        </div>
    </div>
    <div class="entry_points">
       <div class="box_check">
            <div class="btn_quantity">
                <button class="minus_btn">
                    <span>-</span>
                </button>
                <input type="number" id="quantity" value="1">
                <button class="plus_btn">
                    <span>+</span>
                </button>
            </div>
            <div class="btn_del">
                <i class="far fa-trash-alt"></i>
            </div>
       </div>
       <div class="point">
           <h3>`+productPrice+`</h3>
       </div>
    </div>
</div>`;
addli.innerHTML = liContent;
    var cart = document.querySelector(".list_cart_item");
    cart.append(addli);
    carttotal();
    deleteCart();
}

function carttotal() {
    var cartItem = document.querySelectorAll(".list_cart_item li");
    var totalC = 0;
    for(var i=0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value;
        var productPrice = cartItem[i].querySelector("h3").innerText;
        
        totalA = inputValue*productPrice*1000;
        totalC = totalC + totalA;
    }

    var cartTotalA = document.querySelector(".total_price");
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE');
    inputchange();
}

function deleteCart() {
    var cartItem = document.querySelectorAll(".list_cart_item li");
    for(var i=0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".btn_del");
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target;
            var cartItemR = cartDelete.parentElement.parentElement.parentElement.parentElement;
            cartItemR.remove();
            carttotal();
        })
    }
}
function inputchange() {
    var cartItem = document.querySelectorAll(".list_cart_item li");
    for(var i=0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change",function(){
            
            carttotal();
        })
    }
}

//add cart
