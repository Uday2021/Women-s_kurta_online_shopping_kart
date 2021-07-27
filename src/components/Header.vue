<template>
  <header>
    <div v-if="user" class="profile">
      <ul>
        <li>
        
          <a href="#" > <i class="fa fa-linux"></i> Welcome {{loginUser.replace(/[\"\"]+/g,'')}}</a>
          <a href="#"> <i class="fa fa-snapchat-square"></i> Subscription</a> 
          <a v-if="userLog" href="#" @click="logout"> <i class="fa fa-arrow-right"></i> Logout</a> 
        </li>
        
      </ul>
    </div>
        
        <!-- Navbar Logo -->
        <div class="logo">
          <!-- Logo Placeholder for Inlustration -->
          <!-- <img width="80" src="https://wforwomanonline.com/images/logo.png" alt="image"
          /> -->
          <img src="../assets/login.png" alt="user" class="user" @click="userProfile" style="margin-left: 20px; margin-top: 10px" />

          <span v-if="!user" style="font-weight: bold;position:absolute;top:5%" >{{loginUser.replace(/[\"\"]+/g,'')}}</span>

        </div>
         <div class="navbar">
        <router-link to="/">Home</router-link>
        <a href="#">About</a>
        <a href="#">Top Wear</a>
        <a href="#">Bottom Wear</a>
        <a href="#">Contact</a>
        <button id="btn" @click="popUp">Login/SignUp</button>
        <i class="fa fa-shopping-cart" @click="addCart"></i>
        <p style="position: absolute;margin-left:97%">{{count}}</p>
    </div>
    <div v-if="login" style="top:30%;width:500px;height:300px; position:absolute;z-index=1;"><login />
    <img
              src="../assets/close.jpg"
              alt="close"
              class="close"
              id="close"
              @click="close"
            />
    </div>

  </header>
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
      userLog: false,
    }
  },
  created(){
if (localStorage.loginUser) {
  this.loginUser = localStorage.loginUser;
  this.userLog = true;
}
 this.count = localStorage.count;
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
      }
  }
};
</script>
<style scoped>
header {
  margin-top: -5%;
  padding: 0;
  box-sizing: border-box;

}

body {
  /* background: rgb(250, 250, 250) url(http://lorempixel.com/1920/1080/nature/); */
  font-family: Lato, Helvetica, Arial, sans-serif;
}

header{
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: linear-gradient(#e3e7ec,#F6F8FA);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.534);
}

.profile{
    height: 20vh;
    width: 20vw;
    background: rgb(235,240,241);
background: linear-gradient(90deg, rgba(235,240,241,1) 5%, rgba(117,132,133,0.87718837535014) 98%);
    z-index: 2;
    top: 16%;
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
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.navbar i{
   font-size: 30px;
   cursor: pointer;
}

.navbar a{
    text-decoration: none;
    color: #000;
    font-size: 20px;
    position: relative;

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
  background: lightgoldenrodyellow;
  border-radius: 5px;
  border: 1px solid #444;

}

#btn:hover{
  background: lightgray;
}

.popup {
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
}

input {
  margin: 20px auto;
  display: block;
  width: 50%;
  padding: 8px;
  border: 2px solid gray;
  border-radius: 5px;
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
