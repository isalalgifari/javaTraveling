
<template>
<q-card class="my-card m" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
  <div class="row">
    <div id="form" class="q-mx-auto " style="max-width: 400px">
      <q-card style="width :350px" >
        <q-form  @submit="onSubmit" >
          <q-bar>
            <q-icon name="mdi-account" />
            <div>Silahkan Login</div>
          </q-bar>

          <q-card-section>
              <q-input outlined 
              v-model="email" 
              label="email"
              type="text" 
              placeholder="Masukan email" 
              hint=""
              :rules="[
                val =>!!val || 'email di perlukan'
              ]"/>
          </q-card-section>

          <q-card-section>
              <q-input outlined 
              v-model="password" 
              label="Password"
              type="password" 
              placeholder="Masukan password" 
              hint=""
              :rules="[
                val =>!!val || 'password di perlukan'
            ]"/>
          </q-card-section>

          <q-card-section>
              <q-btn
                  push 
                  color="primary"
                  label="Login"
                  class ="full-width"
                  size="lg"
                  type="submit"
              />
          </q-card-section>
        </q-form>
      </q-card>
    </div>
  </div>
</q-card>
</template>

<style scoped>

  #form{
    /* margin-left: 30%;
    margin-top: 20%;
    margin: auto; */
    margin-top: 15%; 

  }
  .m {
    height: 730px;
  }
  
</style>

<script>
import login from '../../api/Login/index';

export default {

  data() {
    return{
      email : "",
      password : ""
    }
  },


  methods : {
    onSubmit() {
      let self = this;
      login
      .loginUser(window, self.email, self.password )
      .then(function(result)
        {
            console.log(result);   
            if(result){
              localStorage.setItem('email', result.email)
              localStorage.setItem('role', result.role)
              localStorage.setItem('firstName', result.firstName)
              localStorage.setItem('id_customer', result.id)
              if(result.role=='admin'){
                self.$router.push('/admin/transaksi')
              } else if (result.role=='owner'){
                self.$router.push('/owner/transaksi')
              }else { self.$router.push('/customer/cust')
              } 
            }
        })
      .catch(function(err){
        console.log(err);
      });
    }
  }
}
</script>