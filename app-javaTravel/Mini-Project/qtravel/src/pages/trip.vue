<template>
      
  <div class="row"> 
  <div class="text-h3 q-mx-auto"> 
    <b> Destinasi</b><br>
    </br>
  </div>
    <q-card class="my-card">
      <q-btn id="padding" class="col q-mx-auto  column q-ma-xs" flat v-for="item in images" :key="item.id" style="min-width:200px; max-width:250px" @click="show(item)">
          <q-img style="width:200px; height:250px " class="q-mx-auto"
                              :src="item.imgurl">
            <div class="absolute-bottom">
              <div class="text-h6"><b> {{item.nama}}</b></div>
              <div class="text-subtitle2">Rp.  {{item.harga}} </div>
            </div>
          </q-img>

        <!-- <q-card-actions>
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions> -->
        </q-btn>  
      </q-card>
  </div>
</template>

<script>
import containeer from '../api/Get/index';
import {downloadImage} from '../api/Upload/index';
import product from '../api/Admin/produk';
export default {
  data () {
    return {
      images:[],
      kuantitas:''
    }
  },
  computed: {
    getImgs() {
      this.getImg()
    },
    cek(){
      if(this.images.kuantitas<1){
        return this.kuantitas='Stok habis';
      }
    }
  },

  beforeCreate() {
         let self=this;
    product.getProduk(window )
                .then(function (result) {
                    console.log(result);
                    // for (let i = 0; i < 6; i++) {
                    //   self.images.push(result[i])
                    //   // console.log(this.result.imgurl)
                    // }
                  self.images=result;
                })
                .catch(function (err) {
                    console.log(err);
                });
     },

     methods :{

       show(item){
       localStorage.setItem('id_product', item.id)
       localStorage.setItem('imgurl',item.gambar)
       this.$router.push('/detail')
      },
     }
}
</script>

