<template>
  <div>
    <div class="row">
      <router-link to="/employee" class="btn btn-primary ml-3">All Employees</router-link>
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Employee Update</h1>
                  </div>
                  <form class="user" @submit.prevent="employeeUpdate" enctype="multipart/form-data" novalidate>`
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleInputName">Employee Name</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputName"
                              v-model="form.name"/>
                          <small class="text-danger" v-if="errors.name">{{ errors.name[0] }}</small>

                        </div>
                        <div class="col-md-6">
                          <label for="exampleInputEmail">Employee Email</label>
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
                          <label for="exampleInputAddress">Employee Address</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputAddress"
                              v-model="form.address"/>
                          <small class="text-danger" v-if="errors.address">{{ errors.address[0] }}</small>

                        </div>
                        <div class="col-md-6">
                          <label for="exampleInputPhone">Employee Phone Number</label>
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
                          <label for="exampleInputBirthdate">Employee Birth Date</label>
                          <input
                              type="date"
                              class="form-control"
                              id="exampleInputBirthdate"
                              v-model="form.birthdate"/>
                          <small class="text-danger" v-if="errors.birthdate">{{ errors.birthdate[0] }}</small>

                        </div>
                        <div class="col-md-6">
                          <label for="exampleFormControlSelect1">Employee Department</label>
                          <select class="form-control" id="exampleFormControlSelect1" v-model="form.department_id">
                            <option v-for="department in departments" :key="department.id" :value="department.id"> {{ department.name }}</option>

                          </select>
                          <small class="text-danger" v-if="errors.department_id">{{ errors.department_id[0] }}</small>

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
        email: null,
        phone: null,
        address: null,
        birthdate: null,
        department_id: null

      },

      errors:{},
      departments: {}
    }
  },


  methods:{

    employeeUpdate(){
      let id = this.$route.params.id
      // when the page is loaded, this.form will include more data than clarified in data
      let info = {name:this.form.name,
                  address:this.form.address,
                  birthdate:this.form.birthdate,
                  email:this.form.email,
                  phone:this.form.phone,
                  department_id:this.form.department_id}
      this.$axios.put('http://127.0.0.1:8000/api/employee/'+ id,info)
          .then(() => {
            this.$router.push({ name: 'employee' })
            //Notification.success()
          })
          .catch(error => this.errors = error.response.data.errors)

    },
  },

  created(){
    // Get data from departments table
    this.$axios.get('http://127.0.0.1:8000/api/department')
        .then(({data}) => (this.departments = data.data))

   // Load the information of the employee
    let id = this.$route.params.id
    this.$axios.get('http://127.0.0.1:8000/api/employee/' + id)
        .then(({ data }) => (this.form = data.data))
        .catch()
  }


}
</script>

<style>
</style>