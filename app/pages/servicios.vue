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
          Brindamos representación legal de alto nivel para proteger tus derechos y asegurar tu tranquilidad mediante estrategias jurídicas sólidas y precisas.
        </p>
      </div>
    </div>

    <!-- Contenido -->
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Servicio 1: Defensa Integral de deudores -->
        <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all flex flex-col">
          <div class="flex items-center mb-4 text-brand-green">
            <Landmark class="w-8 h-8 mr-3 shrink-0" />
            <h3 class="text-xl font-bold text-brand-dark">Defensa integral de deudores</h3>
          </div>
          <p class="text-gray-600 mb-6 flex-grow">
          Nuestra defensa legal especializada protege tu patrimonio frente a las acciones de cobro de tus acreedores. Frenamos ejecuciones, negociamos de manera inteligente y blindamos tus bienes con estrategias jurídicas precisas y confiables. Porque tener deudas no significa perderlo todo.
        </p>
          <NuxtLink to="/contacto?servicio=cae" class="text-brand-green font-bold hover:underline self-start">Consultar por este servicio</NuxtLink>
        </div>

        <!-- Servicio 2: Representación legal en procedimiento de sumarios administrativos -->
        <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all flex flex-col">
          <div class="flex items-center mb-4 text-brand-green">
            <Clock class="w-8 h-8 mr-3 shrink-0" />
            <h3 class="text-xl font-bold text-brand-dark">Representación legal en procedimiento de sumarios administrativos </h3>
          </div>
          <p class="text-gray-600 mb-6 flex-grow">
            Defensa experta frente a sumarios administrativos del Estado. Nuestros abogados te respaldan con un servicio de excelencia, confidencial y cercano. Tu tranquilidad y seguridad desde el primer momento.
          </p>
          <NuxtLink to="/contacto?servicio=prescripcion" class="text-brand-green font-bold hover:underline self-start">Consultar por este servicio</NuxtLink>
        </div>

        <!-- Servicio 3: Defensa en Procedimientos Penales -->
        <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all flex flex-col">
          <div class="flex items-center mb-4 text-brand-green">
            <ShieldCheck class="w-8 h-8 mr-3 shrink-0" />
            <h3 class="text-xl font-bold text-brand-dark">Defensa en procedimiento penales</h3>
          </div>
          <p class="text-gray-600 mb-6 flex-grow">
            Gestionamos tu defensa penal con un enfoque estratégico, humano y transparente. Escuchamos tu relato, analizamos y diseñamos una teoría del caso sólida y eficaz, sin juicios previos, con empatía y rigor.
          </p>
          <NuxtLink to="/contacto?servicio=embargos" class="text-brand-green font-bold hover:underline self-start">Consultar por este servicio</NuxtLink>
        </div>

        <!-- Servicio 4: Defensa Penitenciaria -->
        <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all flex flex-col">
          <div class="flex items-center mb-4 text-brand-green">
            <Trash2 class="w-8 h-8 mr-3 shrink-0" />
            <h3 class="text-xl font-bold text-brand-dark">Defensa Penitenciaria</h3>
          </div>
          <p class="text-gray-600 mb-6 flex-grow">
            Proporcionamos una defensa que contempla una serie de actuaciones judiciales y extrajudiciales, que se extienden durante el cumplimiento de la condena privativa de libertad hasta su completa ejecución. El objetivo es resguardar los intereses, garantías y derechos del condenado.
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
