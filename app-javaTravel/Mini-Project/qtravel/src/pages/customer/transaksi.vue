<template>
<div class="q-pa-mditems-start q-gutter-md">
    <div class="row text-center">
        <div class="col"><h4> {{images.wilayah}}</h4></div>
    </div>
    <div class="row q-pa-md">
        <div class="col">
            <q-img style="width:500px; height:400px " 
            :src="images.imgurl"/>
        </div>
        <!-- <div class="separator-"></div> -->
        <div class="col">
            <h4>{{images.nama}} 
            Rp. {{images.harga}} </h4>
            <h4> 3 Hari 2 Malam </h4>
        <h5><b class="text-center"> Fasilitas: </b></h5>
            <!-- {{images.deskripsi}} -->
            <h6>
            > Penjemputan di airport/terminal/stasiun <br>
            > Makan 3x1 Hari <br>
            > Penginapan di homestay <br>
            > Retribusi obyek wisata yang dikunjungi <br>
            > Asuransi 
            
            </h6> 

        </div> <br>
         <!-- <div class="row">
              <div class="col q-ma-xs text-black  ">
                 <q-btn class="float-right q-mx-md" color="red" @click="beli()">Order Now</q-btn>
                     </div>
                        <div class="col q-ma-xs text-black " >
                               <q-btn color="red" class="q-mx-md">Batal</q-btn>
                                </div>
                                  </div>  -->
    </div>
    <hr>
    <div class="row text-center">
        <div class="col"> <b>ISI DATA PEMESANAN</b></div>
    </div>

    <div class="row q-pa-md justify-center">
        <div class="col justify-center" style="max-width: 750px">
                <!-- <div class="q-gutter-y-md column text-center " style="max-width: 550px"> -->
                    <form @submit="beli()">
                         <div class="q-my-md">
                              <q-input outlined type="text" v-model="form.identitas" label="Identitas KTP/PASSPORT" placeholder="Masukan Identitas"  :dense="dense"  />
                                 </div>

                                     <div class="q-my-xs">
                                        <q-input v-model="form.tgl" filled type="date" />
                                        <!-- <q-input v-model="form.kuantity" filled type="text"  /> -->
                                    </div>

                                         <div class="q-my-xs">
                                             <q-input outlined type="text" v-model="form.kuantitas" label="Kuantitas" placeholder="Masukan Kuantitas"  :dense="dense"  />
                                                 <!-- <q-input v-model="form.tgl" filled type="date" hint="Native date" /> -->
                                                 <!-- <q-input v-model="form.kuantity" filled type="text"  /> -->
                                        </div>
                                         <div class="q-my-xs">
                                            <q-input outlined type="text" v-model="form.diskon" label="Kode Diskon" placeholder="Kode Diskon"  :dense="dense"  />
                                            <!-- Diskon : <input type="text"  v-model="form.diskon"> -->
                                        </div>

                                        <div class="q-my-md">
                                             <q-input v-model="form.catatan" label="catatan" placeholder="Masukan Catatan" filled type="textarea"/>
                                        </div>

                                        <div class="q-my-xs">
                                            <b>Total : {{total}} </b>
                                        </div>

                                         <div class="q-my-xs">
                                             <b>Pilih Bank:</b>
                                            <!-- Methode Pembayaran : <input type="text"  v-model="form.metode_bayar"><br>
                                                Status : {{status}} -->
                                                <!-- <div class="q-gutter-sm"> -->
                                                    <q-radio  v-model="form.metode_bayar" val="BCA" label="BCA" />
                                                    <q-radio  v-model="form.metode_bayar" val="Mandiri" label="Mandiri" />
                                                    <q-radio  v-model="form.metode_bayar" val="BRI" label="BRI" /> <br>
                                                    <!-- <q-radio  v-model="form.metode_bayar" val="polygon" label="BTN" /> -->
                                                    <!-- </div> -->
                                                   <b> Status : {{status}} </b>
                                        </div>
                                        <div class="row">
                                            <div class="col q-ma-xs text-black  ">
                                                <q-btn class="float-right q-mx-md" color="red" @click="beli()">Order Now</q-btn>
                                                    </div>
                                                        <div class="col q-ma-xs text-black " >
                                                            <q-btn color="red" class="q-mx-md">Batal</q-btn>
                                                                </div>
                                                                    </div> 
                    </form>
                <!-- </div> -->
        </div>
    </div>

</div>
</template>

<script>
import containeer from '../../api/Get/index';
import {downloadImage} from '../../api/Upload/index';
import product from '../../api/Admin/produk';
import transaksi from '../../api/transaksi/index';
import cart from '../../api/cart/index';
export default {
  data () {
    return {
        status : 'menunggu',
        images:[],
        cart :[],
        date: '',
        form: [
            {
                id_product:'',
                id_Customer : '',
                identitas : '',
                tgl: '',
                kuantitas : 0,
                diskon : 0,
                catatan : '',
                metode_bayar :'',
                
            }
        ],
        diskons:[],
        kd_diskon:''
    }
  },

  computed: {
    getImgs() {
      this.getImg()
    },
    total:function() {
        return ((parseInt(this.images.harga) * parseInt(this.form.kuantitas))-parseInt(this.form.diskon))
    },
    id_pr:function(){
        return cart.id_product
    }
  },

  beforeCreate() {
    let getIdcart= localStorage.getItem('id_product');
    // let getIdproducts= localStorage.getItem('id_products');
    let self=this;
    
    cart.getCartsbyId(window, getIdcart )
        .then(function (result) {
            if(result){
                self.images= result;
            }
        })
        .catch(function (err) {
            console.log(err);
        });
    
    diskon.getDiskon(window)
        .then(function (result) {
          return self.diskons=result;
            console,log(self.diskons)
        })
        .catch(function (err) {
            console.log(err);
        });
    
     },

     methods : {

        beli(){
            let getIdProduct= localStorage.getItem('id_product');
            let getIdCustomer= localStorage.getItem('id');
            let self=this;

            transaksi.postTransaksi(window, getIdProduct, getIdCustomer, self.form.identitas, 
            self.form.tgl, self.form.kuantitas, self.form.diskon,self.form.catatan,  self.total, self.form.metode_bayar, self.status)
            .then(function(result)
                {
                    if(result){
                        cart.deleteCart(window, self.cart.id).then(function(res)
                            {
                                localStorage.removeItem('id_cart')
                                self.$router.push('/customer/trip');
                            })
                            .catch(function(err){
                                console.log(err);
                            });

                    } else {
                        alert('Mohon Lengkapi Form');
                    }
                
                })
            .catch(function(err){
                console.log(err);
            });
        },
        cekDiskon(){
            
            if(this.kd_diskon=this.diskons.diskon){
                return this.form.diskon = this.diskons.nilai;
                console.log(this.diskons.diskon);
            }
        }
     }
     
}
</script>
