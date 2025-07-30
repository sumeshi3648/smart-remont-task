<template>
  <div>
    <img :src="product.image" />
    <h3>{{ product.name }}</h3>
    <p> {{ product.price }} ₸</p>
    <button @click = "$emit('add-to-cart', product)">
        Добавить в корзину</button>
  </div>
</template>

<script setup>
defineProps({
    product: {
        type: Object,
        required: true
    }
})

defineEmits(["add-to-cart"])
</script>