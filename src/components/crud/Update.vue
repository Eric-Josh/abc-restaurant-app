<template>
    <div>
        <Header />
        <h1>Update Resturant</h1>
        <form class="update">
            <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
            <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address" required="" />
            <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact" required="" />
            <button type="button" @click="updateRestaurant">Update</button>
        </form>
    </div>
</template>

<script>
import Header from '../layouts/Header.vue'
import axios from 'axios'

export default {
    name:'Update',
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
        checkLoggedInUser(){
            let user=localStorage.getItem("user-info");
            if(!user){
                this.$router.push({name:'Login'});
            }
        },
        async getRestaurantDetails(){
            const result = await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id);
            this.restaurant.name = result.data.name;
            this.restaurant.address = result.data.address;
            this.restaurant.contact = result.data.contact;
        },
        async updateRestaurant(){
            let result = await axios.put("http://localhost:3000/restaurants/"+this.$route.params.id,{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            });
            if(result.status == 200){
                this.$router.push({name:'Home'});
            }
        },
    },
    mounted(){
        this.checkLoggedInUser();
        this.getRestaurantDetails();
    }
}
</script>