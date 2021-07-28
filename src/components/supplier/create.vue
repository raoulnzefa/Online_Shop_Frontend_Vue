<template>
  <div>
    <div class="row">
      <router-link to="/customer" class="btn btn-primary ml-3">All Suppliers</router-link>
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Add Supplier</h1>
                  </div>
                  <form class="user" @submit.prevent="supplierInsert" enctype="multipart/form-data" novalidate>`
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleInputName">Supplier Name</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputName"
                              v-model="form.name"/>
                          <small class="text-danger" v-if="errors.name">{{ errors.name[0] }}</small>

                        </div>
                        <div class="col-md-6">
                          <label for="exampleInputEmail">Supplier Email</label>
                          <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail"
                              v-model="form.email"/>
                          <small class="text-danger" v-if="errors.email">{{ errors.email[0] }}</small>

                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleInputAddress">Supplier Address</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputAddress"
                              v-model="form.address"/>
                          <small class="text-danger" v-if="errors.address">{{ errors.address[0] }}</small>

                        </div>
                        <div class="col-md-6">
                          <label for="exampleInputPhone">Supplier Phone Number</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputPhone"
                              v-model="form.phone"/>
                          <small class="text-danger" v-if="errors.phone">{{ errors.phone[0] }}</small>

                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleFormControlSelect1">Supplier Status</label>
                          <select class="form-control" id="exampleFormControlSelect1" v-model="form.status">
                            <option v-for="(key, status) in this.$parent.configuration.supplier.status" :key="key" :value="key"> {{ status }}</option>

                          </select>
                          <small class="text-danger" v-if="errors.status">{{ errors.status[0] }}</small>

                        </div>

                      </div>
                    </div>


                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">
                        Submit
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
        email: null,
        phone: null,
        address: null,
        status: null

      },
      errors:{},
    }
  },

  methods:{

    supplierInsert(){
      this.$axios.post('http://127.0.0.1:8000/api/supplier',this.form)
          .then(() => {
            this.$router.push({ name: 'supplier' })
            //Notification.success()
          })
          .catch(error => this.errors = error.response.data.errors)

    },
  },




}
</script>

<style>
</style>