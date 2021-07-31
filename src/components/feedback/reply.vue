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
                    <h1 class="h4 text-gray-900 mb-4">Feedback Response</h1>
                  </div>

                    <div class="form-group row">
                      <label for="exampleFormControlTextarea1" class="col-sm-3 col-form-label">Feedback from User</label>
                      <div class="col-sm-9">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="feedback.message" readonly="readonly"></textarea>
                      </div>
                    </div>
                    <hr />
                  <form @submit.prevent="answerInsert" enctype="multipart/form-data" novalidate>
                    <div class="form-group row">
                      <label for="exampleFormControlTextarea2" class="col-sm-3 col-form-label">Answer</label>
                      <div class="col-sm-9">
                        <textarea class="form-control" id="exampleFormControlTextarea2" rows="5" v-model="form.answer"></textarea>
                        <small class="text-danger" v-if="errors.answer">{{ errors.answer[0] }}</small>
                      </div>
                    </div>
                    <fieldset class="form-group">
                      <div class="row">
                        <legend class="col-form-label col-sm-3 pt-0">Status of Feedback</legend>
                        <div class="col-sm-9">
                          <div class="custom-control custom-radio">
                            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" v-bind:value="0" v-model="form.status">
                            <label class="custom-control-label" for="customRadio1">Unprocessed</label>
                          </div>
                          <div class="custom-control custom-radio">
                            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" v-bind:value="1" v-model="form.status">
                            <label class="custom-control-label" for="customRadio2">Processed</label>
                          </div>

                        </div>
                      </div>
                    </fieldset>

                    <div class="form-group row">
                      <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary">Reply</button>
                      </div>
                    </div>
                  </form>
                  <hr />
                  <div class="text-center" id="answers">
                    <ul class="list-group" v-for="answer in answers" :key="answer.id">
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        {{ answer.answer }}
                        <span class="badge badge-primary badge-pill">{{ answer.created_at}}</span>
                      </li>

                    </ul>
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
        answer: null,
        feedback_id: null,
        status: 0,

      },
      errors:{},
      feedback: {},
      answers: {}
    }
  },

  methods:{

    answerInsert(){
      let id = this.$route.params.id
      let info = {answer:this.form.answer,
        feedback_id:id,
        status:this.form.status
        }
      this.$axios.post('http://127.0.0.1:8000/api/feedback-answer', info)
          .then(() => {
            this.getAllAnswers()
            this.form.answer = null
            document.getElementById('answers').scrollIntoView();
            //this.$router.push({name: 'reply-feedback', params:{id:id}})
            //Notification.success()
          })
          .catch(error => this.errors = error.response.data.errors)

    },

    getAllAnswers(){
      let id = this.$route.params.id
      this.$axios.get('http://127.0.0.1:8000/api/feedback-answer/answers/'+ id )
      .then(response => {
        this.answers = response.data.data;
      })
    }
  },

  created(){
    let id = this.$route.params.id
    this.$axios.get('http://127.0.0.1:8000/api/feedback/' + id)
        .then(({data}) => (this.feedback = data.data))


    this.getAllAnswers()
  }


}
</script>

<style>
</style>