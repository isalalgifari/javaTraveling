<template>
<div class="q-pa-md q-gutter-md">
    <div class="row">
        <div class="col" style="align : center">
            <!-- Qlist awal -->
            <q-list bordered class="rounded-borders q-mx-auto" style="max-width: auto">
                <q-item-label header>

                </q-item-label>

                <!-- <q-item class="bg-indigo-13 col">
        <q-item-section avatar top>
          <q-item-label class="q-mt-sm">No</q-item-label>
        </q-item-section>

        <q-item-section top class="col gt-sm flex-center">
          <q-item-label class="q-mt-sm">Image</q-item-label>
        </q-item-section>

        <q-item-section top class="col gt-sm flex-center">
          <q-item-label class="q-mt-sm">Aksi</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="bg-grey-2 col" v-for="(cart, index ) in Pro" :key="cart.id">
        <q-item-section avatar top>
          <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col gt-sm flex-center" style="min-width:500px">
          <q-item-label class="q-mt-sm">
            <q-btn @click="show(cart)" flat>
              <q-img
                :src="cart.imgurl"
                style="width: 100px"
                />
          </q-btn></q-item-label>
        </q-item-section>

        <q-item-section top class="col gt-sm flex-center">
          <q-item-label lines="1">

              <q-btn class="gt-xs bg-red q-mr-sm" size="12px" flat dense  @click="bayar(cart)">Bayar</q-btn>
              <q-btn class="gt-xs bg-green" size="12px" flat dense  @click="onDelete(cart.id)">Dellete</q-btn>

          </q-item-label>
        </q-item-section>
      </q-item> -->

                
                    <q-card class=" my-card">
                        <q-card-section>
                            <div class="text-h6">Keranjang</div>
                            <div class="row ">

                                <div id="padding" class="col q-mx-auto  column q-ma-xs" flat v-for="item in Pro" :key="item.id" style="min-width:200px; max-width:250px" @click="show(item)">
                                    <div class="row">
                                        <div class="col q-ml-sm">
                                        <div class="text-center"></div>
                                            <q-btn @click="show(item)" flat>
                                                <q-img
                                                  :src="item.imgurl"
                                                  style="width: 100px"
                                                  class="q-ma-sm"
                                                  />
                                            </q-btn>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col q-my-sm">
                                          
                                            <q-btn class="  q-mr-sm" outline color="primary" size="12px"   @click="bayar(item)">Bayar</q-btn>
                                            <q-btn  size="12px" outline color="primary"  @click="onDelete(item.id)">Dellete</q-btn>
                                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                

                <!-- Tabel -->

            </q-list>
        </div>
    </div>
</div>
</template>

<script>
import carts from '../../api/cart/index';
import product from '../../api/admin/produk';
export default {
    data() {
        return {
            dialog: false,
            images: [],
            Pro:[],
            produk: [],

        }
    },

    beforeCreate() {
        let getIdCustomer = localStorage.getItem('id_customer');
        let self = this;
       

        carts.getCartByCustomer(window, getIdCustomer)
            .then(function (result) {
                   
                console.log('result',result)
                if (result) {
                    
                    self.Pro = result;
                    for (let i = 0; i < result.length; i++){
                        product.getProdukbyId(window, result[i].id_product)
                        .then(function (res) {  
                            self.produk.push(res)
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                    }
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    },

    // Get data dari Api
    // async mounted(){
    //   let getIdCustomer=localStorage.getItem('id');
    //   const response = await 
    //   carts.getCartByCustomer(window, getIdCustomer)
    //       {
    //         this.Pro=response
    //         console.log(response)
    //       }
    //  },
    methods: {
        // Method untuk delete data By ID
        onDelete(id) {
            console.log(id)
            if (confirm('Apakah anda yakin akan menghapus data ini ?')) {
                carts.deleteCart(window, id)
                    .then((res) => {
                        carts.getCart(window)
                            .then((res) => {
                                this.Pro = res.data
                                this.$router.go('/customer/cart')
                            })
                            .catch(() => {
                                alert('Error load data');
                            })

                    })
                    .catch(() => {
                        alert('Error load data');
                    })
                console.log("delete called");
            }
        },
        show(cart) {
            let self = this
            console.log(cart.id_product)
            this.dialog = true
            product.getProdukbyId(window, cart.id_product)
                .then(function (result) {
                    console.log(result)
                    self.images = result;
                })
                .catch(function (err) {
                    console.log(err);
                });
        },

        // method untuk Tambah data
        onSubmit() {
            const self = this
    
            carts.postCart(window, self.form.id_product, self.form.id_customer,  self.form.imgurl)
                .then(function (result) {
                    self.$router.go('/customer/cart')
                })
                .catch(function (err) {
                    console.log(err);
                });
        },

        bayar(cart) {
            try {
                localStorage.setItem('id_cart', cart.id);
                this.$router.push('/cust/transaksi')

            } catch (error) {
                console.log(error.message)
            }
        },
        batal() {
            this.dialog = false
        },
        update(id) {

            const self = this
            products.putproduct(window, self.form.id, self.form.id_customer, self.form.id_product, self.form.imgurl)
                .then(function (result) {
                    self.$router.go('/customer/cart')
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    }
}
</script>

<style scoped>

</style>
