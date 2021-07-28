<template>
  <div>
    <div class="row">
      <router-link to="/product" class="btn btn-primary ml-3">All Products</router-link>
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Product Update</h1>
                  </div>
                  <form class="user" @submit.prevent="productUpdate" enctype="multipart/form-data" novalidate>`
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleInputName">Product Name</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputName"
                              v-model="form.name"/>
                          <small class="text-danger" v-if="errors.name">{{ errors.name[0] }}</small>

                        </div>
                        <div class="col-md-6">
                          <label for="exampleInputBuyingPrice">Buying Price</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputBuyingPrice"
                              v-model="form.buying_price"/>
                          <small class="text-danger" v-if="errors.buying_price">{{ errors.buying_price[0] }}</small>

                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleInputSellingPrice">Selling Price</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputSellingPrice"
                              v-model="form.selling_price"/>
                          <small class="text-danger" v-if="errors.selling_price">{{ errors.selling_price[0] }}</small>

                        </div>
                        <div class="col-md-6">
                          <label for="exampleInputQuantity">Inventory Number</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputQuantity"
                              v-model="form.quantity"/>
                          <small class="text-danger" v-if="errors.quantity">{{ errors.quantity[0] }}</small>

                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleFormControlSelect1">Product Status</label>
                          <select class="form-control" id="exampleFormControlSelect" v-model="form.status.status_id" >
                            <option  v-for="(key, status) in this.$parent.configuration.product.status" :key="key" :value="key" :selected="form.status.status_id === key"> {{ status }}</option>

                          </select>
                          <small class="text-danger" v-if="errors.status">{{ errors.status[0] }}</small>

                        </div>
                        <div class="col-md-6">
                          <label for="exampleFormControlSelect1">Supplier Name</label>
                          <select class="form-control" id="exampleFormControlSelect1" v-model="form.supplier_id">
                            <option v-for="supplier in suppliers" :key="supplier.id" :value="supplier.id" > {{ supplier.name }}</option>

                          </select>
                          <small class="text-danger" v-if="errors.supplier_id">{{ errors.supplier_id[0] }}</small>

                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleFormControlTextarea1">Product Description</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="form.description"></textarea>

                          <small class="text-danger" v-if="errors.description">{{ errors.description[0] }}</small>

                        </div>

                      </div>
                    </div>

                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">
                        Update
                      </button>
                    </div>

                  </form>
                  <hr />
                  <div class="text-center">

                  </div>
                  <div class="text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // created() {
  //   //console.log(User.loggedIn())
  //   if (!User.loggedIn()){
  //     this.$router.push({ name: '/' })
  //   }
  // },
  data() {
    return {
      form: {
        name: null,
        buying_price: null,
        selling_price: null,
        quantity: null,
        status: null,
        supplier_id: null,
        description: null

      },

      errors:{},
      suppliers: {}
    }
  },


  methods:{

    productUpdate(){
      let id = this.$route.params.id
      // when the page is loaded, this.form will include more data than clarified in data
      let info = {name:this.form.name,
        buying_price:this.form.buying_price,
        selling_price:this.form.selling_price,
        quantity:this.form.quantity,
        description:this.form.description,
        status:this.form.status.status_id,
        supplier_id:this.form.supplier_id}
      this.$axios.put('http://127.0.0.1:8000/api/product/'+ id,info)
          .then(() => {
            this.$router.push({ name: 'product' })
            //Notification.success()
          })
          .catch(error => this.errors = error.response.data.errors)

    },
  },

  created(){
    this.$axios.get('http://127.0.0.1:8000/api/supplier')
        .then(({data}) => (this.suppliers = data.data.data))

    let id = this.$route.params.id
    this.$axios.get('http://127.0.0.1:8000/api/product/' + id)
        .then(({ data }) => (this.form = data.data))
        .catch()
  }


}
</script>

<style>
</style>