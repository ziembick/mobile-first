const createProductButton = document.querySelector("#create-product");
const dialog = document.querySelector(".create-product_dialog");
const cancelButton = document.querySelector("#cancel");

// dialog.open = true

// dialog.setAttribute('open', true)
// dialog.removeAttribute('open')

// dialog.showModal()
// dialog.close()

// setTimeout (() => dialog.close(), 3000)

// function openModal () {
//     dialog.showModal()
// }

const openModal = () => dialog.showModal();
// const closeModal = () => dialog.close()

createProductButton.addEventListener("click", openModal);

// cancelButton.addEventListener('click', () => {
//     dialog.close()
// })

cancelButton.addEventListener("click", () => dialog.close());
const inputs = document.querySelectorAll("input");

const saveButton = document.querySelector("#save");

function getInputValues() {
  const inputName = inputs[0].value;
  const inputPrice = inputs[1].value;
  const inputImage = inputs[2].value;
  const inputImageDescription = inputs[3].value;
  const productDescription = document.querySelector("#description").value;

  return {
    inputName,
    productDescription,
    inputPrice,
    inputImage,
    inputImageDescription,
  };
}

function createProductCard(
  name,
  productDescription,
  price,
  imgSrc,
  imgDescription
) {
  const productCard = document.createElement("article");
  productCard.classList.add("product-card");
  const productList = document.querySelector(".product-list");

  productCard.innerHTML = `<img
  src="${imgSrc}"
  alt="${imgDescription}"
  class="product-list__image"
  />
  <hr />
  <h3 class="product-card__price">${price}</h3>
  <h4 class="product-card__title">
  ${name}
  </h4>
  <p class="product-card__description">
  ${productDescription}
  </p>`;

  productList.appendChild(productCard);
}

function handleClickSave() {
  const productValues = getInputValues();
  console.log("productValues", productValues.inputName);
  createProductCard(
    productValues.inputName,
    productValues.productDescription,
    productValues.inputPrice,
    productValues.inputImage,
    productValues.inputImageDescription
  );
  const form = document.querySelector("form");
  form.reset();
}

saveButton.addEventListener("click", handleClickSave);

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    // const item = json[0]
    json.forEach((item) => {
      createProductCard(
        item.title,
        item.description,
        item.price,
        item.image,
        item.title
      );
    });
  });

  
// const array = ['a', 'b', 'c']

// const [primeiroItem, segundoItem, terceiroItem] = array

// console.log(primeitoItem)

// const h2 = document.createElement('h2')
// productCard.appendChild(h2)
// h2.textContent = 'Jogo de Ferramentas kit 129 Peças c/ Maleta + 40 peças'
// const productList = document.querySelector('.product-list')
// productList.appendChild(productCard)
// console.log(productCard)

//segunda forma para fazer com que a ordem que eu colocar na handleClickSave não influencia

// function createProductCard({name, productDescription,price,imgSrc,imgDescription}) {
//   const productCard = document.createElement("article");
//   productCard.classList.add("product-card");
//   const productList = document.querySelector(".product-list");

//   productCard.innerHTML = `<img
//   src="${imgSrc}"
//   alt="${imgDescription}"
//   class="product-list__image"
//   />
//   <hr />
//   <h3 class="product-card__price">${price}</h3>
//   <h4 class="product-card__title">
//   ${name}
//   </h4>
//   <p class="product-card__description">
//   ${productDescription}
//   </p>`;

//   productList.appendChild(productCard);
// }

// function handleClickSave() {
//   const productValues = getInputValues();
//   console.log("productValues", productValues.inputName);
//   createProductCard(
//     {
//     name: productValues.inputName,
//     productDescription: productValues.productDescription,
//     price: productValues.inputPrice,
//     imgSrc: productValues.inputImage,
//     imgDescription: productValues.inputImageDescription
//   }
//   )
// }
