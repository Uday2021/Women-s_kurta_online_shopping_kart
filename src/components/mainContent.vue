<template>
  <div>
    <div class="topbar">
      <select name="fashion" id="fashion">
        <option value="fashion">Newest</option>
        <option value="byPrice">Price(low to high)</option>
        <option value="byPrice">Price(high to low)</option>
      </select>
    </div>
    <div class="main">
      <div v-for="(product,index) in products" :key="index">
        <div class=mainData @mouseover="detail(index)" @mouseout="hide(index)">
          <div class="img">
            <img :src="product.image" alt="image" />
            <span :id="index" style="position: absolute; width:300px;background-color:#666;display:none;text-decoration:none;color:#000" @click="showDetails(product)">Details</span>
          </div>
          <p class="kurtaName">{{ product.name }} {{index}}</p>
          <p class="kurtaPrice">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "mainContent",
  data() {
    return {
      products: [],
      show: false
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);

    
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
      // console.log(index)
      document.getElementById(index).style.display = 'block'
    },
    hide(index){
      // console.log(index)
      document.getElementById(index).style.display = 'none'
    },
    showDetails(product){
      console.log(product);
      window.currentProduct = product;
      this.$router.push({path: 'details', query: {product:`${product.id_product}`}});
    }
  },

  mounted(){
      axios
      .get(
        "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter="
      )
      .then((res) => {
        this.products = res.data.result.products;
      });
  }

};
</script>

<style scoped>

.topbar {
  width: 70%;
  height: 40px;
  border: 1px solid lightgray;
  margin-left: 25%;
  margin-top: -47%;
  text-align: right;
}
select {
  height: 35px;
  border: 1px solid lightgray;
  border-radius: 4px;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 20%;
  margin-top: 2%;
}
</style>
