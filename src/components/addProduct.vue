<template>
  <div class="form">
    <form>
      <div class="inputContainer">
        <label for="name">NAME: </label>
        <input type="text" placeholder="product name" v-model="name" />
      </div>
      <div class="inputContainer">
        <label for="price">PRICE: </label>
        <input
          type="number"
          placeholder="actual price"
          v-model="price"
        
        />
      </div>
      <div class="inputContainer">
        <label for="selling">SELLING_PRICE: </label>
        <input
          type="number"
          placeholder="selling price "
          v-model="selling_price"
          
        />
      </div>
      <div class="inputContainer">
        <label for="discount">DISCOUNT: </label>
        <input
          type="number"
          placeholder="discount in %"
          v-model="discount"
        
        />
      </div>
      <div class="inputContainer">
        <label for="description">DESCRIPTION: </label>
        <input
          type="text"
          placeholder="product description"
          v-model="description"
        
        />
      </div>
      <div class="inputContainer">
        <label for="description">SIZE: </label>
        <input type="text" placeholder="product size" v-model="size" />
      </div>
      <div class="inputContainer">
        <label for="image">IMAGE: </label>
        <input
          type="file"
          placeholder="product image"
          v-on:change="onFileChange"
          required
        />
      </div>
      <button type="submit" id="btn" @click="addProducts">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addProduct",

  data() {
    return {
      name: "",
      price: "",
      selling_price: "",
      discount: "",
      description: "",
      image: "",
      size: "",

    };
  },

  methods: {
    async addProducts() {

      let fd = new FormData()
      fd.set("Image", this.image[0]);
      fd.set("Name", this.name);
      fd.set("Price", this.price);
      fd.set("Selling_price", this.selling_price);
      fd.set("Discount", this.discount);
      fd.set("Description", this.description);
      fd.set("Size", this.size);

      console.log(fd);
      var result = await axios.post("http://localhost:4000/product", fd);
      console.warn(result.data);
    },

    onFileChange(e) {
       this.image = e.target.files || e.dataTransfer.files;
      if (!this.image.length) return;
      // this.createImage(files[0]);
      console.log(this.image[0].name);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inputContainer label {
  width: 15vw;
  height: auto;
  text-align: left;
}

.inputContainer input {
  width: 20vw;
  height: auto;
  margin-top: 20px;
}

#btn {
  margin-top: 20px;
  width: 30vw;
  height: auto;
  border: 1px solid rgb(0, 212, 255);
  background: rgb(0, 212, 255);
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
}
</style>
