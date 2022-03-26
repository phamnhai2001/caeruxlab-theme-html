const btn = document.getElementsByClassName('add_cart');
const products = [] ;

for(var i=0; i <btn.length; i++) {
    let cartBtn = btn[i];
    cartBtn.addEventListener("click", () => {
        let product = {
            name: event.target.parentElement.parentElement.children[0].children[0].innerText,
            price: event.target.parentElement.parentElement.children[0].children[1].innerText,
            totalPrice: parseInt(event.target.parentElement.parentElement.children[0].children[1].innerText),
            quantity: 1
        }
        addItemToLacal(product);
    })
}
function addItemToLacal(product) {
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'));
    if(cartItem === null) {
        products.push(product);
        localStorage.setItem('prdInCart', JSON.stringify(products));
        console.log(cartItem);
    
    }else {
        cartItem.forEach(item => {
            if(product.name == item.name) {
                product.quantity = item.quantity += 1;
                product.totalPrice = item.totalPrice += product.totalPrice;

            }else {
                products.push(item);
            }
        });
        products.push(product);
    }
    localStorage.setItem('prdInCart', JSON.stringify(products));
    window.location.reload();
}

function disCartItem() {
    html = '';
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'));
    cartItem.forEach(item => {
        html += `<li>
        <div class="item_cart">
            <div class="data_cart">
                <div class="item_thumb">
                    <img src="assets/images/img.jpg" alt="">
                </div>
                <div class="data">
                    <a href="">
                        <h3>${item.name}</h3>
                    </a>
                </div>
            </div>
            <div class="entry_points">
               <div class="box_check">
                    <div class="btn_quantity">
                        <button class="minus_btn">
                            <span>-</span>
                        </button>
                        <input type="number" id="quantity" value="${item.quantity}">
                        <button class="plus_btn">
                            <span>+</span>
                        </button>
                    </div>
                    <div class="btn_del">
                        <i class="far fa-trash-alt"></i>
                    </div>
               </div>
               <div class="point">
                   <h3>${item.price}</h3>
               </div>
            </div>
        </div>
    </li>`
    });
    document.querySelector('.list_cart_item').innerHTML = html;

}
disCartItem();

function cartNumberDisplay() {
    let cartNumbers = 0;
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'));

    cartItem.forEach(item => {
        cartNumbers = item.quantity += cartNumbers;
    });
    document.querySelector('.header_cart .number').innerText = cartNumbers;
}
cartNumberDisplay();

const removeItem = document.getElementsByClassName('btn_del');
for(var i=0; i <removeItem.length; i++) {
    let removeBtn = removeItem[i];
    removeBtn.addEventListener('click', () =>{
        let cartItem = JSON.parse(localStorage.getItem('prdInCart'));
        cartItem.forEach(item => {
            if(item.name != event.target.parentElement.parentElement.parentElement.parentElement.children[0].children[1].innerText){
                products.push(item);
            }
        });
        localStorage.setItem('prdInCart', JSON.stringify(products));
        window.location.reload();
    });
}
function subTotal() {
    let subTotal = 0;
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'));
    cartItem.forEach(item => {
        subTotal = item.totalPrice += subTotal;
    });
    document.querySelector('.total_price').innerText = subTotal;
}
subTotal();


const open = document.getElementById('cart_view');
const cart_notify = document.getElementById('cart');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    cart_notify.classList.add('animate','active');
});

close.addEventListener('click', () => {
    cart_notify.classList.remove('active');
})