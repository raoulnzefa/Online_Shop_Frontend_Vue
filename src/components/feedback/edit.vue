<template>
  <div>
    <div class="row">
      <router-link to="/feedback" class="btn btn-primary ml-3">All Feedback</router-link>
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Feedback Update</h1>
                  </div>
                  <form class="user" @submit.prevent="feedbackUpdate" enctype="multipart/form-data" novalidate>`
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleInputName">User Name</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputName"
                              readonly="readonly"
                              v-model="form.name"/>
                          <small class="text-danger" v-if="errors.name">{{ errors.name[0] }}</small>

                        </div>
                        <div class="col-md-6">
                          <label for="exampleInputEmail">User Email</label>
                          <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail"
                              readonly="readonly"
                              v-model="form.email"/>
                          <small class="text-danger" v-if="errors.email">{{ errors.email[0] }}</small>

                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleInputSubject">Feedback Subject</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputSubject"
                              v-model="form.subject"/>
                          <small class="text-danger" v-if="errors.subject">{{ errors.subject[0] }}</small>

                        </div>

                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleFormControlTextarea1">Feedback Message</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="form.message"></textarea>

                          <small class="text-danger" v-if="errors.message">{{ errors.message[0] }}</small>

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
        subject: null,
        message: null,

      },

      errors:{},
    }
  },


  methods:{

    feedbackUpdate(){
      let id = this.$route.params.id
      // when the page is loaded, this.form will include more data than clarified in data
      let info = {
        name: this.form.name,
        subject: this.form.subject,
        message: this.form.message,
        email: this.form.email,
      }
      this.$axios.put('http://127.0.0.1:8000/api/feedback/'+ id,info)
          .then(() => {
            this.$router.push({ name: 'feedback' })
            //Notification.success()
          })
          .catch(error => this.errors = error.response.data.errors)

    },
  },

  created(){

    // Load the information of the employee
    let id = this.$route.params.id
    this.$axios.get('http://127.0.0.1:8000/api/feedback/' + id)
        .then(({ data }) => (this.form = data.data))
        .catch()
  }


}
</script>

<style>
</style>