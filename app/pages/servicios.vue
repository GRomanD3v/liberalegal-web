<template>
  <div class="bg-brand-light min-h-screen pb-24">

    <!-- Header Section -->
    <div
      class="relative w-full border-b-8 border-b-brand-accent text-center pt-48 pb-48 px-4 sm:px-6 lg:px-8 shadow-lg mb-16 overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-r from-brand-green to-brand-dark">
        <img src="/justicia.jpg" alt="Fondo Justicia"
          class="w-full h-full object-cover mix-blend-multiply opacity-60" />
      </div>
      <div class="max-w-4xl mx-auto relative z-10">
        <h1 class="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          Soluciones Legales <span class="text-brand-accent">Especializadas</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-200 mx-auto leading-relaxed">
          Brindamos representación legal de alto nivel para proteger tus activos y asegurar tu tranquilidad financiera
          mediante estrategias precisas.
        </p>
      </div>
    </div>

    <!-- Contenido -->
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Servicio 1: Defensa Integral CAE -->
        <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all flex flex-col">
          <div class="flex items-center mb-4 text-brand-green">
            <Landmark class="w-8 h-8 mr-3 shrink-0" />
            <h3 class="text-xl font-bold text-brand-dark">Defensa Integral CAE</h3>
          </div>
          <p class="text-gray-600 mb-6 flex-grow">
            Protegemos tu patrimonio frente a las acciones de cobro de la Tesorería General de la República. Detenemos retenciones de impuestos y amenazas de embargo.
          </p>
          <NuxtLink to="/contacto?servicio=cae" class="text-brand-green font-bold hover:underline self-start">Consultar por este servicio</NuxtLink>
        </div>

        <!-- Servicio 2: Prescripción de Deudas -->
        <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all flex flex-col">
          <div class="flex items-center mb-4 text-brand-green">
            <Clock class="w-8 h-8 mr-3 shrink-0" />
            <h3 class="text-xl font-bold text-brand-dark">Prescripción de Deudas</h3>
          </div>
          <p class="text-gray-600 mb-6 flex-grow">
            Gestionamos la declaración judicial de prescripción para deudas bancarias y comerciales (retail) para limpiar tu historial financiero de forma definitiva.
          </p>
          <NuxtLink to="/contacto?servicio=prescripcion" class="text-brand-green font-bold hover:underline self-start">Consultar por este servicio</NuxtLink>
        </div>

        <!-- Servicio 3: Defensa ante Embargos -->
        <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all flex flex-col">
          <div class="flex items-center mb-4 text-brand-green">
            <ShieldCheck class="w-8 h-8 mr-3 shrink-0" />
            <h3 class="text-xl font-bold text-brand-dark">Defensa ante Embargos</h3>
          </div>
          <p class="text-gray-600 mb-6 flex-grow">
            Representación urgente frente a demandas ejecutivas. Utilizamos todas las herramientas procesales para detener el embargo y proteger tus bienes.
          </p>
          <NuxtLink to="/contacto?servicio=embargos" class="text-brand-green font-bold hover:underline self-start">Consultar por este servicio</NuxtLink>
        </div>

        <!-- Servicio 4: Eliminación de Antecedentes -->
        <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all flex flex-col">
          <div class="flex items-center mb-4 text-brand-green">
            <Trash2 class="w-8 h-8 mr-3 shrink-0" />
            <h3 class="text-xl font-bold text-brand-dark">Eliminación de Antecedentes</h3>
          </div>
          <p class="text-gray-600 mb-6 flex-grow">
            Te ayudamos a ejercer tu derecho de eliminación de datos en el Boletín Comercial y otras bases de datos de riesgo para que vuelvas a ser sujeto de crédito.
          </p>
          <NuxtLink to="/contacto?servicio=eliminacion" class="text-brand-green font-bold hover:underline self-start">Consultar por este servicio</NuxtLink>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { Landmark, Clock, ShieldCheck, Trash2 } from 'lucide-vue-next'

useHead({
  title: 'Servicios Legales | Liberalegal',
  meta: [
    { name: 'description', content: 'Soluciones legales: prescipción de deudas, defensa CAE, embargos y Dicom.' }
  ]
})
</script>
