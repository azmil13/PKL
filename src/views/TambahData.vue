<template>
   <div class="lg:m-10">
  <form class="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-gray-200 p-6 shadow-xl lg:p-10">
  <h1 class="mb-6 text-xl font-semibold lg:text-2xl">Tambah Data</h1>

 
    <div> 
      <label class=""> No </label>
      <input type="number" placeholder="No" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
    </div>
    <div>
      <label class=""> Nama Barang </label>
      <input type="text" placeholder="Nama Barang" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
    </div>
  <div>
    <label class=""> Merek </label>
    <input type="text" placeholder="Masukan Merek" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
    </div>
  <div>
    <label class=""> Tipe  </label>
    <input type="text" placeholder="Masukan Tipe" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
  </div>
  <div>
    <label class=""> Model </label>
    <input type="text" placeholder="Masukan Model" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
  </div>
  <div>
    <label class=""> Ruangan </label>
    <input type="text" placeholder="Masukan Ruangan" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
  </div>
  <div>
    <label class=""> Jumlah </label>
    <input type="number" placeholder="Jumlah" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
  </div>
  <div>
    <label class=""> Tahun Peroleh </label>
    <input type="number" placeholder="Masukan Tahun Peroleh" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
  </div>
  <div>
    <label class=""> Nilai Peroleh </label>
    <input type="number" placeholder="Masukan Nilai Peroleh" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
  </div>
  <div>
    <label class=""> Nilai Perbaikan </label>
    <input type="number" placeholder="Masukan Nilai Perbaikan" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
  </div>
  <div>
    <label class=""> No Inventaris </label>
    <input type="text" placeholder="Masukan No Inventaris" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
  </div>
  
    <div>
      <label class=""> Kondisi </label>
      <div class="relative w-56 mt-2 bg-gray-100 rounded-lg">
        <input class="peer hidden" type="checkbox" name="select-1" id="select-1" />
        <label for="select-1" class="flex w-full cursor-pointer rounded-lg select-none border p-2 px-3 text-sm text-gray-700 ring-blue-400 peer-checked:ring">Pilih Kondisi</label>
        <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute right-5 top-3 h-4 text-gray-600 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <ul class="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
          <li class="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">Baik</li>
          <li class="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">Tidak Baik</li>
        
        </ul>
      </div>
    </div>

  <div>
    <button type="button" class="mt-5 w-full rounded-md bg-gray-600 p-2 text-center font-semibold text-white">Kirim</button>
  </div>
</form>

</div>
</template>

<script>
// import Donatur from '../components/Donatur.vue'
// import Clients from '../components/Clients.vue'
// import Transaksi from '../components/Transaksi.vue'

// export default {
//     data() {
//         return {
//             donatur: '',
//             clients: '',
//             jumlah: 0
//         }
//     },
//     computed: {
//         isLoading() {
//             return this.$store.state.isLoading
//         }
//     },
//     methods: {
//         selectedDonatur(val) {
//             this.donatur = val
//         },
//         selectedBantuan(val) {
//             this.clients = val
//         },
//         submitDonasi() {
//             this.$store.dispatch('transaksi/save_donasi', {
//                 id: Math.random().toString(36).substring(7),
//                 donatur: this.donatur,
//                 bantuan: this.clients,
//                 jumlah: this.jumlah
//             })
//         }
//     },
//     components: {
//         'list-donatur': Donatur,
//         'lokasi-bencana': Clients,
//         'list-transaksi': Transaksi
//     }
// }
</script>