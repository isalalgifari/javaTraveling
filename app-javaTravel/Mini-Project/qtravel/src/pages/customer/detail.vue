<template>
        
        <div class="container q-mb-md">
            <div class="row">
                <div class="col">
                <h3 class="text-center q-mb-sm">{{images.nama}}</h3>
                    <div class="row">
                        <div class="col">
                            <div class="q-mr-sm">
                                <q-card class="my-card float-right">
                                <q-img :src="images.imgurl" basic></q-img>
                                <q-card-section>
                                    <div class="text-h6">RP. {{images.harga}}</div>
                                </q-card-section>
                                </q-card>
                            </div>
                        </div>
                        <div class="col">
                            <div class="q-ml-sm">
                                <q-card class="my-card float-left">

                                    <q-card-section>
                                        <div class="text-h6">{{images.wilayah}}</div>
                                        <div class="text-subtitle2">{{images.nama}}</div>
                                    </q-card-section>

                                    <q-card-section class="bg-teal-0">
                                        {{images.deskripsi}}<br/>
                                        <br/>
                                    </q-card-section>

                                    <q-card-section>
                                        <q-separator inset class="q-my-sm" />
                
                                        <q-btn color="primary" icon="payment" label="Bayar" class="full-width" align="left" @click="add(images)"/>
                                        <router-link to="/trip">
                                        <q-btn color="red" class="full-width" label="Batal" icon="warning" align="left"/>
                                        </router-link>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>
                    </div>
                </div>
               
                

            </div>
        </div>
                
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px

</style>

<script>
import containeer from '../../api/get/index';
import {downloadImage} from '../../api/upload/index';
import product from '../../api/admin/produk';
import cart from '../../api/cart/index';
// import transaksi from '../api/wisata/index';
export default {
  data () {
    return {
      images:[]
      }
  },

  computed: {
    getImgs() {
      this.getImg()
    }
  },

  beforeCreate() {
        let getId= localStorage.getItem('id_product');
        console.log(getId)
         let self=this;
    product.getProdukbyId(window, getId )
                .then(function (result) {
                    console.log(result);
                    self.images= result;
                })
                .catch(function (err) {
                    console.log(err);
                });
     },

    methods : {

      add(images){
           localStorage.setItem("id_product", images.id)
           this.$router.push('/customer/transaksi')
            // let getIdProduk= localStorage.getItem('id_product');
            // let getIdCustomer= localStorage.getItem('id');
            // let getimgurl =localStorage.getItem('imgurl')
            // let self=this;
            
            
            // cart. getCartsbyId(window, getIdProduk, getIdCustomer,getimgurl)
            // .then(function(result)
            //     {
            //         if(result){
            //             localStorage.setItem("id_product", result.id)
            //             self.$router.push('/customer/transaksi');
            //             console.log(result.id);
            //         } 
            //     })
            // .catch(function(err){
            //     console.log(err);
            // });
        },


        tambah(add) {
             let getIdProduct= localStorage.getItem('id_product');
            let getIdCustomer= localStorage.getItem('id_customer');
            let getimgurl = localStorage.getItem('imgurl')
            let self=this;
            console.log(getIdCustomer)

            cart.getCartsbyId(window, getIdProduct, getIdCustomer, getimgurl)
            .then(function(result)
                {
                    if(result){
                        localStorage.setItem("id_cart", result.id)
                        self.$router.push('/customer/cart');
                        console.log(result.id);
                    } 
                })
            .catch(function(err){
                console.log(err);
            });
        }


     }
     
}
</script>