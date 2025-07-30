<template>
    <div>
        <h1>Каталог товаров</h1>
        <div class="grid grid-cols-1"">
            <ProductCard
                v-for = "product in products"
                :key = "product.id"
                :product="product"
                @add-to-cart = "handleAddToCart"
            />
        </div>"
    </div>
</template>


<script setup lang="ts">
import ProductCard from '../components/ProductCard.vue';
import { useCartStore } from '../stores/cart';

const cart = useCartStore()

const products = ref([
    {
        id: 1,
        name: 'Пылесос Xiaomi Roborock',
        price: 149990,
        image: 'https://via.placeholder.com/300x200?text=Product+1'
    },
    {
        id: 2,
        name: 'Мойка воздуха LG',
        price: 229990,
        image: 'https://via.placeholder.com/300x200?text=Product+2'
    },
    {
        id: 3,
        name: 'Увлажнитель воздуха',
        price: 99990,
        image: 'https://via.placeholder.com/300x200?text=Product+3'
    }
])

function handleAddToCart(product) {
    card.addToCart(product)
}
</script>