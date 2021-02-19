<template>
    <div class="q-pa-md">
        <div class="row justify-center">
            <div class="col">
                <q-card class="my-card">
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">

                        <q-card-section>
                            <div class="text-h6">Our Changing Planet</div>
                            <div class="text-subtitle2">by John Doe</div>
                        </q-card-section>

                        <q-card-section>
                            {{ lorem }}
                        </q-card-section>
                        </q-card>
            </div>
             <div class="col">
                  <q-card class="my-card">
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">

                        <q-card-section>
                            <div class="text-h6">Our Changing Planet</div>
                            <div class="text-subtitle2">by John Doe</div>
                        </q-card-section>

                        <q-card-section>
                            {{ lorem }}
                        </q-card-section>
                        </q-card>
             </div>
              <div class="col">
                   <q-card class="my-card">
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">

                        <q-card-section>
                            <div class="text-h6">Our Changing Planet</div>
                            <div class="text-subtitle2">by John Doe</div>
                        </q-card-section>

                        <q-card-section>
                            {{ lorem }}
                        </q-card-section>
                        </q-card>
              </div>
               <div class="col">
                    <q-card class="my-card">
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">

                        <q-card-section>
                            <div class="text-h6">Our Changing Planet</div>
                            <div class="text-subtitle2">by John Doe</div>
                        </q-card-section>

                        <q-card-section>
                            {{ lorem }}
                        </q-card-section>
                        </q-card>
               </div>
        </div>

        <div class="row justify-center">
            <div class="col">
                <q-card class="my-card">
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">

                        <q-card-section>
                            <div class="text-h6">Our Changing Planet</div>
                            <div class="text-subtitle2">by John Doe</div>
                        </q-card-section>

                        <q-card-section>
                            {{ lorem }}
                        </q-card-section>
                        </q-card>
            </div>
             <div class="col">
                  <q-card class="my-card">
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">

                        <q-card-section>
                            <div class="text-h6">Our Changing Planet</div>
                            <div class="text-subtitle2">by John Doe</div>
                        </q-card-section>

                        <q-card-section>
                            {{ lorem }}
                        </q-card-section>
                        </q-card>
             </div>
              <div class="col">
                   <q-card class="my-card">
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">

                        <q-card-section>
                            <div class="text-h6">Our Changing Planet</div>
                            <div class="text-subtitle2">by John Doe</div>
                        </q-card-section>

                        <q-card-section>
                            {{ lorem }}
                        </q-card-section>
                        </q-card>
              </div>
               <div class="col">
                    <q-card class="my-card">
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">

                        <q-card-section>
                            <div class="text-h6">Our Changing Planet</div>
                            <div class="text-subtitle2">by John Doe</div>
                        </q-card-section>

                        <q-card-section>
                            <div class="text">
                                lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  
                            </div>
                        </q-card-section>
                        </q-card>
               </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.row > div
  padding: 10px 15px

.row + .row
  margin-top: 1rem
  </style>

  <script>
export default {
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>