const removeDb = (id) => {

    const storedCard = localStorage.getItem('add-to-shopping-cart');

    if (storedCard) {
        const shoppingCart = JSON.parse(storedCard);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('add-to-shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

export { removeDb };