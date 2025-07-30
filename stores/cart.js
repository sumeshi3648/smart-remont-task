import { defineStore } from 'pinia' //func to create global state from pinia

export const useCartStore = defineStore('cart', () => { //create state and describe it's methods
    const items = ref([])

    function addToCart(product) {
        items.value.push(product)
    }

    function removeFromCart(id) {
        items.value = items.value.filter(p => p.id !== id)
    }

    function clearCart() {
        items.value = []
    }

    return { items, addToCart, removeFromCart, clearCart } //expost state and methods
})