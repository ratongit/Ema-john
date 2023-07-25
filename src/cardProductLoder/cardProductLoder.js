import { getShoppingCart } from "../../utilities/fakedb"

const cardProductLoder= async()=>{
    const loadedProduct = await fetch('products.json')
    const products = await loadedProduct.json()
    const storeCart = getShoppingCart()
    const saveCart = []
    console.log(saveCart)
    for(const id in storeCart){
        const addedProduct = products.find(pd => pd.id=== id)
        if(addedProduct){
            const quantity = storeCart[id]
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct)
        }
    }
    return(saveCart)
}
export default cardProductLoder