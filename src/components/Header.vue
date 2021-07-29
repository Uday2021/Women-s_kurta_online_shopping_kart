<template>
<div>
  <header>
    <div v-if="user" class="profile">
      <ul>
        <li>
        
          <a href="" > <i class="fa fa-linux"></i> Welcome {{loginUser.replace(/[\"\"]+/g,'')}}</a>
          <a href=""> <i class="fa fa-snapchat-square"></i> Subscription</a> 
          <a href="" @click="myOrder"> <i class="fa fa-arrow-right"></i> My Order </a> 
          <a v-if="merchant" href=""> <i class="fa fa-arrow-right"></i> Add Product </a> 
          <a v-if="userLog" href="" @click="logout"> <i class="fa fa-arrow-right"></i> Logout</a> 
          
        </li>
        
      </ul>
    </div>
        
        <!-- Navbar Logo -->
        <div class="logo">
          <!-- Logo Placeholder for Inlustration -->
          <!-- <img width="80" src="https://wforwomanonline.com/images/logo.png" alt="image"
          /> -->
          <img src="../assets/login.png" alt="user" class="user" @click="userProfile" style="margin-left: 20px; margin-top: 10px;" />

          <span v-if="!user" style="font-weight: bold;position:absolute;top:5%; left:7%; color: #fff; font-size: 18px" >{{loginUser.replace(/[\"\"]+/g,'')}}</span>

        </div>

        
          <input type="text" id="text" placeholder="search for products, brand and more">
          <i class="fa fa-search" style="color: #6543FFFF; z-index: 10; position: absolute; left: 60%; cursor: pointer;"></i>

         <div class="navbar">
        <button id="btn" @click="popUp">Login</button>
        <router-link to="/">Home</router-link>
        <i class="fa fa-shopping-cart" @click="addCart"></i>
        <p style="position: absolute;left:94%; color: #fff;">{{count}}</p>

        
    </div>
    <div v-if="login" style="top:20%;left:30%;width:500px;height:300px; position:absolute;z-index=1;"><login />
    <img
              src="../assets/close.jpg"
              alt="close"
              class="close"
              id="close"
              @click="close"
            />
    </div>
     
  </header>
  <section class="filter">
     <ul>
       <li>
          <select class="grid-item">
      <option value="category">Category</option>
      <option value="category">Kurtas</option>
      <option value="category">Sets & Dresses</option>
         </select>
          <select class="grid-item">
      <option value="category">Price</option>
      <option value="category">Rs.0 to Rs.2000</option>
      <option value="category">Rs.2000 to Rs.4000</option>
         </select>
          <select class="grid-item">
      <option value="category">Size</option>
      <option value="category">6</option>
      <option value="category">8</option>
      <option value="category">10</option>
      <option value="category">12</option>
      <option value="category">14</option>
      <option value="category">16</option>
      <option value="category">18</option>
         </select>
        <select class="grid-item">
      <option value="category">NeckType</option>
      <option value="category">Round Neck</option>
      <option value="category">Boat Neck</option>
        </select>
        <select class="grid-item">
      <option value="category">Length</option>
      <option value="category">Knee Length</option>
      <option value="category">Ankle Length</option>
        </select>
        <select class="grid-item">
      <option value="category">Pattern</option>
      <option value="category">Solid</option>
      <option value="category">Floral</option>
      <option value="category">Printed</option>
      <option value="category">Striped</option>
        </select>  
         
       </li>
     </ul>
  </section>
</div>
</template>
<script>
import login from './login.vue'
export default {
  name: "Headers",
  components:{
     login,
  },
  data(){
    return{
      login: false,
      loginUser: "",
      user: false,
      count: "",
      roles: "",
      userLog: false,
      merchant: false,
    }
  },
  created(){
if (localStorage.loginUser) {
  this.loginUser = localStorage.loginUser;
  this.userLog = true;
}
 this.count = localStorage.count;
},

 mounted(){
    this.roles = JSON.parse(localStorage.userinfo);
    console.log(this.roles.role);
    if(this.roles.role === "merchant"){
      this.merchant = true;
    }
 },
  methods:{
      popUp(){
          this.login = true
      },
      close() {
      this.login = false;
    },
     userProfile(){
       if (this.user == true) {
         this.user = false
       }else{
         this.user = true;
       }              
      },
      logout(){
        localStorage.loginUser = "";
        window.location.reload();
      },
      addCart(){
         this.$router.push({path:'/addCart'});
      },
      myOrder(){
        this.$router.push({path: '/order'});
      }
  }
};
</script>
<style scoped>
header {
  /* margin-top: -5%; */
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

body {
  /* background: rgb(250, 250, 250) url(http://lorempixel.com/1920/1080/nature/); */
  font-family: Lato, Helvetica, Arial, sans-serif;
}

header{
    width: 100%;
    height: 12vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #6543FFFF;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.534);
}

.profile{
    height: 25vh;
    width: 20vw;
    background: rgb(235,240,241);
background: linear-gradient(90deg, rgba(235,240,241,1) 5%, rgba(117,132,133,0.87718837535014) 98%);
    z-index: 2;
    top: 10%;
    left: 0%;
    border: 1px solid lightgray;
    border-radius: 4px;
    position: absolute;
  
}

.profile ul{
  list-style: none;
  text-align: left;
  
}

.profile ul li {
  display: flex;
  flex-direction: column;
  
}

.profile ul li a{
  text-decoration: none;
  color: #000;
  margin: 5px;
}

.profile ul li a:hover{
  background: oldlace;
}


.navbar{
    width: 60%;
    margin-right: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.filter{
  height: 5vh;
  width: 100%;
  background: #eee;
  margin-top: 10px;
}

.filter ul{
  list-style: none;
}

.filter ul li{
   display: flex;
   justify-content: space-around;
   align-items: center;
}

.filter ul li select{
  color: #000;
  font-weight: 600;
  font-size: 17qpx;
  border: none;
  background: none;
  text-align: center;
  cursor: pointer;
}

.filter ul li select:hover{
  color: #6543FFFF;
  /* font-weight: 600; */
  /* font-size: medium; */
}

.navbar i{
   font-size: 30px;
   cursor: pointer;
   color: #fff;
   margin-right: 50px;
}

.navbar a{
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    position: relative;
    margin-right: 40px;

}

.navbar a::before{
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    top: 100%;
    left: 0;
    background: #000;
}

.navbar a:hover::before{
    width: 100%;
    transition: all 0.4s linear;
     
}

#btn{
  background: #fff;
  height: 40px;
  width: 120px;
  color: #6543FFFF;
  border-radius: 2px;
  border: 1px solid #6543FFFF;
  margin-right: 30px;
  font-weight: bold;

}

#btn:hover{
  background: l;
}

/* .popup {
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.popup-content {
  height: 280px;
  width: 500px;
  background: rgb(164, 214, 221);
  padding: 20px;
  border-radius: 5px;
  position: relative;
} */

#text {
  /* margin: 20px auto; */
  /* display: block; */
  position: absolute;
  left: 15%;
  width: 50%;
  padding: 8px;
  border: 2px solid gray;
  border-radius: 5px;
}


.close {
  height: 30px;
  width: 30px;
  position: absolute;
  top: -60px;
  right: -15px;
  border-radius: 50%;
  box-shadow: 6px 6px 29px -4px rgba(0, 0, 0, 0.75);
  cursor: pointer;
}

.user {
  height: 50px;
  width: 50px;
  position: absolute;
  top: 5px;
  left: 5px;
  border-radius: 50%;
  box-shadow: 6px 6px 29px -4px rgba(0, 0, 0, 0.75);
}

</style>
