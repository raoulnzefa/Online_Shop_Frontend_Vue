<template>
  <div>
    <div class="row">
      <router-link to="/employee" class="btn btn-primary ml-3">All Employee</router-link>
    </div>
    <br/>
    <div class="row">
      <div class="col-lg-12 mb-4">
        <!-- Simple Tables -->
        <div class="card" >
          <div class="text-center mt-4">
            <h1 class="h4 text-gray-900 mb-4">Contract Detail</h1>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee Name : {{ form.employee.name }}</li>
            <li class="list-group-item">Contract Code : {{ form.code }}</li>
            <li class="list-group-item">Starting Date : {{ form.starting_date }}</li>
            <li class="list-group-item">Ending Date : {{ form.ending_date }}</li>
            <li class="list-group-item">Contract Type : {{ form.type.type_name}}</li>
            <li class="list-group-item">Contract Salary : {{ form.salary }} $</li>

          </ul>

        </div>

      </div>
    </div>

    <!--Row-->
  </div>

</template>

<script>
  export default {

  data() {
    return {
      form: {
        code: null,
        starting_date: null,
        ending_date: null,
        salary: null,
        type: null,
        employee: null

      },
      errors:{},
    }
  },


  created(){

    // Load the information of the employee
    let id = this.$route.params.id
    this.$axios.get('http://127.0.0.1:8000/api/contract/' + id)
        .then(({data}) => (this.form = data.data))
        .catch()
  }


}
</script>

<style>

</style>