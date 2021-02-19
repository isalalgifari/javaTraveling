<template>
  <div class="q-pa-md q-gutter-md">

    <q-list bordered class="rounded-borders">
      <q-item-label header>ADMIN Produk</q-item-label>

      <q-item-label header>
          <q-btn color="blue" icon="add_box" label="admin" class="sp" size="sm" @click="$router.replace('/admin/upload')" />
          <input type="text" v-model="find_name">
          <q-btn color="blue" icon="search" label="search" class="sp" size="sm" @click="findByName()" />
      </q-item-label>

      <q-item class="bg-black text-white">

        <q-item-section top class="col-1 gt-sm">
          <q-item-label class="q-mt-sm">No</q-item-label>
        </q-item-section>

        <q-item-section top class="col gt-sm">
          <q-item-label class="q-mt-sm">Nama Wisata</q-item-label>
        </q-item-section>

        <q-item-section top class="col gt-sm">
          <q-item-label class="q-mt-sm">Wilayah</q-item-label>
        </q-item-section>

        <q-item-section top class="col gt-sm">
          <q-item-label class="q-mt-sm">Deskripsi</q-item-label>
        </q-item-section>
        
        <q-item-section top class="col gt-sm">
          <q-item-label class="q-mt-sm">Kuantitas</q-item-label>
        </q-item-section>

        <q-item-section top class="col gt-sm">
          <q-item-label class="q-mt-sm">Harga</q-item-label>
        </q-item-section>

        <q-item-section top class="col gt-sm">
          <q-item-label class="q-mt-sm">Gambar</q-item-label>
        </q-item-section>

         <q-item-section top class="col gt-sm">
          <q-item-label class="q-mt-sm">Aksi</q-item-label>
        </q-item-section>

      </q-item>
      
      <q-separator spaced />
      
      <q-item v-for="(pdk, index ) in produk" :key="pdk.id">

        <q-item-section top class="col-1 gt-sm">
          <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col gt-sm">
          <q-item-label class="q-mt-sm">{{pdk.nama}}</q-item-label>
        </q-item-section>

         <q-item-section top class="col gt-sm">
          <q-item-label class="q-mt-sm">{{pdk.wilayah}}</q-item-label>
        </q-item-section>

         <q-item-section top class="col gt-sm">
          <q-item-label class="q-mt-sm">{{pdk.deskripsi}}</q-item-label>
        
        </q-item-section>
         <q-item-section top class="col gt-sm">
          <q-item-label class="q-mt-sm">{{pdk.kuantitas}}</q-item-label>
        </q-item-section>

         <q-item-section top class="col gt-sm">
          <q-item-label class="q-mt-sm">{{pdk.harga}}</q-item-label>
        </q-item-section>

         <q-item-section top class="col gt-sm">
          <q-img style="width:50%"
            :src="pdk.imgurl"
            />
        </q-item-section>

         <q-item-section top class="col gt-sm">
          <div class="text-grey-8 q-gutter-xs">
            <q-btn size="12px" flat dense round icon="edit" @click="edit(pdk)" />
            <q-btn size="12px" flat dense round icon="delete" @click="onDelete(pdk.id)" />
          </div>
        </q-item-section>

      </q-item>
      
    </q-list>
 <!-- Form popup awal  -->
    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section>
        <div id="form" class="q-mx-auto" style="max-width: 600px">
          <q-form
            @submit="onSubmit"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="form.nama"
              label="Nama Wisata *"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
              filled
              v-model="form.wilayah"
              label="Wilayah *"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please enter your product price',
              ]"
            />
            <!-- <q-radio dense v-model="form.jenisKelamin" val="Laki-laki" label="Laki-laki" />
            <q-radio dense v-model="form.jenisKelamin" val="Perempuan" label="Perempuan" /> -->

            <q-input
              filled
              v-model="form.deskripsi"
              label="Deskripsi "
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please enter your product qty',
              ]"
            />

            <q-input
              filled
              v-model="form.kuantitas"
              label="Kuantitas "
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please enter product category',
              ]"
            />

            <q-input
              filled
              v-model="form.harga"
              label="Harga "
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please enter product category',
              ]"
            />
            <div>
              <q-btn flat label="Add" type="submit" color="primary" v-close-popup v-show="!updateSubmit"/>
              <q-btn flat label="Update" type="button" color="primary" v-close-popup v-show="updateSubmit" @click="update(form)"/>
              <q-btn flat label="Cancel" color="primary" v-close-popup="cancelEnabled" @click="batal()" />
            
            </div>
            <!-- Button akhir -->

          </q-form>
        </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <!-- Form popup akhir  -->
  </div>
</template>

<script>
import admin from '../../../api/Admin/produk';

export default {
  data() {
    return {
      current: 1,
      updateSubmit: false,
      dialog: false,
      cancelEnabled: false,
      produk:[{}],
      find_name : '',
      form: {
        id: '',
        wilayah: '',
        nama: '',
        deskripsi: '',
        kuantitas: '',
        harga: ''
      }
    }
  },

  // Get data dari Api
  async mounted() {
    const response = await
    admin.getProduk(window) 
      {
          this.produk = response
          console.log(response)
      }
  },

  methods: {
    
    //delete
    onDelete(id) {
        if (confirm('Apakah anda yakin akan menghapus data ini ?')) {
          admin.deleteProduk(window, id)
              .then((res) => {
                  admin.getProduk(window)
                      .then((res) => {
                          this.produk = res.data
                          this.$router.go('/admin/produk')
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