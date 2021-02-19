<template>
<div class="row" id="atas">
    <div class="col-4">
        <div class="q-pa-md" style="max-width: 350px" id="kiri">
            <q-list bordered class="rounded-borders q-mt-md">
            <q-expansion-item
                dense-toggle
                switch-toggle-side
                expand-separator
                icon="perm_identity"
                label="Kontak Personal"
            >
                <q-card>
                <q-card-section class="text-center">
                    (faisal) 081383607661
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-expansion-item
                dense-toggle
                switch-toggle-side
                expand-separator
                icon="email"
                label="Email"
            >
                <q-card>
                <q-card-section class="text-center">
                    faisalalgifari96@gmail.com
                </q-card-section>
                </q-card>
            </q-expansion-item>
            <q-expansion-item
                dense-toggle
                switch-toggle-side
                expand-separator
                icon="work"
                label="Alamat Kantor"
            >
                <q-card>
                <q-card-section class="text-center">
                    Jl. Teuku Umar km 44 <br/>
                    Kec. Cikarang Barat <br/>
                    Kab. Bekasi<br/>
                    Jawa Barat<br/>
                </q-card-section>
                </q-card>
            </q-expansion-item>
            </q-list>
        </div>
    </div>
    <div class="col-6">
        <div class="q-pa-md" style="max-width: 600px" id="kanan">
            <q-list bordered>
            <q-expansion-item
                group="somegroup"
                icon="explore"
                label="PROFIL PERUSAHAAN"
                default-opened
                header-class="text-primary"
            >
                <q-card>
                <q-card-section class="bg-teal-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.<br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.<br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.<br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.<br/>
                    
                </q-card-section>
                </q-card>
            </q-expansion-item>
            <q-separator />
            </q-list>
        </div>
        <div class="q-pa-md" style="max-width: 600px" id="kanan">
            <q-list bordered>
            <q-expansion-item
                group="somegroup"
                icon="explore"
                label="PRESTASI PERUSAHAAN"
                default-opened
                header-class="text-primary"
            >
                <q-card>
                <q-card-section class="bg-teal-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.<br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.<br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.<br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                    eveniet doloribus ullam aliquid.<br/>
                    
                </q-card-section>
                </q-card>
            </q-expansion-item>
            <q-separator />
            </q-list>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scope>
    #atas{
        padding-top : 50px;
    }

    #kiri{
        margin: auto;
        margin-right: 0px;
    }

    #kanan{
        margin: auto;
        margin-left: 0px;
    }
</style>