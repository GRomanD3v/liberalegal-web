<script setup>
import { ShieldCheck, ArrowRight, Scale, Briefcase } from 'lucide-vue-next'

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="relative overflow-hidden bg-brand-light pt-32 pb-20 lg:pt-48 lg:pb-32">
    <!-- Decorative background elements -->
    <div class="absolute top-0 -left-64 w-[30rem] h-[30rem] bg-brand-accent/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
    <div class="absolute -top-32 -right-64 w-[30rem] h-[30rem] bg-brand-green/10 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
    
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">
      
      <!-- Text Content -->
      <div class="flex-1 text-center lg:text-left">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green font-semibold mb-6 border border-brand-green/20 shadow-sm">
          <ShieldCheck class="w-5 h-5" />
          <span>Defensa legal corporativa y personal</span>
        </div>
        
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark mb-6 leading-tight">
          Defendemos a los deudores del CAE ante la <span class="text-brand-green">Tesorería General</span>
        </h1>
        
        <p class="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
          Recupera tu tranquilidad y tu devolución de impuestos. Defensa legal especializada en retenciones y cobranzas estatales.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button @click="scrollToContact" class="inline-flex justify-center items-center gap-3 bg-brand-green hover:bg-brand-dark text-white text-lg px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-brand-green/30 transform hover:-translate-y-1">
            Analiza tu caso hoy
            <ArrowRight class="w-6 h-6" />
          </button>
        </div>
        
        <!-- Trust Indicators -->
        <div class="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-500 font-medium">
          <div class="flex items-center gap-2">
            <Scale class="w-5 h-5 text-brand-accent" />
            <span>Trato Humano</span>
          </div>
          <div class="flex items-center gap-2">
            <Briefcase class="w-5 h-5 text-brand-accent" />
            <span>Abogados Expertos</span>
          </div>
        </div>
      </div>
      
      <!-- Visual Element -->
      <div class="flex-1 w-full max-w-lg lg:max-w-none relative">
        <div class="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-brand-accent/20 rounded-3xl transform rotate-3 scale-105 filter blur-xl"></div>
        <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-8 sm:p-12">
          <!-- Conceptual Graphic inside Box -->
          <div class="flex flex-col items-center text-center space-y-6">
            <div class="w-20 h-20 bg-brand-green/10 rounded-2xl flex items-center justify-center transform rotate-3">
              <ShieldCheck class="w-10 h-10 text-brand-green" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-brand-dark mb-3">Protegemos tu patrimonio</h3>
              <p class="text-gray-600 leading-relaxed">
                Interponemos los recursos necesarios para frenar acciones de embargo y asegurar el respeto de tus derechos como deudor del estado.
              </p>
            </div>
            <div class="w-full bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Paz mental</span>
                <span class="text-brand-green font-bold text-lg">100%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-brand-green h-2 rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>
