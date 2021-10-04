<template>
    <div class="nav">
        <router-link to="/">Dashboard</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <!-- <router-link to="/update">Update Restaurant</router-link> -->
        <a v-on:click="logout" href="#">Logout</a>
        <div>Welcome {{name}}</div>
    </div>
</template>

<script>
export default {
    name:'Header',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:"Login"});
        },
        getUser(){
            let user=localStorage.getItem("user-info");
            if(user){
                this.name=JSON.parse(user).name;
            }
            if(!user){
                this.$router.push({name:'Login'});
            }
        }
    },
    data(){
        return{
            name:''
        }
    },
    mounted(){
        this.getUser();
    }
}
</script>
<style>
    .nav{
        background-color: #333;
        overflow: hidden;
    }
    .nav a{
        text-decoration: none;
        color: #fff;
        float: left;
        padding: 16px 16px;
        font-size: 17px;
        margin-right: 4px;
    }
    .nav a:hover{
        background: #ddd;
        color: #333;
    }
    .nav div{
        color: #fff;
        float: right;
        padding: 16px 16px;
        font-size: 17px;
        margin-right: 4px;
    }
</style>