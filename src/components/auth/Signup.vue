<template>
    <img class="app-logo" src="../../assets/rest-logo.png" alt="">
    <h1>SignUp</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" required="" /> 
        <input type="email" v-model="email" placeholder="Enter Email" required="" />
        <input type="password" v-model="password" placeholder="Enter Password" required="" />
        <button v-on:click="signUp">Sign Up</button>
    </div>
    <p>
        Already have account? <router-link to="/login">Login</router-link>
    </p>
</template>

<script>
import axios from 'axios'
export default {
    name:'SignUp',
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp(){
            let result = await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password
            });
        
            if(result.status == 201){
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({name:'Home'});
            }
        }
    },
    mounted(){
        let user=localStorage.getItem("user-info");
        if(user){
            this.$router.push({name:'Home'});
        }
    }
}
</script>
