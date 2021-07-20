<template>
  <div>
    <div class="row">
      <router-link to="/contract" class="btn btn-primary ml-3">All Contracts</router-link>
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Add Contract</h1>
                  </div>
                  <form class="user" @submit.prevent="contractInsert" enctype="multipart/form-data" novalidate>`
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleInputStartingDate">Starting Date</label>
                          <input
                              type="date"
                              class="form-control"
                              id="exampleInputStartingDate"
                              v-model="form.starting_date"/>
                          <small class="text-danger" v-if="errors.starting_date">{{ errors.starting_date[0] }}</small>

                        </div>
                        <div class="col-md-6">
                          <label for="exampleInputEndingDate">Ending Date</label>
                          <input
                              type="date"
                              class="form-control"
                              id="exampleInputEndingDate"
                              v-model="form.ending_date"/>
                          <small class="text-danger" v-if="errors.ending_date">{{ errors.ending_date[0] }}</small>

                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleInputSalary">Salary</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputSalary"
                              v-model="form.salary"/>
                          <small class="text-danger" v-if="errors.salary">{{ errors.salary[0] }}</small>

                        </div>
                        <div class="col-md-6">
                          <label for="exampleFormControlSelect1">Contract Type</label>
                          <select class="form-control" id="exampleFormControlSelect1" v-model="form.type">
                            <option v-for="(key, type) in this.$parent.configuration.contract.type" :key="key" :value="key"> {{ type }}</option>

                          </select>
                          <small class="text-danger" v-if="errors.type">{{ errors.type[0] }}</small>

                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">


                        </div>
                        <div class="col-md-6">


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
        starting_date: null,
        ending_date: null,
        salary: null,
        type: null,
        employee_id: 1


      },
      errors:{},
    }
  },

  methods:{

    contractInsert(){
      this.$axios.post('http://127.0.0.1:8000/api/contract',this.form)
          .then(() => {
            this.$router.push({ name: 'contract' })
            //Notification.success()
          })
          .catch(error => this.errors = error.response.data.errors)

    },
  },




}
</script>

<style>
</style>