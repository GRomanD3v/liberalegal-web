<script setup>
import { Users, Gavel, FileCheck } from 'lucide-vue-next'
</script>

<template>
  <section id="about" class="py-24 bg-white relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-6 tracking-tight">Sobre Nosotros</h2>
        <p class="text-lg text-gray-600 leading-relaxed">
          Somos un equipo de abogados expertos en derecho administrativo y financiero. 
          Nuestra misión es democratizar el acceso a una defensa legal de calidad frente a instituciones como la Tesorería General de la República.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <!-- Feature 1 -->
        <div class="bg-brand-light/50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-brand-green/20 transition-all group">
          <div class="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Gavel class="w-8 h-8 text-brand-green" />
          </div>
          <h3 class="text-xl font-bold text-brand-dark mb-3">Expertise Legal</h3>
          <p class="text-gray-600 leading-relaxed">
            Conocemos a fondo el sistema institucional. Sabemos qué recursos presentar y en qué momento preciso hacerlo.
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="bg-brand-light/50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-brand-green/20 transition-all group">
          <div class="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Users class="w-8 h-8 text-brand-green" />
          </div>
          <h3 class="text-xl font-bold text-brand-dark mb-3">Atención Humana</h3>
          <p class="text-gray-600 leading-relaxed">
            No usamos respuestas automatizadas. Un abogado real de nuestro equipo analizará tu caso específico y te orientará.
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="bg-brand-light/50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-brand-green/20 transition-all group">
          <div class="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FileCheck class="w-8 h-8 text-brand-green" />
          </div>
          <h3 class="text-xl font-bold text-brand-dark mb-3">Soluciones Efectivas</h3>
          <p class="text-gray-600 leading-relaxed">
            Nos enfocamos en detener la cobranza abusiva y proteger tus devoluciones de impuestos y tu patrimonio.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
