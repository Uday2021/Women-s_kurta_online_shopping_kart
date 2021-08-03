<template>
    <!-- <div class="topbar">
      <select name="fashion" id="fashion">
        <option value="fashion">Newest</option>
        <option value="byPrice">Price(low to high)</option>
        <option value="byPrice">Price(high to low)</option>
      </select>
    </div> -->
    <div class="main">
      <div v-for="(product,index) in products" :key="index">
        <div class=mainData @mouseover="detail(index)" @mouseout="hide(index)">
          <div class="img">
            <img :src="product.Image" alt="image" />
            <span v-if="merchant" :id="index" style="position: absolute; width:300px;background-color:#666;display:none;text-decoration:none;color:#000" @click="showDetails(product)">Details</span>
          </div>
          <p class="kurtaName">{{ product.Name }} {{index}}</p>
          <p class="kurtaPrice">{{ product.Price }}</p>
        </div>
      </div>
    </div>
</template>

<script>
import EventBus from '../eventBus'
import axios from "axios";
export default {
  name: "mainContent",
  data() {
    return {
      products: [],
      show: false,
      updatedData: {},
      // updateCategory: "",
      roles: "",
      merchant: true,
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);

    this.roles = JSON.parse(localStorage.userinfo);
      console.log("hello",this.roles.role);
     if (this.roles.role === "merchant") {
      this.merchant = false;
    }

    
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > document.body.offsetHeight) {
        // console.log(document.body.offsetHeight)
        // alert("hello rimjhim");
      }
    },

    detail(index){
      console.log(index)
      // console.log(index)
      document.getElementById(index).style.display = 'block'
    },
    hide(index){
      console.log(index)

      // console.log(index)
      document.getElementById(index).style.display = 'none'
    },
    showDetails(product){
      console.log(product);
      window.currentProduct = product;
      this.$router.push({path: 'details', query: {product:`${product._id}`}});
    },
    updateData(result){
       this.updatedData = result;
       console.log(this.updatedData);
    },
    updateCategory(category_result){
      // alert(category_result);

       axios
      .get(
        `http://localhost:4000/product?Category=${category_result}`
      )
      .then((res) => {
        this.products = res.data;
        console.log(JSON.stringify(res.data));
    }
      )}
  },

  mounted(){
      axios
      .get(
        `http://localhost:4000/product`
      )
      .then((res) => {
        this.products = res.data;
        console.log(JSON.stringify(res.data));
        localStorage.setItem('productInfo', JSON.stringify(res.data));
      });

       
      EventBus.$on('DATA_CHANGE', (result) => {
      this.updateData(result)
      this.products = result;


    })

      EventBus.$on("CATEGORY_CHANGE", (category_result) =>{
       this.updateCategory(category_result);

      })

  }

};
</script>

<style scoped>

/* .test{
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */

/* .topbar {
  width: 68%;
  height: 40px;
  border: 1px solid #6543FFFF;
  border-radius: 4px;
  margin-bottom: 1%;
  margin-top: 2%;
  text-align: right;
} */
select {
  height: 35px;
  border: none;
}

.mainData {
  /* height:80vh; */
  /* width: 24%; */
  /* margin: 5% 30%; */
  border: 1px solid lightgray;
}

.mainData .img {
  /* height: 75vh; */
  border: 1px solid lightgray;
}

.main {
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* margin-left: 20%; */
  margin-top: 2%;
}
</style>
