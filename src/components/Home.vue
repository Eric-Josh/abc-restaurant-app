<template>
  <div>
    <Header />
    <h1>Restaurants Overview</h1>
    <div >
      <table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="restaurant in restaurants" :key="restaurant.id">
            <td>{{ restaurant.id }}</td>
            <td>{{ restaurant.name }}</td>
            <td>{{ restaurant.contact }}</td>
            <td>{{ restaurant.address }}</td>
            <td><button><router-link :to="'/update/'+restaurant.id">Update</router-link></button></td>
            <td><button type="button" @click="deleteRestaurant(restaurant.id)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./layouts/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    async getRestaurants() {
      let result = await axios.get("http://localhost:3000/restaurants");
      this.restaurants = result.data;
    },
    async deleteRestaurant(id){
        let result = await axios.delete("http://localhost:3000/restaurants/"+id);
        
        if(result.status==200){
            this.getRestaurants();
        }
    }
  },
  mounted() {
    this.getRestaurants();
  },
};
</script>

<style>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
  margin-right: auto;
  margin-left: auto;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>