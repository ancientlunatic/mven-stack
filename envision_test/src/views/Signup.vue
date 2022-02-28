<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import { useRouter } from 'vue-router';
import { ref } from "vue";

const rePassword = ref('');
const router = useRouter();

const user = reactive({
    firstName: "",
    lastName:  "",
    dob: "",
    userName: "",
    password: ""
})

const submit = async () => {
    if (user.password === rePassword.value) {
        const res = await fetch(`${process.env.VUE_APP_BASEURL}/auth/signup`, {
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user)
        });
        const response = await res.json();
        if(response.msg) {
            console.log(response);
            router.push('/login');
        }
    }
}
</script>

<template>
    <div id="id01" class="modal">
        <form class="modal-content" @submit.prevent="submit()">
            <div class="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>
            <label for="email"><b>first Name</b></label>
            <input type="text" v-model="user.firstName" placeholder="First Name" name="fName" required>

            <label for="email"><b>last Name</b></label>
            <input type="text" v-model="user.lastName" placeholder="Last Name" name="lName" required>

            <label for="email"><b>date of birth</b></label>
            <input type="date" v-model="user.dob" placeholder="XXXX/XX/XX" name="dob" required>

            <label for="email"><b>Email</b></label>
            <input type="text" v-model="user.userName" placeholder="Enter Email" name="email" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" v-model="user.password" placeholder="Enter Password" name="psw" required>

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" v-model="rePassword" placeholder="Repeat Password" name="psw-repeat" required>
            
            <label>
                <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
            </label>

            <div class="clearfix">
                <router-link to="/login" class="cancelbtn">login</router-link>
                <button type="submitl" class="signupbtn">Sign Up</button>
            </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

/* Add a background color when the inputs get focus */
input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* The Modal (background) */
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #474e5d;
  padding-top: 50px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
 
/* The Close Button (x) */
.close {
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 40px;
  font-weight: bold;
  color: #f1f1f1;
}

.close:hover,
.close:focus {
  color: #f44336;
  cursor: pointer;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}
</style>