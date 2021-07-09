<template>
  <div>
    <div class="row">
      <router-link to="/employee" class="btn btn-primary">All Employees</router-link>
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Add Employee</h1>
                  </div>
                  <form class="user" @submit.prevent="employeeInsert" enctype="multipart/form-data">`
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
                          <small class="text-danger" v-if="errors.joining_date">{{ errors.joining_date[0] }}</small>

                        </div>
                        <div class="col-md-6">
                          <label for="exampleFormControlSelect1">Employee Department</label>
                          <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>

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
        salary: null,
        address: null,
        photo: null,
        nid: null,
        joining_date: null
      },
      errors:{}
    }
  },

  methods:{
    onFileSelected(event){
      let file = event.target.files[0];
      if (file.size > 1048770){
        Notification.image_validation()
      }else{
        let reader = new FileReader();
        reader.onload = event => {
          this.form.photo = event.target.result
          console.log(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    },
    // employeeInsert(){//console.log(this.form)
    //   axios.post('/api/employee',this.form).then(() => {
    //     this.$router.push({ name: 'employee' })
    //     Notification.success()
    //   })
    //       .catch(error => this.errors = error.response.data.errors)
    //
    // },
  }
}
</script>

<style>
</style>