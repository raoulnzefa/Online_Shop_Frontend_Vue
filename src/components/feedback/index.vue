<template>
  <div>
<!--    <div class="row">-->
<!--      <router-link to="/store-employee" class="btn btn-primary ml-3">Add Employee</router-link>-->
<!--    </div>-->
<!--    <br>-->
    <input type="text"  @keyup="searchUnit" v-model="searchTerm" class="form-control" style="width: 300px;" placeholder="Search Here">
    <br>
    <div class="row">
      <div class="col-lg-12 mb-4">
        <!-- Simple Tables -->
        <div class="card">
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Feedback List</h6>
          </div>
          <div class="table-responsive">
            <table class="table align-items-center table-flush">
              <thead class="thead-light">
              <tr>
                <th>User Name</th>
                <th>User Email</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Status</th>
                <th class="text-center">Action</th>

              </tr>
              </thead>
              <tbody>
              <tr v-for="feedback in feedback.data" :key="feedback.id">
                <td>{{ feedback.name }}</td>
                <td>{{ feedback.email }}</td>
                <td>{{ feedback.subject }}</td>
                <td>{{ feedback.message.slice(0,50) }}</td>
                <td><span v-if="feedback.status === 0" class="badge badge-warning">unprocessed</span><span v-else class="badge badge-success">processed</span></td>

                <td>
                  <router-link :to="{name: 'reply-feedback', params:{id:feedback.id}}" class="btn btn-sm btn-info">Reply</router-link>&nbsp;
                  <router-link :to="{name: 'edit-feedback', params:{id:feedback.id}}" class="btn btn-sm btn-primary">Edit</router-link>&nbsp;
                  <a @click="deleteFeedback(feedback.id)" class="btn btn-sm btn-danger"><font color="#ffffff">Delete</font></a>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
          <div class="card-footer"></div>
        </div>

        <pagination :data="feedback" @pagination-change-page="getResults" class="mt-4 float-right"></pagination>

      </div>
    </div>

    <!--Row-->
  </div>
</template>

<script>
import pagination from "laravel-vue-pagination";
import {debounce} from "lodash";

export default {
  components : { pagination },
  // created() {
  //
  // },
  data(){
    return{
      feedback:{},
      searchTerm: null,
      page: 1
    }
  },

  mounted() {
    // Fetch initial results
    this.getResults();
  },




  methods:{


    getResults(page = 1) {
      this.page = page
      this.$axios.get('http://127.0.0.1:8000/api/feedback', {
        params: {
          page: page,
          q: (this.searchTerm == '' ? null : this.searchTerm)

        }
      }).then(response => {
        this.feedback= response.data.data;

        //console.log(this.feedback.data)
      })
    },

    searchUnit: debounce(function(){
      this.getResults()

    }),

    deleteFeedback(id){
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$axios.delete('http://127.0.0.1:8000/api/feedback/'+ id)
              .then(() => {
                this.getResults(this.page)

              })
              .catch(() => {
                // this.$router.push({name: 'employee'})
              })

          this.$swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
          )
        }
      })

    },
  }


}

</script>

<style>

</style>