<template>
  <div>
    <div class="row">
      <router-link to="/order" class="btn btn-primary ml-3">All Orders</router-link>
    </div>
    <br/>
    <div class="row">
      <div class="col-lg-12 mb-4">
        <!-- Simple Tables -->
        <div class="card" >
          <div class="text-center mt-4">
            <h1 class="h4 text-gray-900 mb-4">Order Details</h1>
          </div>
          <ul class="list-group list-group-flush" v-for="flash in order.flashes" :key="flash.id">
            <li class="list-group-item">Product Name : {{ JSON.parse(flash.product_info).name }}</li>
            <li class="list-group-item">Order Quantity : {{ JSON.parse(order.product_quantity)[JSON.parse(flash.product_info).id] }}</li>

          </ul>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Subtotal($) : {{ order.subtotal }}</li>
            <li class="list-group-item">Province Name : {{ order.vat.province_name }}</li>
            <li class="list-group-item">Federal Tax Rate(%) : {{ order.vat.federal_rate }}</li>
            <li class="list-group-item">Province Tax Rate(%） : {{ order.vat.province_rate }}</li>


          </ul>

          <div class="text-center mt-4">
            <h1 class="h4 text-gray-900 mb-4">Customer Details</h1>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Customer Name : {{ order.customer.name }}</li>
            <li class="list-group-item">Customer Phone : {{ order.customer.phone }}</li>
            <li class="list-group-item">Customer Email : {{ order.customer.email }}</li>
            <li class="list-group-item">Customer Address : {{ order.customer.address }}</li>


          </ul>

        </div>

      </div>
    </div>

    <!--Row-->
  </div>

</template>

<script>
export default {

  data() {
    return {

      errors:{},
      order: null
    }
  },


  created(){

    // Load the information of the employee
    let id = this.$route.params.id
    this.$axios.get('http://127.0.0.1:8000/api/order/' + id)
        .then(({data}) => (this.order = data.data))
        .catch()
  }


}
</script>

<style>

</style>