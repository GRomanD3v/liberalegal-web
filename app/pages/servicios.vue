<template>
  <div class="bg-brand-light min-h-screen pb-24">

    <!-- Header Section -->
    <div
      class="relative w-full border-b-8 border-b-brand-accent text-center pt-48 pb-48 px-4 sm:px-6 lg:px-8 shadow-lg mb-16 overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-r from-brand-green to-brand-dark">
        <img src="/justicia.jpg" alt="Fondo Justicia" class="w-full h-full object-cover mix-blend-multiply opacity-60" />
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
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Servicio 1 -->
        <div
          class="bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col group">
          <div
            class="w-16 h-16 bg-brand-green text-white shadow-md rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
            <Landmark class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold text-brand-dark mb-4">1. Defensa Integral de Deudores CAE</h3>
          <p class="text-gray-600 mb-6 flex-grow leading-relaxed">
            Protegemos tu patrimonio frente a las acciones de cobro de la Tesorería General de la República. Si tu
            devolución de impuestos ha sido retenida o enfrentas amenazas de embargo, nuestro equipo legal interviene
            para resguardar tus derechos y buscar la prescripción de la deuda cuando corresponda.
          </p>
          <div class="bg-gray-50 border border-gray-100 p-4 rounded-lg mb-8">
            <span class="font-bold text-brand-dark text-sm">Foco Principal:</span> <span
              class="text-gray-600 text-sm">Retenciones de impuestos, embargos y cobranza administrativa.</span>
          </div>
          <NuxtLink to="/contacto?servicio=cae"
            class="mt-auto self-start inline-flex items-center text-sm font-bold text-brand-dark border-2 border-brand-dark hover:border-brand-green hover:bg-brand-green hover:text-white px-6 py-2.5 rounded-lg transition-colors text-center shadow-sm">
            Consultar por este servicio
          </NuxtLink>
        </div>

        <!-- Servicio 2 -->
        <div
          class="bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col group">
          <div
            class="w-16 h-16 bg-brand-green text-white shadow-md rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
            <Clock class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold text-brand-dark mb-4">2. Prescripción de Deudas Comerciales</h3>
          <p class="text-gray-600 mb-6 flex-grow leading-relaxed">
            Muchas deudas siguen vigentes en los registros comerciales a pesar de que el plazo legal para su cobro ha
            expirado. Gestionamos la declaración judicial de prescripción para que puedas limpiar tu historial y salir
            de Dicom de manera definitiva.
          </p>
          <div class="bg-gray-50 border border-gray-100 p-4 rounded-lg mb-8">
            <span class="font-bold text-brand-dark text-sm">Foco Principal:</span> <span
              class="text-gray-600 text-sm">Deudas de consumo, tarjetas de crédito y retail.</span>
          </div>
          <NuxtLink to="/contacto?servicio=prescripcion"
            class="mt-auto self-start inline-flex items-center text-sm font-bold text-brand-dark border-2 border-brand-dark hover:border-brand-green hover:bg-brand-green hover:text-white px-6 py-2.5 rounded-lg transition-colors text-center shadow-sm">
            Consultar por este servicio
          </NuxtLink>
        </div>

        <!-- Servicio 3 -->
        <div
          class="bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col group">
          <div
            class="w-16 h-16 bg-brand-green text-white shadow-md rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
            <ShieldCheck class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold text-brand-dark mb-4">3. Defensa ante Embargos y Demandas</h3>
          <p class="text-gray-600 mb-6 flex-grow leading-relaxed">
            Si recibiste una notificación judicial, el tiempo es el factor más crítico. Representamos a personas frente
            a bancos y financieras, utilizando todas las herramientas procesales para detener el embargo y proteger tus
            bienes.
          </p>
          <div class="bg-gray-50 border border-gray-100 p-4 rounded-lg mb-8">
            <span class="font-bold text-brand-dark text-sm">Foco Principal:</span> <span
              class="text-gray-600 text-sm">Oposición a la ejecución, tercerías y nulidad procesal.</span>
          </div>
          <NuxtLink to="/contacto?servicio=embargos"
            class="mt-auto self-start inline-flex items-center text-sm font-bold text-brand-dark border-2 border-brand-dark hover:border-brand-green hover:bg-brand-green hover:text-white px-6 py-2.5 rounded-lg transition-colors text-center shadow-sm">
            Consultar por este servicio
          </NuxtLink>
        </div>

        <!-- Servicio 4 -->
        <div
          class="bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col group">
          <div
            class="w-16 h-16 bg-brand-green text-white shadow-md rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
            <Trash2 class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold text-brand-dark mb-4">4. Eliminación de Antecedentes</h3>
          <p class="text-gray-600 mb-6 flex-grow leading-relaxed">
            Te ayudamos a ejercer tu derecho de eliminación de datos (Ley de Olvido) en boletines comerciales y bases de
            riesgo. Nos aseguramos de que tu información financiera refleje tu realidad actual.
          </p>
          <div class="bg-gray-50 border border-gray-100 p-4 rounded-lg mb-8">
            <span class="font-bold text-brand-dark text-sm">Foco Principal:</span> <span
              class="text-gray-600 text-sm">Dicom, Boletín Comercial y registros internos bancarios.</span>
          </div>
          <NuxtLink to="/contacto?servicio=eliminacion"
            class="mt-auto self-start inline-flex items-center text-sm font-bold text-brand-dark border-2 border-brand-dark hover:border-brand-green hover:bg-brand-green hover:text-white px-6 py-2.5 rounded-lg transition-colors text-center shadow-sm">
            Consultar por este servicio
          </NuxtLink>
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
