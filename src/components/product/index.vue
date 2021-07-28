<template>
  <div>
    <div class="row">
      <router-link to="/store-product" class="btn btn-primary ml-3">Add Product</router-link>
    </div>
    <br>
    <input type="text"  @keyup="searchUnit" v-model="searchTerm" class="form-control" style="width: 300px;" placeholder="Search Here">
    <br>
    <div class="row">
      <div class="col-lg-12 mb-4">
        <!-- Simple Tables -->
        <div class="card">
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Product List</h6>
          </div>
          <div class="table-responsive">
            <table class="table align-items-center table-flush">
              <thead class="thead-light">
              <tr>
                <th>Name</th>
                <th>Buying Price</th>
                <th>Selling Price</th>
                <th>Inventory</th>
                <th>Status</th>
                <th>Supplier</th>
                <th>Category</th>
                <th class="text-center">Action</th>

              </tr>
              </thead>
              <tbody>
              <tr v-for="product in products.data" :key="product.id">
                <td>{{ product.name }}</td>
                <td>{{ product.buying_price }} $</td>
                <td>{{ product.selling_price }} $</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.status.status_name }}</td>
                <td>{{ product.supplier.name }}</td>
                <td></td>

                <td>
                  <router-link :to="{name: 'edit-product', params:{id:product.id}}" class="btn btn-sm btn-primary">Edit</router-link>&nbsp;
                  <a @click="deleteProduct(product.id)" class="btn btn-sm btn-danger"><font color="#ffffff">Delete</font></a>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
          <div class="card-footer"></div>
        </div>

        <pagination :data="products" @pagination-change-page="getResults" class="mt-4 float-right"></pagination>

      </div>
    </div>

    <!--Row-->
  </div>
</template>

<script>
import pagination from "laravel-vue-pagination";
import {debounce} from "lodash";

export default {
  components : { pagination },
  // created() {
  //
  // },
  data(){
    return{
      products:{},
      searchTerm: null,
      page: 1
    }
  },

  mounted() {
    // Fetch initial results
    this.getResults();
  },




  methods:{


    getResults(page = 1) {
      this.page = page
      this.$axios.get('http://127.0.0.1:8000/api/product', {
        params: {
          page: page,
          q: (this.searchTerm == '' ? null : this.searchTerm)

        }
      }).then(response => {
        this.products= response.data.data;

        //console.log(this.products.data)
      })
    },

    searchUnit: debounce(function(){
      this.getResults()

    }),

    deleteProduct(id){
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$axios.delete('http://127.0.0.1:8000/api/product/'+ id)
              .then(() => {
                this.getResults(this.page)

              })
              .catch(() => {
                // this.$router.push({name: 'employee'})
              })

          this.$swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
          )
        }
      })

    },
  }


}

</script>

<style>

</style>