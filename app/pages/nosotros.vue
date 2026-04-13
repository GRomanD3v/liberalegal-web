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
      <!-- Pilares -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-10 rounded-xl shadow-md border border-gray-100 text-center">
          <div
            class="w-16 h-16 mx-auto bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center mb-6">
            <Gavel class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold text-brand-dark mb-4">Excelencia Técnica</h3>
          <p class="text-gray-600 leading-relaxed">
            Estudiamos las debilidades del sistema para usar la ley a tu favor. Presentamos acciones estratégicas con la
            máxima precisión jurídica.
          </p>
        </div>

        <div class="bg-white p-10 rounded-xl shadow-md border border-gray-100 text-center">
          <div
            class="w-16 h-16 mx-auto bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center mb-6">
            <Users class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold text-brand-dark mb-4">Cercanía y Transparencia</h3>
          <p class="text-gray-600 leading-relaxed">
            Creemos que la comunicación debe ser humana. Un abogado experto de nuestro equipo se hará cargo
            personalmente de tu expediente.
          </p>
        </div>

        <div class="bg-white p-10 rounded-xl shadow-md border border-gray-100 text-center">
          <div
            class="w-16 h-16 mx-auto bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center mb-6">
            <Scale class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold text-brand-dark mb-4">Justicia Económica</h3>
          <p class="text-gray-600 leading-relaxed">
            Nuestro mayor caso de éxito es devolverte la paz financiera y cuidar los bienes que tanto te costó
            construir.
          </p>
        </div>
      </div>

    </div>
  </div>
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
