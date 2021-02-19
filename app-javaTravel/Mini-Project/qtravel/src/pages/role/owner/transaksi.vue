<template>
  <div class="q-pa-md q-gutter-md">

    <q-list bordered class="rounded-borders">
      <q-item-label header>ADMIN Transaksi</q-item-label>

      <q-item class="bg-black text-white">

        <q-item-section top class="col">
          <q-item-label class="q-mt-sm">No</q-item-label>
        </q-item-section>

        <q-item-section top class="col">
          <q-item-label class="q-mt-sm">Identitas</q-item-label>
        </q-item-section>

         <q-item-section top class="col">
          <q-item-label class="q-mt-sm">Tanggal Pesan</q-item-label>
        </q-item-section>

         <q-item-section top class="col">
          <q-item-label class="q-mt-sm">Kuantitas</q-item-label>
        </q-item-section>

         <q-item-section top class="col">
          <q-item-label class="q-mt-sm">Catatan</q-item-label>
        </q-item-section>

         <q-item-section top class="col">
          <q-item-label class="q-mt-sm">Total</q-item-label>
        </q-item-section>

        <q-item-section top class="col">
          <q-item-label class="q-mt-sm">Metode Bayar</q-item-label>
        </q-item-section>

           <q-item-section top class="col">
          <q-item-label class="q-mt-sm">Status</q-item-label>
        </q-item-section>

      </q-item>
      
      <q-separator spaced />
      
      <q-item v-for="(tsk, index ) in transaksi" :key="tsk.id">

        <q-item-section top class="col">
          <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col">
          <q-item-label class="q-mt-sm">{{tsk.identitas}}</q-item-label>
        </q-item-section>

         <q-item-section top class="col">
          <q-item-label class="q-mt-sm">{{tsk.tgl}}</q-item-label>
        </q-item-section>

         <q-item-section top class="col">
          <q-item-label class="q-mt-sm">{{tsk.kuantitas}}</q-item-label>
        </q-item-section>

         <q-item-section top class="col">
          <q-item-label class="q-mt-sm">{{tsk.catatan}}</q-item-label>
        </q-item-section>

         <q-item-section top class="col">
          <q-item-label class="q-mt-sm">{{tsk.total}}</q-item-label>
        </q-item-section>
        
         <q-item-section top class="col">
          <q-item-label class="q-mt-sm">{{tsk.metode_bayar}}</q-item-label>
        </q-item-section>

         <q-item-section top class="col">
          <q-item-label class="q-mt-sm">{{tsk.status}}</q-item-label>
        </q-item-section>

      </q-item>
      
    </q-list>

    <div class="row">
  <div class="coloumn" style="padding-top: 30px; padding-left: 30px">
    <q-card id="size">
    <commit-chart :data="data1" ></commit-chart>
    </q-card>
    </div>
  <div class="coloumn" style="padding-top: 30px; padding-left: 30px;">
    <q-card id="size">
      <donut-chart :data="data2"></donut-chart>
      </q-card>
      </div> 

      <div class="coloumn" style="padding-top: 30px; padding-left: 30px">
    <q-card id="size">
      <pie-chart :data="data1"></pie-chart>
    </q-card>
</div>
</div>

  </div>
</template>

<style scoped>
#size{
    width: 300px;
    
}
</style>

<script>
import admin from '../../../api/transaksi/index';

export default {
  data() {
    return {
      current: 1,
      updateSubmit: false,
      dialog: false,
      cancelEnabled: false,
      transaksi:[{}],
      find_name : '',
      form: {
        id: '',
        wilayah: '',
        nama: '',
        deskripsi: '',
        kuantitas: '',
        harga: '',
        url: ''
      }
    }
  },

  // Get data dari Api
  async mounted() {
    const response = await
    admin.getTransaksi(window) 
      {
          this.transaksi = response
          console.log(response)
      }
  },

  methods: {
    
    //delete
    onDelete(id) {
        if (confirm('Apakah anda yakin akan menghapus data ini ?')) {
          admin.deleteTransaksi(window, id)
              .then((res) => {
                  admin.getTransaksi(window)
                      .then((res) => {
                          this.transaksi = res.data
                          this.$router.go('/admin/transaksi')
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

    // Methods add untuk mengaktifkan popup
    add() {
        this.dialog = true
        this.updateSubmit = false
    },

    // method untuk Tambah data
    onSubmit() {
      const self = this
      admin.postProduk(window, self.form.wilayah, self.form.nama, self.form.deskripsi,  self.form.kuantitas, self.form.harga)
          .then(function (result) {
              self.$router.go('/admin/produk')
          })
          .catch(function (err) {
              console.log(err);
          });
    },

    // method untuk Edit data
    edit(pdk) {
      if (confirm('Anda akan di alihkan ke halaman Edit data, Tekan OK untuk lanjut atau Batal untuk kembali')) {
          try {
              this.dialog = true
              this.updateSubmit = true
              this.form.id = pdk.id
              this.form.wilayah = pdk.wilayah
              this.form.nama = pdk.nama
              this.form.deskripsi = pdk.deskripsi
              this.form.deskripsi = pdk.kuantitas
              this.form.harga = pdk.harga
              this.form.gambar = pdk.gambar
          } catch (error) {
              console.log(error.message)
          }
      }
    },
    // method Update
    update(id) {
      const self = this
      admin.putProduk(window, self.form.id, self.form.wilayah, self.form.nama, self.form.deskripsi, self.form.kuantitas, self.form.harga)
      .then(function (result) {
          self.$router.go('/admin/produk')
      })
      .catch(function (err) {
          console.log(err);
      });
    },
    batal()
    {
      this.dialog=false
    },
    // method FindByName
    findByName(find_name) {
        try {
            const self = this
            admin.getProdukByName(window, self.find_name )
            .then(function (result){
            return  self.produk=result.data
        })
        } catch (error) {
            console.log(error.message);
        }
    }
  }
}
</script>