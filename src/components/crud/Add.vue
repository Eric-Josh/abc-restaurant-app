<template>
    <div>
        <Header />
        <h1>Add New Resturant</h1>
        <form class="add">
            <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" required="" />
            <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address" required="" />
            <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact" required="" />
            <button type="button" @click="addRestaurant">Save</button>
        </form>
    </div>
</template>

<script>
import Header from '../layouts/Header.vue'
import axios from 'axios'

export default {
    name:'Add',
    components:{
        Header
    },
   data(){
        return{
            restaurant: {
                name:'',
                address:'',
                contact:'',
            }
        }
    },
    methods:{
        async addRestaurant(){
            const result = await axios.post("http://localhost:3000/restaurants",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            });
            if(result.status == 201){
                this.$router.push({name:'Home'});
            }
        },
        checkLoggedInUser(){
            let user=localStorage.getItem("user-info");
            if(!user){
                this.$router.push({name:'Login'});
            }
        }
    },
    mounted(){
        this.checkLoggedInUser();
    }
}
</script>