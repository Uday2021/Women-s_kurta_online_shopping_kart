<template>
  <div>
    <h3>Success! Your Order is on the way</h3>
    <button id="btn" @click="orders">Back </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
       products:"",
    };
  },
  methods: {
      orders(){
         this.products = localStorage.product;
         localStorage.setItem("orderedinfo",this.products);

         const myOrder = [{
           userId: "23456",
           orderId:"es23456",
           paytmentDetail:{
             transactionId:"tr12345",
             paymentStatus:"successfull",
           },
           orderDetail:{
             orderStatus:"out of delivery",
             productSize:"16",
           }
         }]
         localStorage.setItem('detail',JSON.stringify(myOrder));

         this.$router.push('/');

      }
  }
};
</script>

<style scoped>
#btn{
    width: 100px;
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    translate: (-50%,-50%);
    margin-top: 10%;
    border-radius: 5px;
    border: 1px solid #ddd;
    cursor: pointer;
    /* z-index: -1; */
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,108,1) 0%, rgba(4,189,178,1) 60%, rgba(0,212,255,1) 100%);
}

</style>