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
          Nuestra Visión y <span class="text-brand-accent">Compromiso</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Liberalegal nace con la convicción de democratizar el acceso a una defensa legal de calidad en temas
          financieros y administrativos.
        </p>
      </div>
    </div>

    <!-- Contenido -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
        <!-- Columna Izquierda (Texto) -->
        <div>
          <h1 class="text-brand-dark font-bold text-3xl mb-4">Nuestro Compromiso con tu Tranquilidad</h1>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Libera Legal nace con un propósito claro: democratizar el acceso a una defensa técnica y especializada
            frente a las acciones de cobranza del Estado y grandes corporaciones. Sabemos que enfrentar retenciones de
            impuestos o amenazas de embargo por deudas como el CAE genera una profunda angustia.
          </p>
          <p class="text-gray-600 mb-8 leading-relaxed">
            Nuestro equipo está compuesto por abogados especialistas en derecho administrativo y civil, enfocados en
            proteger tu patrimonio con estrategias probadas. No somos un estudio jurídico tradicional; somos tu escudo
            financiero. Actuamos con rapidez, total transparencia en nuestros honorarios y un trato humano que entiende
            la situación por la que estás pasando.
          </p>
          <div class="bg-white border-l-4 border-brand-green p-6 shadow-sm">
            <h3 class="font-bold text-brand-dark mb-2">Misión:</h3>
            <p class="text-gray-700 italic">
              Restituir la libertad financiera de nuestros clientes, garantizando que todo proceso de cobro se ajuste
              estrictamente a la ley, exigiendo la prescripción y el fin de los abusos.
            </p>
          </div>
        </div>

        <!-- Columna Derecha (Imagen) -->
        <div class="flex items-center justify-center">
          <img src="/abogado.jpg" alt="Nuestro Equipo Legal"
            class="w-full h-auto min-h-[300px] rounded-lg shadow-md object-cover" />
        </div>
      </div>
    </div>
  </div>
  <!--Seccion de imagen con texto-->
  <section class="relative py-32 bg-slate-900 overflow-hidden">

    <div class="absolute inset-0 z-0">
      <img src="/martillo.jpg" alt="Defensa Legal" class="w-full h-full object-cover opacity-40" />
      <div class="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
    </div>

    <div class="relative z-10 w-full px-6 md:px-24 text-center">

      <h3 class="text-brand-accent font-bold tracking-widest uppercase text-sm md:text-sm mb-2">
        Estrategias precisas para tu defensa
      </h3>

      <h2 class="text-2xl md:text-4xl font-extrabold text-brand-light mb-3 uppercase tracking-wide">
        Te devolvemos tu tranquilidad financiera
      </h2>

      <p class="text-brand-accent font-semibold text-sm md:text-lg uppercase tracking-wide">
        Defendemos tus derechos administrativos y financieros
      </p>

    </div>
  </section>
</template>

<script setup>
import { Gavel, Users, Scale } from 'lucide-vue-next'

useHead({
  title: 'Nosotros | Liberalegal',
  meta: [
    { name: 'description', content: 'Conoce al equipo de expertos detrás de Liberalegal.' }
  ]
})
</script>
