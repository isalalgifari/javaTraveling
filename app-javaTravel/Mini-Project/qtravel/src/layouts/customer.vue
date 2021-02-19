<template>
  <q-layout view="hhh lpR fff">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Java Travels
         
        </q-toolbar-title>
        <q-btn flat label="shop" name="shop" @click="$router.replace('/customer/cart')"><q-icon name= "add_shopping_cart"/></q-btn>
        <label flat >Hai,  {{roles}}</label>
        <q-btn flat label="Logout" name="logout" @click="logout()" ></q-btn>
        </q-toolbar>

        <q-tabs v-model="tab">
          <q-tab name="home" label="HOME" @click="$router.replace('/customer/cust')" />
          <q-tab name="trip" label="TRIP TOURS" @click="$router.replace('/customer/Trip')" />
          <!-- <q-tab name="gallery" label="GALLERY" @click="$router.replace('/customer/Gallery')" /> -->
          <q-tab name="about" label="ABOUT" @click="$router.replace('/customer/About')" />

        </q-tabs>
      
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
     <q-footer class="bg-white text-black">
     <q-separator color="blue-grey-3" inset />
     <div class="column">
       <div class="column" style="height: 70px"/>
         <div class="row" style="height: 180px">
            <div class="col-1 q-gutter-xl"/>
            <div class="col-3">
              <div class="text-left text-overline">TENTANG KAMI</div>
              <div class="text-left text-caption">Java Travel berdiri bulan November 2019 </div>
              <div class="text-left text-caption">sebagai penyedia jasa dalam bentuk hiburan </div>
              <div class="text-left text-caption">memberikan rekomendasi untuk mengisi waktu</div>
              <div class="text-left text-caption">liburan untuk anda, keluarga, dan rekan.</div>
              <div class="text-left text-caption">Kami memiliki destinasi yanng lebih menarik.</div>
              
            </div>
            <div class="col-5"/>
            <div class="col-2">
              <div class="text-left text-overline">MENU FOOTER</div>
              <div class="text-left text-caption">AllProduk</div>
              <div class="text-left text-caption">About</div>
              <div class="text-left text-caption">Contact Us</div>
            </div>
            <div class="col-1"/>
            <!-- <div class="col-3 q-gutter-xs">
              <div class="text-left text-overline">NEWSLETTER</div>
              <div class="text-left text-caption">Berlangganan untuk menerima pembaruan,</div>
              <div class="text-left text-caption">akses ke penawaran eksklusif, dan banyak lagi.</div>
              <div style="height: 10px"/> -->
              
               <!-- <div style="height: 10px"/>
               <q-btn style="background: #283b39; color: white" label="Langganan" />
            </div> -->
         </div> 
         <!-- <div class="row" style="height: 100px">
          <div class="col-1 q-gutter-xl "/>
          <div class="col-10">
            <div class="column" style="100px">
              <div class="col-1">
                <div class="text-left text-overline">Kenali kami lebih baik dengan mengikuti pegangan media</div>
                <div class="text-left text-overline">sosial kami!</div>
              </div>
            </div> 
         </div> -->
        </div>

          <div class="column"   >
            <div class="row">
              <div class="col-1 q-gutter-xl "/>
              <div class="col1">
                <div class="text-left text-overline">@Java Travel</div>
              </div>
              <div class="col-10"/>
              <div class="col-auto justify-end">
                <q-img src="./statics/master.png" style="width:30px"/>
                <q-img src="./statics/visa.png" style="width:30px"/>
              </div>
            </div>
          </div>

         </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      roles: '',
      leftDrawerOpen: false,
      tab: 'images',
      dialog: false
    }
  },

    async  mounted(){
     let getRole = await localStorage.getItem('firstName','role');
     return this.roles=getRole
      console.log(getRole)
     if(getRole ==='owner'){
          this.$router.push('/owner/')
       }
        else if( getRole ==='admin'){
          this.$router.push('/  admin/')
       } else  if (getRole === null){
         this.$router.push('/login')
        
       } 
     },
      
  methods :{
    
     logout(){
       localStorage.removeItem('role');
       localStorage.removeItem('email');
        localStorage.removeItem('firstName');
        localStorage.removeItem('id_product');
        localStorage.removeItem('id_customer');
        localStorage.removeItem('imgurl');

       this.$router.push('/login');
    
  }
  }
    
}
</script>
