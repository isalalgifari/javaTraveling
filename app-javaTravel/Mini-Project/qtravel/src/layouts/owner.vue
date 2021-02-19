<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GNL__toolbar">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <!-- <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
          <img src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg">
        </q-toolbar-title> -->
                <q-item-label>
                          <router-link to="/admin/Produk">
                            <q-btn flat  color="primary" icon="card_giftcard"  label="Logout" name="logout" @click="logout()" ></q-btn>
                          </router-link>
                        </q-item-label>
                      </q-item-section>
                    </q-item>
        <q-space />

        <!-- <q-input class="GNL__toolbar-input" outlined dense v-model="search" color="bg-grey-7 shadow-1" placeholder="Search for topics, locations & sources">
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
          <template v-slot:append>
            <q-btn
              flat
              dense
              round
              aria-label="Menu"
              icon="arrow_drop_down"
            >
             
            </q-btn>
          </template>
        </q-input> -->

        <q-space />

        
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item class="GNL__drawer-item" v-ripple v-for="link in links1" :key="link.text" clickable>
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />

          <q-item >
            <q-item-section>
              <q-item-label>
                <router-link to="/owner/transaksi">
                   <q-btn color="info" icon="shopping_cart" label="Transaksi" class="full-width" align="left"/>
                </router-link>
                
              </q-item-label>
              <q-separator inset class="q-my-sm" />
              <q-item-label>
                <router-link to="/owner/Produk">
                   <q-btn color="info" icon="card_giftcard" label="Produk" class="full-width" align="left"/>
                </router-link>
              </q-item-label>
            </q-item-section>
          </q-item>

          
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'GoogleNewsLayout',
  data () {
    return {
      leftDrawerOpen: false,
      search: '',
      showAdvanced: false,
      showDateOptions: false,
    }
  },

      async  mounted(){
     let getRole = await localStorage.getItem('role');
     if( getRole ==='admin'){
          this.$router.push('/admin/')
       }
       else if( getRole ==='customer'){
          this.$router.push('/customer/cust/')
       } else  if (getRole === null){
         this.$router.push('/login')
       } else {
         alert('anda login sebagai owner')
       } 
     },  
  methods: {
    onClear () {
      this.exactPhrase = ''
      this.hasWords = ''
      this.excludeWords = ''
      this.byWebsite = ''
      this.byDate = 'Any time'
    },
    changeDate (option) {
      this.byDate = option
      this.showDateOptions = false
    },

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

<style lang="sass">
.GNL
  &__toolbar
    height: 64px
  &__toolbar-input
    width: 55%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      .q-icon
        color: #5f6368
    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>