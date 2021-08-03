<template>
  <div>
    <div class="row">
      <router-link to="/article" class="btn btn-primary ml-3">All Articles</router-link>
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Article Update</h1>
                  </div>
                  <form class="user" @submit.prevent="articleUpdate" enctype="multipart/form-data" novalidate>`
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <label for="exampleInputTitle">Article Title</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputTitle"
                              v-model="form.title"/>
                          <small class="text-danger" v-if="errors.title">{{ errors.title[0] }}</small>

                        </div>
                        <div class="col-md-6">
                          <label for="exampleInputEmail">Article Category</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputEmail"
                              v-model="form.article_category_id"/>
                          <small class="text-danger" v-if="errors.article_category_id">{{ errors.article_category_id[0] }}</small>

                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <vue-editor v-model="form.content" class="ml-1 mb-5"></vue-editor>
                        <small class="text-danger" v-if="errors.content">{{ errors.content[0] }}</small>
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
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor
  },
  // created() {
  //   //console.log(User.loggedIn())
  //   if (!User.loggedIn()){
  //     this.$router.push({ name: '/' })
  //   }
  // },
  data() {
    return {
      form: {
        title: null,
        content: null,
        article_category_id: null,

      },

      errors:{},
    }
  },


  methods:{

    articleUpdate(){
      let id = this.$route.params.id
      // when the page is loaded, this.form will include more data than clarified in data
      let info = {title:this.form.title,
        content:this.form.content,
        article_category_id:1,
        }
      this.$axios.put('http://127.0.0.1:8000/api/article/'+ id,info)
          .then(() => {
            this.$router.push({ name: 'article' })
            //Notification.success()
          })
          .catch(error => this.errors = error.response.data.errors)

    },
  },

  created(){

    // Load the information of the employee
    let id = this.$route.params.id
    this.$axios.get('http://127.0.0.1:8000/api/article/' + id)
        .then(({ data }) => (this.form = data.data))
        .catch()
  }


}
</script>

<style>
</style>