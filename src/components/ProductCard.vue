 <template>
                <div class="col mb-5 item">
                             <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">{{product.name}}</h5>
                                    <!-- Product reviews-->
                                    {{product.price.Ksh}}
                                    <div class="row"><div class="cell"><label>Quantity:</label></div><div class="cell">
                                        <input type="number" v-model.number="quantity"></div></div>

                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><button class="btn btn-outline-dark mt-auto" href="#" @click="addToCart(product.name, quantity)">Add to cart</button></div>
                            </div>
                        </div>
                    </div>
                    
                    </template>

<script>
export default{
    //accept product prop
    props: ['product', 'index', 'addToCart'], 
    data() {
        return{
            quantity: 0
        }
    }

}
</script>