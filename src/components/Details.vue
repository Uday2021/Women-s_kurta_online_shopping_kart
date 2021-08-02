<template>
<div>
    <Headers 
    :product = "product"/>
    <div class="main">
        <div class="image">
         <img :src="product.Image" alt="image" />
         </div>
         <div class="content">
         <h4>{{product.Name}}</h4>
         <span> special price: </span>
         <span>{{product.Selling_price}}</span>
         <span style= "text-decoration:line-through">{{product.Price}}</span>
         <h4>{{product.discount}}% off</h4><br>
          <h6>Description: <span>{{product.Description}}</span></h6>
        Available size:<select name="size" id="size">
            <option value="" v-for="size in product.Size.split(',')" :key="size">{{size.replace(/[\[\]']+/g,'')}}</option>
            <!-- <option value="">{{product.size[5]}}</option> -->
            

        </select>

             <button id="btn">Buy Now</button>
             <button id="btn" @click="addToCart">Add To Cart</button>
             <div v-if="added" class="itemAdded">
                 Item added successfully
             </div>
            
         </div>
    </div>
    <footer>
        <p> @Copyright </p>
        <p> Customer Care No 8800698168, customercare@clothing.com </p>
    </footer>
</div>
</template>

<script>
import Headers from "./Header.vue"
    export default {
        name: 'Details',
        components:{
           Headers,
        },
        data(){
            return {
                product:{},
                added: false,
                count: 0,
                item: true
            }
        },

        methods:{
            addToCart(){
                if(localStorage.loginUser){
                console.log(this.product)
                localStorage.setItem('product', JSON.stringify(this.product));
                this.added = true;
                this.count++;
                localStorage.setItem('count', this.count);
                localStorage.setItem('item', this.item);

                }
                else{
                    alert("First you need to login")
                    this.$router.push('/');
                }
            }
        },
        created(){
            console.log("created", this.$route)
        },
        mounted(){
            this.product = window.currentProduct;
            console.log("mounted", this.$route)
        }
        
    }
</script>

<style scoped>
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.image{
    width: 30%;
    height: auto;

}

.content{
    width: 50%;
    height: auto;
    margin: 10px;
    text-align: left;
}

.main{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* align-items: center; */
}

span{
    margin: 10px;
}

footer{
    background: lightgray;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    padding-top: 10px;

}

#btn{
    display: block;
    position: relative;
    left: 0;
    margin-top: 20px;
    border-radius: 5px;
    border: 1px solid #ddd;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,108,1) 0%, rgba(4,189,178,1) 60%, rgba(0,212,255,1) 100%);
}

#btn:hover{
    background-image: linear-gradient(#000,#fff);
    color: #fff;
}

img{
    border: 1px solid black;
    border-radius: 5px;
    margin-top: 10px;
}

</style>