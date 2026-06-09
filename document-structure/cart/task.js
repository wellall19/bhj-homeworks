const buttonsProductQuantityControl = Array.from(document.querySelectorAll('.product__quantity-control'));
const buttonsProductAdd = Array.from(document.querySelectorAll('.product__add'));

function funcProductQuantityControl(event) {
    const parent = event.target.closest('.product__quantity-controls');
    const productQuantityValue = parent.querySelector('.product__quantity-value');
    let value = parseInt(productQuantityValue.textContent);
    
    if (event.target.classList.contains('product__quantity-control_dec')) {
        if (value === 1) {
            return;
        }
        value--;
    } else {
        value++;
    }

    productQuantityValue.textContent = String(value);
}

function addToCart(event) {
    const cartProducts = document.querySelector('.cart__products');
    const parent = event.target.closest('.product');
    const productId = parent.dataset.id;
    const existingProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);
    
    const newCartProductCount = document.createElement('div');
    newCartProductCount.classList.add('cart__product-count');
    newCartProductCount.textContent = parent.querySelector('.product__quantity-value').textContent;
    
    if (existingProduct) {
        const newCount = existingProduct.querySelector('.cart__product-count');
        newCount.textContent = String(parseInt(newCount.textContent) + parseInt(newCartProductCount.textContent));
        return;
    }

    const newCartProduct = document.createElement('div');
    newCartProduct.classList.add('cart__product');
    newCartProduct.dataset.id = parent.dataset.id;

    const newImgCartProduct = document.createElement('img');
    newImgCartProduct.classList.add('cart__product-image');
    newImgCartProduct.src = parent.querySelector('.product__image').src;

    newCartProduct.appendChild(newImgCartProduct);
    newCartProduct.appendChild(newCartProductCount);
    cartProducts.appendChild(newCartProduct);
}

buttonsProductQuantityControl.forEach((element) => 
    element.addEventListener('click', funcProductQuantityControl))

buttonsProductAdd.forEach((element) => 
    element.addEventListener('click', addToCart));