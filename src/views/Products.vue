<template>
  <div class="products">
    
    <!-- Product section-->
    <section class="py-3">
        <div class="container px-4 px-lg-5">
            <div class="col-md-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="#">Home</a></li>
                      <li class="breadcrumb-item active">All Products</li>
                      
                    </ol>
                  </nav>
            </div>
             <div class="row">
            <div class="col-lg-3">
                <div class="rightsidebar">
                    <div class="sidebar__item">
                        <h4>Department</h4>
                        <ul>
                            <li><a href="#">Fresh Meat</a></li>
                            <li><a href="#">Vegetables</a></li>
                            <li><a href="#">Fruit &amp; Nut Gifts</a></li>
                            <li><a href="#">Fresh Berries</a></li>
                            <li><a href="#">Ocean Foods</a></li>
                            <li><a href="#">Butter &amp; Eggs</a></li>
                            <li><a href="#">Fastfood</a></li>
                            <li><a href="#">Fresh Onion</a></li>
                            <li><a href="#">Papayaya &amp; Crisps</a></li>
                            <li><a href="#">Oatmeal</a></li>
                        </ul>
                    </div>
                    <div class="sidebar__item mt-3">
                        <h4>Price</h4>
                        
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Under Ksh 100
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked="">
                                <label class="form-check-label" for="flexRadioDefault2">
                                    100 - 200
                                </label>
                              </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                                <label class="form-check-label" for="flexRadioDefault3">
                                    200 - 300
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked="">
                                <label class="form-check-label" for="flexRadioDefault4">
                                    300 - 400
                                </label>
                              </div>
                        
                        
                    </div>

                  
                    
                </div>
            </div>

            <div class="col-lg-9">
                <h2 class="fw-bolder mb-4">All Products</h2>
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 ">
                    
                    <ProductCard 
                    v-for="(product, index) in inventory.slice(0,9)"
                    :key="product.id"
                    :index="index"
                    :product="product"
                    :addToCart="addToCart">
                        
                    </ProductCard>

                </div>

            </div>
           
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
   name: 'Products',
   props: ['inventory', 'addToCart'],
   components: {
       ProductCard
   }
}
</script>
