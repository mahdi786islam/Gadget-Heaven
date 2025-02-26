const getCartGadgets = () => {
    const cartListStr = localStorage.getItem("cart-list")
    if(cartListStr){
        const cartList = JSON.parse(cartListStr)
        return cartList
    }
    else{
        return []
    }
}

const addToCart = (id) => {
    const cartList = getCartGadgets()
    if(cartList.includes(id)){
        console.log(id, "Already exists in the list")
    }
    else {
        cartList.push(id)
        const cartListStr = JSON.stringify(cartList)
        localStorage.setItem("cart-list", cartListStr)
    }
}

const getWishlist = () => {
    const wishListStr = localStorage.getItem("wish-list")
    if(wishListStr){
        const wishList = JSON.parse(wishListStr)
        return wishList
    }
    else{
        return []
    }
}
const addToWishList = (id) => {
    const wishList = getWishlist()
    if(wishList.includes(id)){
        console.log(id, "already exists in the wishlist")
    }
    else{
        wishList.push(id)
        const wishListStr = JSON.stringify(wishList)
        localStorage.setItem("wish-list",wishListStr)
    }
}

export {addToCart , addToWishList, getCartGadgets, getWishlist }