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
                    <h1 class="h4 text-gray-900 mb-4">Vat Update</h1>
                  </div>
                  <form class="user" @submit.prevent="vatUpdate" enctype="multipart/form-data" novalidate>`
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
                          <label for="exampleInputRate">Federal Rate</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputRate"
                              v-model="form.federal_rate"/>
                          <small class="text-danger" v-if="errors.federal_rate">{{ errors.federal_rate[0] }}</small>

                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleInputRate1">Province Rate</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputRate1"
                              v-model="form.province_rate"/>
                          <small class="text-danger" v-if="errors.province_rate">{{ errors.province_rate[0] }}</small>

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
        province_name: null,
        province_rate: null,
        federal_rate: null,

      },

      errors:{},
    }
  },


  methods:{

    vatUpdate(){
      let id = this.$route.params.id
      //when the page is loaded, this.form will include more data than clarified in data
      let info = {province_name:this.form.province_name,
        federal_rate:this.form.federal_rate,
        province_rate:this.form.province_rate,
        }
      this.$axios.put('http://127.0.0.1:8000/api/vat/'+ id,info)
          .then(() => {
            this.$router.push({ name: 'vat' })
            //Notification.success()
          })
          .catch(error => this.errors = error.response.data.errors)

    },
  },

  created(){

    let id = this.$route.params.id
    this.$axios.get('http://127.0.0.1:8000/api/vat/' + id)
        .then(({ data }) => (this.form = data.data))
        .catch()
  }


}
</script>

<style>
</style>