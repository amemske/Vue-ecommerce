<template>
  
  <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <router-link class="navbar-brand" to="/">Heri Supermarket</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><router-link class="nav-link active" aria-current="page" to="/">Home</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/products">Products</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/past-orders">Past Orders</router-link></li>
                        
                    </ul>
                    <div class="d-flex">
                        <button @click="toggleSidebar" class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{{totalQuantity}}</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
  <router-view :inventory = "inventory" :addToCart = "addToCart"/> <!-- passing props that will be used by children components-->

  <!-- sidebar-->
  <Sidebar 
        :toggle="toggleSidebar" 
        :cart="cart" 
        :inventory="inventory" 
        v-if="showSidebar" 
        :remove="removeItem"
  />
  
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import shopping from '@/shopping.json'

export default {
  components:{
    Sidebar
  },
   data() {
    return {
      showSidebar: false,
      inventory: shopping,
      cart: {},
    };
  },
   methods: {
    addToCart(productInCart,  quantity) {
      // receive type and number
      if (!this.cart[productInCart]) this.cart[productInCart] = 0;
      this.cart[productInCart] += quantity; //  current inventory + previouscart item = current cart
    
    },
    removeItem(name) {
      delete this.cart[name];
      console.log('delete function');
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
  computed: {
    totalQuantity() {
      //the values in cart is quantity
      return Object.values(this.cart).reduce((accTotal, currentItem) => {
        return accTotal + currentItem;
      }, 0);
    },
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
