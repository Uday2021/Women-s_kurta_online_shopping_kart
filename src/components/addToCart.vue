<template>
  <div>
    <Headers />
    <div v-if="merchant" class="main">
      <div class="image">
        <img :src="product.Image" />
      </div>
      <div class="content">
        <h4>{{ product.Name }}</h4>
        <span v-if="item"> special Price: </span>
        <span>{{ product.Selling_price }}</span>
        <span style="text-decoration:line-through">{{ product.Price }}</span>
        <h4 v-if="item">{{ product.Discount }}% off</h4>
        <br />
        <!-- <option value="">{{product.size[5]}}</option> -->

        <button v-if="item" id="btn" @click="redirect">Buy Now</button>
        <button v-if="item" id="btn" @click="removeItem">
          Remove From Cart
        </button>

        <h5 v-if="item">Count: {{ count }}</h5>
      </div>
    </div>
    <footer>
      <p>@Copyright</p>
      <p>Customer Care No 8800698168, customercare@clothing.com</p>
    </footer>
  </div>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";
import Headers from "./Header.vue";
export default {
  name: "Details",
  components: {
    Headers,
  },
  data() {
    return {
      product: {},
      count: "",
      stripe: null,
      item: true,
      merchant: true,
    };
  },

  methods: {
    removeItem() {
      localStorage.product = "";
      // this.item = false;
      localStorage.item = false;
      this.item = JSON.parse(localStorage.item);

      console.log(this.item);
      // window.location.reload();
    },
    redirect() {
      this.stripe.redirectToCheckout({
        successUrl: "http://localhost:8080/success",
        cancelUrl: "http://localhost:8080/addcart",
        lineItems: [
          {
            price: "price_1JHRMKSEbQRDxWerE7xbTLyx",
            quantity: 1,
          },
        ],
        mode: "payment",
      });
    },
  },
  created() {
    this.product = JSON.parse(localStorage.product);
    this.count = localStorage.count;
    console.log(this.products);
  },
  async mounted() {
    this.stripe = await loadStripe(
      "pk_test_51JHO6cSEbQRDxWer6f3476gB44eczFw1AkOefeSXHQdisyARKGBAI7geCeFHoBV8GZ3DpQzbKj9nqiUPdQDl5xCg00YXNMW8Si"
    );

    this.roles = JSON.parse(localStorage.userinfo);
    console.log("hello", this.roles.role);
    if (this.roles.role === "merchant") {
      this.merchant = false;
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.image {
  /* width: 30%; */
  height: auto;
}

.content {
  width: 50%;
  height: auto;
  margin: 10px;
  text-align: left;
}

.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* align-items: center; */
}

span {
  margin: 10px;
}

footer {
  background: lightgray;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  padding-top: 10px;
}

#btn {
  display: block;
  position: relative;
  left: 0;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
  cursor: pointer;
  /* z-index: -1; */
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 121, 108, 1) 0%,
    rgba(4, 189, 178, 1) 60%,
    rgba(0, 212, 255, 1) 100%
  );
}

#btn:hover {
  background-image: linear-gradient(#000, #fff);
  color: #fff;
}

img {
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
