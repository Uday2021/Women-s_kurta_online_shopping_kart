<template>
  <div>
    <div class="popup" :style="{ display: showPopUp ? 'flex' : 'none' }">
      <div class="popup-content" v-show="signUpPop">
        <form>
          <img src="../assets/login.png" alt="user" class="user" />
          <input
            type="text"
            v-model="name"
            placeholder="Enter Your Name..."
            required
          />
          <input
            type="email"
            v-model="email"
            placeholder="Enter Email..."
            required
          />
          <input
            type="password"
            v-model="password"
            placeholder="Enter Password..."
            required
          />
          <a
            href="#"
            class="btn btn-full"
            @click="
              Submit();
              signUpPop = false;
            "
            >Submit</a
          >
          <a href="#" class="Exist" @click="signUpPop = false"
            >Existing User? Log in</a
          >
        </form>
      </div>
      <div class="popup-content" v-show="!signUpPop">
        <img src="../assets/login.png" alt="user" class="user" />
        <input
          type="email"
          v-model="email"
          placeholder="Enter Email..."
          required
        />
        <input
          type="password"
          v-model="password"
          placeholder="Enter Password..."
          required
        />
        <a href="#" class="btn btn-full" @click="check()">Submit</a>
        <a href="#" class="Exist" @click="signUpPop = true">SignUp?</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Login",
  data() {
    return {
      x: "x",
      showPopUp: true,
      signUpPop: false,
      name: "",
      email: "",
      password: "",
      userEmail: "",
      userName: ""
    };
  },

  methods: {
    slideshow() {
      this.x = document.getElementById("check-class");
      if (this.x.style.display === "none") {
        this.x.style.display = "block";
      } else {
        this.x.style.display = "none";
      }
    },
    SignUp() {
      this.showPopUp = true;
      this.signUpPop = true;
    },

    async check() {
      console.log("hello brother");

      this.showPopUp = false;
      this.signUpPop = false;
      this.userEmail = this.email;
      let res = await axios.post('http://localhost:4000/login',{
        email: this.email,
        password: this.password,

           
      })
      localStorage.setItem('loginUser',JSON.stringify(res.data.name));
      console.log(res.data);
      window.location.reload();
    },
    logout() {
      console.log("logging out");
      this.userEmail = "";
    },

    async Submit(){
      console.log('submitted',this.name,this.email)
      var result = await axios.post('http://localhost:4000/register',{
         name: this.name,
         email: this.email,
         password: this.password
      })
      console.warn(result.data);
      localStorage.setItem("user-info",JSON.stringify(result.data));
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

.btn {
  display: inline-block;
  padding: 10px 30px;
  font-weight: lighter;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 200px;
  transition: background-color 0.2s, border 0.2s, color 0.2;
}

.btn-full {
  background-color: lightskyblue;
  color: #bf55ec;
  margin-right: 15px;
  border: 1px solid #bf55ec;
}

.btn-full:hover {
  background-color: #fff;
}

.popup {
  /* background: rgba(0, 0, 0, 0.6); */
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
  background: rgb(235,240,241);
background: linear-gradient(90deg, rgba(235,240,241,1) 5%, rgba(132,133,117,0.87718837535014) 98%);
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
