
<template>
<div>
    <h1>Welcome To Example Component</h1>
    <h2>Manage Categories</h2>
    
    <div>
        <h4>Select Category Type:
        <span><input type="radio" name="category-type" value="Expence" v-model="categoryType">Expence
        <input type="radio" name="category-type" value="Income" v-model="categoryType">Income<br></span></h4>
        <input type="text" name="category-name" v-model="categoryName">
        <button type="button" @click="addCategory" v-if="! isUpdating">Add Category</button>
        <button type="button" @click="updateCategory" v-else >Update Category</button>
    </div>

    <div>
        <ul>
            <li v-for="category in categories">Name:{{ category.name}} Type:{{category.type}} <button style="color: green" @click="editCategory(category._id)">Edit</button> <button style="color: red" v-on:click="deleteCategory(category._id)">Delete</button></li>
        </ul>
    </div>

</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      categoryName: '',
      categoryType: '',
      categories: [],
      isUpdating: false,
      updatingCategoryId: ''
    }
  },
  methods: {
    addCategory () {
        axios.post('http://localhost:8000/api/category', {categoryName: this.categoryName,categoryType: this.categoryType}).then(function(response){
            this.fetchCategory()
            this.categoryName = ''
            this.categoryType = ''
        }.bind(this))
    },
    fetchCategory () {
        axios.get('http://localhost:8000/api/category').then(function(response){
            this.categories = response.data
        }.bind(this))
    },
    editCategory (id) {
        this.isUpdating = true
        axios.get('http://localhost:8000/api/category/' + id).then(function(response){
            this.categoryName = response.data.name
            this.categoryType = response.data.type
            this.updatingCategoryId = response.data._id
        }.bind(this))
    },
    updateCategory () {
        axios.patch('http://localhost:8000/api/category/',{id: this.updatingCategoryId, categoryName: this.categoryName ,categoryType:this.categoryType }).then(function(response){
            this.fetchCategory()
            this.categoryName = ''
            this.categoryType =''
            this.isUpdating = false
        }.bind(this))
    },
    deleteCategory (id) {
        axios.delete('http://localhost:8000/api/category/' + id).then(function(response){
            this.fetchCategory()
        }.bind(this))
    }
  },
  





  mounted () {
    this.fetchCategory()
  }
}
</script>