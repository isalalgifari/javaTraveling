
  <!-- <div class="q-pa-md q-gutter-md">

    <q-list bordered class="rounded-borders">
      <q-item-label header>OWNER Produk</q-item-label>

      <q-item class="bg-black text-white">

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">No</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Nama</q-item-label>
        </q-item-section>

         <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Destinasi</q-item-label>
        </q-item-section>

         <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Jumlah</q-item-label>
        </q-item-section>

         <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Status</q-item-label>
        </q-item-section>

         <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Aksi</q-item-label>
        </q-item-section>

      </q-item>
      
      <q-separator spaced />
      
      <q-item>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">1</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Muhammad</q-item-label>
        </q-item-section>

         <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Borobudur</q-item-label>
        </q-item-section>

         <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">1</q-item-label>
        </q-item-section>

         <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">request</q-item-label>
        </q-item-section>

         <q-item-section top class="col-2 gt-sm">
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>

      </q-item>
      
    </q-list>
  </div> -->

<template>
    <div class="q-pa-md">
        Halaman Dashoboard owner
    
   
        <div class="row">
            
            <div class="col-4">
            
            <chart :chart-data="datacollection" id="coba1"></chart>

            </div>

            </div>
        </div>
    
    </div>
</template>
<style scoped>
 #coba1{
    
    width: 400px;
  }
</style>
<script>
    import product from '../../../api/admin/produk';
    import Chart from '../../../api/chart/chart';
    export default {
      components: {
        Chart
      },
      data() {
        return {
          datacollection: null,
          images:[],
          jabar: [],
          jateng: [],
          dataAccesories: [],
          data1: {}
        };
      },
      mounted() {
        this.fillData();
      },
      methods: {
        fillData() {

            let self = this
            product.getProduk(window).then(function (result) {

                let temp = []
                let temp2 = []
                let temp3=[]
                let temp4=[]
                let temp5=[]
                let temp6=[]
                let tempLabels = []
                let tempDataLabels = []
                
                for(let i = 0; i < result.length; i++) {
                    if (result[i].wilayah ===  'Banten') {
                        temp.push(result[i])

                        if (!tempLabels.includes('Banten')) {
                            tempLabels.push(result[i].wilayah)
                        }

                        if (!tempDataLabels.includes('Banten')) {
                        tempDataLabels.push(result[i].wilayah)
                        }

                    } else if (result[i].wilayah ===  'DKI Jakarta') {
                        temp2.push(result[i])

                        if (!tempLabels.includes('DKI Jakarta')) {
                            tempLabels.push(result[i].wilayah)
                        }

                        if (!tempDataLabels.includes('DKI Jakarta')) {
                            tempDataLabels.push(result[i].wilayah)
                        }
                    
                    } else if (result[i].wilayah ===  'Jawa Barat') {
                        temp3.push(result[i])

                        if (!tempLabels.includes('Jawa Barat')) {
                            tempLabels.push(result[i].wilayah)
                        }

                        if (!tempDataLabels.includes('Jawa Barat')) {
                            tempDataLabels.push(result[i].wilayah)
                        }
                    } else if (result[i].wilayah ===  'Jawa Tengah') {
                        temp4.push(result[i])

                        if (!tempLabels.includes('Jawa Tengah')) {
                            tempLabels.push(result[i].wilayah)
                        }

                        if (!tempDataLabels.includes('Jawa Tengah')) {
                            tempDataLabels.push(result[i].wilayah)
                        }
                    } else if (result[i].wilayah ===  'Jawa TImur') {
                        temp5.push(result[i])

                        if (!tempLabels.includes('Jawa TImur')) {
                            tempLabels.push(result[i].wilayah)
                        }

                        if (!tempDataLabels.includes('Jawa TImur')) {
                            tempDataLabels.push(result[i].wilayah)
                        }
                    } else if (result[i].wilayah ===  'Yogyakarata') {
                        temp6.push(result[i])

                        if (!tempLabels.includes('Yogyakarata')) {
                            tempLabels.push(result[i].wilayah)
                        }

                        if (!tempDataLabels.includes('Yogyakarata')) {
                            tempDataLabels.push(result[i].wilayah)
                        }
                    } 
                    
                    
                }

                console.log(tempLabels)
                console.log(tempDataLabels)

                self.datacollection = {
                    labels:  tempLabels,
                    datasets: [{
                        barPercentage: 0.5,
                        label: tempDataLabels,
                        backgroundColor: ['#f87979', '#3d65bd','#ffa500','#ff00ff','#008000', '#C10015'],
                        data: [temp.length, temp2.length, temp3.length,temp4.length, temp5.length, temp6.length]
                        }],
                        option: {
                            height: 200
                        }
                }
        })
        .catch(function (err) {
            console.log(err);
        })
    }
    }
}
</script>