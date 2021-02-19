<template>
<div  class="q-pa-md">
  <q-carousel class="sizee"
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide :name="1" img-src="./statics/17.jpg" class="responsive" />
      <q-carousel-slide :name="2" img-src="./statics/banten.png" class="responsive" />
      <q-carousel-slide :name="3" img-src="./statics/18.jpg"  class="responsive"/>
      <q-carousel-slide :name="4" img-src="./statics/jogja.jpg"  class="responsive"/>
    </q-carousel>
    <br>
    <br>
<div class="text-h3 text-center"><u>
  Most Popular Tours</u><br>
 <br>
</div>
<div class="row justify-center">
  <div class="col">
    <q-card>
      <q-img src="./statics/2.jpg" style="width:100%"/>
    </q-card>
  </div>
  <div class="col">
    <q-card>
      <q-img src="./statics/6.jpg" style="width:100%"/>
    </q-card>
  </div>
  <div class="col">
    <q-card>
      <q-img src="./statics/1.jpg" style="width:100%"/>
    </q-card>
  </div>
  <div class="col">
    <q-img src="./statics/4.jpg" style="width:100%"/>
  </div>
</div>

<div class="q-pa-md q-gutter-sm text-center">

  <q-btn style="background: goldenrod; color: white" label="View More"  @click="$router.replace('/Trip')"/>
<br><br>
</div>

<div class="text-h4 text-center">
  <b>Kenapa Java Travel</b><br><br>
</div>
<div class="row justify-center">
  <div class="col">
     <div class="row justify-end"><div class="col"> <b>PENYEDIA PELAYANAN TERBAIK</b> <br>
Memori dan cerita perjalanan anda adalah prioritas utama bagi kami. Kami memastikan keseluruhan proses liburan anda berjalan baik dan tak terlupakan.
       </div><q-img src="./statics/13.jpg" style="width:400px"/>
    </div>
  </div>
  
  <div class="col">
    <div class="row"><q-img src="./statics/14.jpg" style="width:400px"/>
    <div class="col"> 
     <b>AGENT BERPENGALAMAN</b><br>
Pengalaman dan jam terbang kami telah membuktikan bahwa kepuasan pelanggan yang terus kembali serta berbagai hal yang kami lewati menjadi dasar kami dalam memberi yang terbaik dan selalu siap memberi solusi bagi anda.
    </div>
    </div>
  </div>
  </div>
    
  <div class="row justify-center">

 <div class="col">
     <div class="row justify-end"><div class="col"> <b> PELAYAN TERBAIK DAN PROFESIONAL </b> <br>
Kami mengetahui bahwa kepentingan anda lebih utama dari program apapun yang dapat kami tawarkan. Penyediaan layanan yang terbaik bagi setiap pribadi menjadi prinsip kami dalam menyempurnakan perjalanan anda.       
</div><q-img src="./statics/15.jpg" style="width:400px"/>
    </div>
  </div>
  
  <div class="col">
    <div class="row"><q-img src="./statics/16.jpg" style="width:400px"/>
    <div class="col">
     <b> BEBAS DARI MASALAH </b> <br>
Melalui pelayanan yang menyeluruh dalam segala aspek, anda tidak perlu mengurus banyak hal dan menjadikan liburan anda seperti sebuah pekerjaan. Kami akan melakukannya untuk anda sehingga anda dapat menikmati setiap momen tanpa masalah.
    </div>
    </div>
  </div>
</div>
<br> <br>
<div class="text-h4 text-center">
  <b>Pelayanan Lainnya</b>
</div>
<br>
<div class="text-h6 text-center">
  <p>Pada prinsipnya, karena apa yang kami tawarkan merupakan sebuah perjalanan serta pengalaman tak terlupakan, kami memahami bahwa terdapat elemen-elemen penting yang tidak dapat dipisahkan dari sebatas perencanaan, namun juga memastikan bahwa proses perjalanan anda terakomodasi dengan sempurna. Berikut pelayanan lain yang kami sediakan untuk anda:</p>
</div>

<div class="row">
  <div class="col" style="min-width:250px">
    <h4 class="q-mt-sm  q-mb-none text-center "><q-icon class="q-mx-auto" size="xl" name= "mdi-ticket-confirmation"/><br> <b>Tiket & Atraksi</b></h4>
   <p class="q-mt-sm text-center"> 
    Tidak perlu lagi membayangkan antrean<br>
    panjang untuk masuk ke taman hiburan <br>
    dan berbagai atraksi pada setiap <br>
    </p>

  </div>

<div class="col" style="min-width:200px">
  <h4 class="q-mt-sm  q-mb-none text-center "><q-icon class="q-mx-auto" size="xl" name= "mdi-taxi"/> <br> <b>car</b></h4>
    <p class="text-center">Demi menjelajah setiap pelosok, <br>
    , kami memiliki layanan penyewaan mobil <br>
    di setiap destinasi anda</p>
  </div>
  <div class="col" style="min-width:200px">
   <h4 class="q-mt-sm  q-mb-none text-center "><q-icon class="q-mx-auto" size="xl" name= "mdi-shield-half-full"/> <br> <b>Insurance</b></h4>
    <p class="text-center">Lindungi perjalanan anda dari kejadian-<br>
    kejadian tak diinginkan, supaya anda <br>
    tidak memiliki kekuatiran selama liburan.</p>
  </div>
  <div class="col" style="min-width:250px">
   <h4 class="q-mt-sm  q-mb-none text-center "><q-icon class="q-mx-auto" size="xl" name= "mdi-cards"/> <br> <b>Passport & Visa</b></h4>
    <p class="text-center">Jangan biarkan perjalanan anda<br>
    terhambat karena pemrosesan dokumen <br>
    yang menyita waktu. Kami menyediakan</p>
  </div>
  </div><br>
  
</div>
</template>


<style lang="sass" scoped>
.row > div
  padding: 10px 15px
  
.row + .row
  margin-top: 1rem
.my-card
  width: 100%
  max-width: 250px
.sizee
   width:auto
   height: 530px
</style>

<script>
export default {
  data() {
    return {
      slide: 1
    }
  }
  
}
</script>
