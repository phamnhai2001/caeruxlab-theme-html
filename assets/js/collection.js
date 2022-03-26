// open filters

document.getElementById("filter_color").onclick = function () { color() };
function color() {
    document.getElementById("content_color").classList.toggle("show");
}

document.getElementById("filter_price").onclick = function () { price() };
function price() {
    document.getElementById("content_price").classList.toggle("show");
}

document.getElementById("filter_availability").onclick = function () { availability() };
function availability() {
    document.getElementById("content_availability").classList.toggle("show");
}

//   select filters

const filters = document.querySelector("#filters");

filters.addEventListener("input", filterGoods);

function filterGoods() {
    stock = [...filters.querySelectorAll("#content_availability input:checked")].map(
      (n) => n.value
    ),
    colors = [...filters.querySelectorAll("#content_color input:checked")].map(
      (n) => n.value
    ),
    priceMin = document.querySelector("#price-min").value,
    priceMax = document.querySelector("#price-max").value;

  outputGoods(
    DATA.filter(
      (n) =>
        (!stock.length || stock.includes(n.stock)) &&
        (!colors.length || colors.includes(n.color)) &&
        (!priceMin || priceMin <= n.price) &&
        (!priceMax || priceMax >= n.price)
    )
  );
}

function outputGoods(goods) {
  document.getElementById("list_collection").innerHTML = goods
    .map(
      (n) => `
      <li data-category="" data-price="">
        <a class="item_type" href="#">
          <div class="item_content">
            <div class="thumb">
              <img src="${n.image}" alt="">
            </div>
            <div class="txt_desp">
              <h3>${n.name}</h3>
              <p>${n.price}</p>
            </div>
          </div>
        </a>
      </li>
  `
    )
    .join("");
}

const DATA = [
  {
    name: "product name",
    image: "assets/images/conletc_01.jpg",
    color: "color 01",
    price: "20",
    size: "S",
    stock: "in stock"
},
{
    name: "product name",
    image: "assets/images/conletc_02.jpg",
    color: "color 02",
    price: "30",
    size: "M",
    stock: "out stock"
},
{
    name: "product name",
    image: "assets/images/conletc_03.jpg",
    color: "color 03",
    price: "90.72",
    size: "L",
    stock: "in stock"
},
{
    name: "product name",
    image: "assets/images/conletc_04.jpg",
    color: "color 04",
    price: "50.99",
    size: "S",
    stock: "out stock"
}
];

outputGoods(DATA);


// sort price
(function () {

    let field = document.querySelector('.items');
    let li = Array.from(field.children);



    function SortProduct() {
      let select = document.getElementsByClassName('selected');
      let ar = [];
      for (let i of li) {
        const last = i.lastElementChild.lastElementChild.lastElementChild.lastElementChild;
        const x = last.textContent.trim();
        const y = Number(x.substring(1));
        i.setAttribute("data-price", y);
        ar.push(i);
      }

      this.run = () => {
        addevent();
      }
      function addevent() {
        select.onchange = sortingValue;
      }
      function sortingValue() {

        if (this.value === 'Default') {
          while (field.firstChild) { field.removeChild(field.firstChild); }
          field.append(...ar);
        }
        if (this.value === 'LowToHigh') {
          SortElem(field, li, true)
        }
        if (this.value === 'HighToLow') {
          SortElem(field, li, false)
        }
      }
      function SortElem(field, li, asc) {
        let dm, sortli;
        dm = asc ? 1 : -1;
        sortli = li.sort((a, b) => {
          const ax = a.getAttribute('data-price');
          const bx = b.getAttribute('data-price');
          return ax > bx ? (1 * dm) : (-1 * dm);
        });
        while (field.firstChild) { field.removeChild(field.firstChild); }
        field.append(...sortli);
      }
    }

    new SortProduct().run();
  })();
