<template>
  <div>
    <Header />

    <div class="main">
      <div class="image">
        <img :src="product.Image" alt="image" />
      </div>
      <div class="content">
        <h4>{{ product.Name }}</h4>
        <span> special price: </span>
        <span>{{ product.Selling_price }}</span>
        <span style="text-decoration:line-through">{{ product.Price }}</span>
        <h4>{{ product.Discount }}% off</h4>
        <h5>Payment Status: <span id="success">Successfull</span></h5>
        <br />
        <!-- <option value="">{{product.size[5]}}</option> -->

        <button id="btn" >Return Item</button>
        <button id="btn" @click="trackFunc()" >Track Item</button>
      </div>

      <div v-if="track" class="trackItem">
          <img
              src="../assets/close.jpg"
              alt="close"
              class="close"
              id="close"
              @click="close"
            />
          <div class="items">
           <h5>User Id: {{detail[0].userId}}</h5>
           <h5>Order Id: {{detail[0].orderId}}</h5>
           <h5>Order Status: {{detail[0].orderDetail.orderStatus}}</h5>
           <h5>Product Name: {{product.Name}}</h5>
           <h5>Product Size: {{detail[0].orderDetail.productSize}}</h5>
           <h5>Payment Status: {{detail[0].paytmentDetail.paymentStatus}}</h5>
           <h5>TransactionId: {{detail[0].paytmentDetail.transactionId}}</h5>
           </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "myOrder",
  data(){
      return{
         product: {},
         detail: {},
         track: false
      }
  },
  components: {
    Header,
  },

   methods:{
       trackFunc(){
           this.track = true;
       },
       close(){
           this.track = false;
       }
  },

  created(){
      this.product = JSON.parse(localStorage.orderedinfo);
      this.detail = JSON.parse(localStorage.detail);
  },
 
};
</script>

<style scoped>
.image{
    /* width: 30%; */
    height: auto;

}

.content{
    width: 50%;
    height: auto;
    margin: 10px;
    text-align: left;
}

.trackItem{
    height: 50vh;
    width: 30vw;
    background: #ddd;
    margin-right: 50px;
    margin-top: 20px;
    border-radius: 4px;
    text-align: left;
    position: absolute;
    right: 0;
}

.items{
    height: 40vh;
    width: 25vw;
    background: #fff;
    position: absolute;
    top: 10%;
    left: 5%;

    
}


.main{
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: space-around;
    /* align-items: center; */
}

span{
    margin: 10px;
}

#success{
    color: green;
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
    cursor: pointer;
    /* z-index: -1; */
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

.close {
  height: 30px;
  width: 30px;
  position: absolute;
  top: -15px;
  right: -15px;
  border-radius: 50%;
  box-shadow: 6px 6px 29px -4px rgba(0, 0, 0, 0.75);
  cursor: pointer;
}

</style>
