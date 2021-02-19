<template>
<div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card q-mx-auto bg-light-blue-7" >
        <q-card-section>
            <template>
                <div class="q-pa-md" style="max-width: 500px">
                    <label class="text-white"><H4 class="text-center q-mt-none q-mb-md"> <q-icon  name="mdi-account-plus" class="q-mr-md"/>Registrasi</H4></label>
                    <hr >
                    <q-form @submit="onSubmit" @reset="onReset" class="q-pt-md">
                        <Div class="row bg-grey-3 rounded" >
                            <div class="col q-ma-sm">
                                <q-input filled v-model="firstName" label="Nama Depan *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                <q-input filled v-model="lastName" label="Nama Belakang *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                               
                
                                <q-input filled v-model="email" label="Email *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                <q-input type="password" filled v-model="password" label="Password *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                <q-input type="password" filled v-model="konfirm_password" label="konfirmasi Password. *"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />


                            </div>
                        </Div>
                        
                        <div class="row q-mt-md">
                            <div class="col">
                                <q-btn label="Register" type="Register" color="red-7" class="q-mr-md text-center" style="width:469px"/>
                            </div>
                            <!-- <div class="col">
                                <q-btn label="Reset" type="reset" color="red-7"  class=" q-ml-md" />
                            </div> -->
                        </div>
                    </q-form>
                     <br>
                    <br>
                    <router-link to="/login">
                        <center>Already Have an Account?</center>
                    </router-link>
                    <br>
                    <br>
                    <br>
                    <br>
                </div>
            </template>
        </q-card-section>
    </q-card>
</div>
</template>


<script>
import register from "../../api/Register/index";

export default {
    name: 'register',
    data () {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      konfirm_password: ""
      }
    },
    methods: {
    onSubmit() {
        let credentials = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          konfirm_password: this.konfirm_password 
        };
        const self = this;
        register
          .postCustomer(credentials, window)
          .then(function(result) {
            return result;
          })
          .catch(function(err) {
            console.log(err);
          });
        alert('Sukses')
        self.$router.push("/");
      }
    },
    // onReset() {
    //   this.firstName = null;
    //   this.lastName = null;
    //   this.email = null;
    //   this.password = null;
    //   this.accept = false;
    // }
}
</script>