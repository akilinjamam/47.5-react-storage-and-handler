
// use local storage to manage cart data

const addToDb = (id) => {

    let shoppingCart;
    const storeCart = localStorage.getItem('add-to-shopping-cart');

    if (storeCart) {

        shoppingCart = JSON.parse(storeCart);
    } else {

        shoppingCart = {};
    }

    const quantity = shoppingCart[id]
    if (quantity) {

        const newCount = (quantity) + 1;
        shoppingCart[id] = newCount
        // localStorage.setItem(id, newCount)

    } else {
        shoppingCart[id] = 1
    }

    localStorage.setItem('add-to-shopping-cart', JSON.stringify(shoppingCart));
}




export { addToDb }