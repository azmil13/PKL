<template>
  <div class="bg-slate-200 flex h-screen">
<aside class="fixed z-50 md:relative">
  <!-- Sidebar -->
  <input type="checkbox" class="peer hidden" id="sidebar-open" />
    <label class="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer md:hidden" for="sidebar-open">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Sidebar Navigation" class="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-gray-700 text-white transition-all md:h-screen md:w-64 lg:w-72">
      <div class="bg-gray-700 mt-3 py-4 md:mt-10">
        <span class="text-center py-2  ">
          <center>
          <span class="text-xl " ><img src="../assets/img/logo.png" alt="" width="140" ></span>
        </center>
        </span>
        <center>
        <span class="text-center py-2  ">Sekolah Tinggi Farmasi Indonesia</span>
        </center>
      </div>
      <ul class="mt-8 space-y-3 md:mt-20">
        <li class="relative">
         
          <router-link to="/" class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
            <span
              ><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
      <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z"/>
    </g>
  </svg></span
            ><span class="">Lokasi</span>
          </router-link >
        
        </li>
        <li class="relative">
          <router-link to="/art" class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
            <span
              ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
  <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
  <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
</svg></span
            ><span class="">ART</span>
          </router-link >
          <svg class="text-slate-200 absolute -right-1 -top-1/2 z-10 hidden h-32 w-8 md:block" xmlns="http://www.w3.org/2000/svg" viewBox="399.349 57.696 100.163 402.081" width="1em" height="4em">
            <path fill="currentColor" d="M 499.289 57.696 C 499.289 171.989 399.349 196.304 399.349 257.333 C 399.349 322.485 499.512 354.485 499.512 458.767 C 499.512 483.155 499.289 57.696 499.289 57.696 Z" />
          </svg>
        </li> 
        <li class="relative">
          <router-link to="/atk" class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
            <span
              ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z" /></svg></span
            ><span class="">ATK</span>
          </router-link >
        </li>
        <li class="relative">
          <router-link to="/labo" class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
            <span
              ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.013 4.175 5.006 7.369l5.007 3.194-5.007 3.193L0 10.545l5.006-3.193L0 4.175 5.006.981l5.007 3.194ZM4.981 15.806l5.006-3.193 5.006 3.193L9.987 19l-5.006-3.194Z" /></svg></span
            ><span class="">Labolatorium</span>
          </router-link >
        </li>
       
      </ul>

      <div class="my-6 mt-auto ml-10 flex cursor-pointer">
        <div>
          <img class="h-12 w-12 rounded-full" src="data:image/png;base64,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" />
        </div>
        <div class="ml-3 mt-2">
          <p class="font-medium text-xl">STFI</p>
        </div>
      </div>
    </nav>
  </aside>
  <!-- /Sidebar -->

<div class="flex h-full w-full flex-col">
  <!-- Navbar -->
  <header class="relative flex flex-col items-center bg-white px-4 py-4 shadow sm:flex-row md:h-20">
    <div class="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
      <div class="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto">
        <svg class="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8" class=""></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
        </svg>
        <input type="name" name="search" class="h-12 w-full rounded-md border border-gray-100 bg-gray-100 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500" placeholder="Search for anything" />
      </div>

      <ul class="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
        <li class="">
          <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </li>
        <li class="">
          <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
        </li>
        <li class="">
          <button class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  </header>
  <!-- /Navbar -->

  <!-- Main -->
 
<div class="w-full">

<div class="mx-auto mt-8 max-w-screen-lg px-2">
<div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
  <p class="flex-1 text-base font-bold text-gray-900"><center>Data ATK</center></p>
</div>

<div class="relative overflow-x-auto mt-6">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 " >
                    <center>ＢＵＬＡＮ</center>
                </th>
                <th scope="col" class="px-6 py-3">
                    Detail
                </th>
                <th scope="col" class="px-6 py-3">
                    <center>ＢＵＬＡＮ
                      
                    </center>
                </th>
                <th scope="col" class="px-6 py-3">
                    Detail
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Januari
                </th>
                <td class="px-5 py-4">
                  <a href="#">
                <div class="inline-flex items-center rounded bg-blue-500 py-2 px-3 text-xs text-white" type="button">Detail</div>
                  </a>
                </td>
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Juli
                </td>
                <td class="px-5 py-4">
                  <a href="#">
                <div class="inline-flex items-center rounded bg-blue-500 py-2 px-3 text-xs text-white" type="button">Detail</div>
                  </a>
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    February
                </th>
                <td class="px-5 py-4">
                  <a href="#">
                <div class="inline-flex items-center rounded bg-blue-500 py-2 px-3 text-xs text-white" type="button">Detail</div>
                  </a>
                </td>
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Agustus
                </td>
                <td class="px-5 py-4">
                  <a href="#">
                <div class="inline-flex items-center rounded bg-blue-500 py-2 px-3 text-xs text-white" type="button">Detail</div>
                  </a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Maret
                </th>
                <td class="px-5 py-4">
                  <a href="#">
                <div class="inline-flex items-center rounded bg-blue-500 py-2 px-3 text-xs text-white" type="button">Detail</div>
                  </a>
                </td>
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   September
                </td>
                <td class="px-5 py-4">
                  <a href="#">
                <div class="inline-flex items-center rounded bg-blue-500 py-2 px-3 text-xs text-white" type="button">Detail</div>
                  </a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    April
                </th>
                <td class="px-5 py-4">
                  <a href="#">
                <div class="inline-flex items-center rounded bg-blue-500 py-2 px-3 text-xs text-white" type="button">Detail</div>
                  </a>
                </td>
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Oktober
                </td>
                <td class="px-5 py-4">
                  <a href="#">
                <div class="inline-flex items-center rounded bg-blue-500 py-2 px-3 text-xs text-white" type="button">Detail</div>
                  </a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Mei
                </th>
                <td class="px-5 py-4">
                  <a href="#">
                <div class="inline-flex items-center rounded bg-blue-500 py-2 px-3 text-xs text-white" type="button">Detail</div>
                  </a>
                </td>
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    November
                </td>
                <td class="px-5 py-4">
                  <a href="#">
                <div class="inline-flex items-center rounded bg-blue-500 py-2 px-3 text-xs text-white" type="button">Detail</div>
                  </a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Juni
                </th>
                <td class="px-5 py-4">
                  <a href="#">
                <div class="inline-flex items-center rounded bg-blue-500 py-2 px-3 text-xs text-white" type="button">Detail</div>
                  </a>
                </td>
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Desember
                </td>
                <td class="px-5 py-4">
                  <a href="#">
                <div class="inline-flex items-center rounded bg-blue-500 py-2 px-3 text-xs text-white" type="button">Detail</div>
                  </a>
                </td>
                
            </tr>
            
        </tbody>
    </table>
</div>

</div>

</div>
  <!-- /Main -->
</div>
</div>


</template>