<template>
  <div class="home">
      <!-- Header-->
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        <!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-2">
                <h3 class="text-center pb-3">Featured Items</h3>
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    
                   
                    <ProductCard 
                    v-for="(product, index) in inventory.slice(0,4)"
                    :key="product.id"
                    :index="index"
                    :product="product"
                    :addToCart="addToCart">
                        
                    </ProductCard>
                   
                </div> 
            </div>
        </section>
  </div>
</template>

<script>
// @ is an alias to /src

import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Home',
  props: ['inventory', 'addToCart'], // accept inventory, addToCart method as props from App.vue
  components: {
      //since you have imported ProductCard, you need to register it as a component
      ProductCard
  }
}
</script>
