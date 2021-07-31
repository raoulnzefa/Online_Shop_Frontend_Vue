<template>
  <div>
    <div class="row">
      <router-link to="/vat" class="btn btn-primary ml-3">All Vats</router-link>
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Add Vat</h1>
                  </div>
                  <form class="user" @submit.prevent="vatInsert" enctype="multipart/form-data" novalidate>`
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleInputName">Province Name</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputName"
                              v-model="form.province_name"/>
                          <small class="text-danger" v-if="errors.province_name">{{ errors.province_name[0] }}</small>

                        </div>
                        <div class="col-md-6">
                          <label for="exampleInputEmail">Federal Rate(%)</label>
                          <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail"
                              v-model="form.federal_rate"/>
                          <small class="text-danger" v-if="errors.federal_rate">{{ errors.federal_rate[0] }}</small>

                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleInputAddress">Province Rate(%)</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputAddress"
                              v-model="form.province_rate"/>
                          <small class="text-danger" v-if="errors.province_rate">{{ errors.province_rate[0] }}</small>

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
        province_name: null,
        federal_rate: null,
        province_rate: null,

      },
      errors:{},
    }
  },

  methods:{

    vatInsert(){
      this.$axios.post('http://127.0.0.1:8000/api/vat',this.form)
          .then(() => {
            this.$router.push({ name: 'vat' })
            //Notification.success()
          })
          .catch(error => this.errors = error.response.data.errors)

    },
  },




}
</script>

<style>
</style>