<template>
  <div class="bg-brand-light">
    <!-- Hero Section -->
    <section class="relative w-full h-[1000px] flex items-center pt-20">
      <!-- Background Image with Dark Overlay -->
      <div class="absolute inset-0 z-0 bg-brand-dark">
        <img src="/hero-img.jpg" alt="Defensa Legal Institucional"
          class="w-full h-full object-cover mix-blend-overlay opacity-60" />
      </div>

      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <!-- Text Column -->
        <div class="flex-1 text-white">
          <div
            class="inline-block px-4 py-1.5 rounded-full border-2 border-brand-light/30 bg-brand-navy backdrop-blur-sm text-sm font-semibold mb-6 shadow-xl">
            Estudio Jurídico Especializado
          </div>
          <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold leading-[1.15] mb-6 tracking-tight">
            Defensa legal frente al CAE y embargos estatales
          </h1>
          <p class="text-lg md:text-xl text-gray-300 mb-8 max-w-xl font-light leading-relaxed">
            Recupera tu tranquilidad financiera y asegura tu devolución de impuestos. Detenemos las acciones abusivas de
            cobranza con respaldo profesional y trato humano.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/servicios"
              class="inline-flex justify-center items-center px-8 py-4 border-2 border-brand-light/30 bg-brand-navy hover:bg-brand-green backdrop-blur-sm text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-brand-green/30 text-lg">
              Conoce Nuestros Servicios
            </NuxtLink>
            <NuxtLink to="/nosotros"
              class="inline-flex justify-center items-center px-8 py-4 border-2 border-brand-light/30 bg-brand-navy hover:bg-brand-green backdrop-blur-sm text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-brand-green/30 text-lg">
              Sobre Nosotros
            </NuxtLink>
          </div>
        </div>

        <!-- Quick Form Column -->
        <div class="w-full lg:w-[450px]">
          <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-t-[30px] border-brand-navy">
            <h3 class="text-2xl font-bold text-brand-dark mb-2">Consulta Inmediata</h3>
            <p class="text-gray-600 mb-6 text-sm leading-relaxed">Completa el formulario y un abogado te contactará para
              orientarte de manera confidencial.</p>
            <form class="space-y-4" @submit.prevent>
              <div>
                <input type="text" placeholder="Nombre Completo" required
                  class="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all bg-gray-50/50 focus:bg-white text-brand-dark">
              </div>
              <div class="grid grid-cols-2 gap-4">
                <input type="text" placeholder="RUT" required
                  class="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all bg-gray-50/50 focus:bg-white text-brand-dark">
                <input type="tel" placeholder="Teléfono" required
                  class="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all bg-gray-50/50 focus:bg-white text-brand-dark">
              </div>
              <button
                class="w-full bg-brand-dark hover:bg-brand-green text-white font-bold py-4 rounded-xl transition-colors shadow-lg mt-2 text-lg">
                Solicitar Análisis Legal
              </button>
              <p class="text-xs text-gray-400 text-center mt-4">Tus datos están protegidos por secreto profesional.</p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Bar -->
    <div class="w-full bg-gradient-to-r from-brand-green to-brand-navy py-16">
      <div class="max-w-7xl mx-auto px-4">

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div
            class="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2">
            <div class="bg-brand-light p-4 rounded-full mb-5 text-brand-green ring-4 ring-brand-light/50">
              <BadgeCheck class="w-10 h-10" />
            </div>
            <h3 class="font-bold text-xl text-brand-dark mb-3">Evaluación 100% Gratuita</h3>
            <p class="text-brand-muted leading-relaxed">
              Analizamos tu deuda y situación patrimonial sin costo inicial para diseñar la mejor estrategia legal.
            </p>
          </div>

          <div
            class="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2">
            <div class="bg-brand-light p-4 rounded-full mb-5 text-brand-green ring-4 ring-brand-light/50">
              <Landmark class="w-10 h-10" />
            </div>
            <h3 class="font-bold text-xl text-brand-dark mb-3">Especialistas en TGR</h3>
            <p class="text-brand-muted leading-relaxed">
              Expertos en detener retenciones de impuestos y frenar embargos de la Tesorería General de la República.
            </p>
          </div>

          <div
            class="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2">
            <div class="bg-brand-light p-4 rounded-full mb-5 text-brand-green ring-4 ring-brand-light/50">
              <ShieldCheck class="w-10 h-10" />
            </div>
            <h3 class="font-bold text-xl text-brand-dark mb-3">Confidencialidad Absoluta</h3>
            <p class="text-brand-muted leading-relaxed">
              Tu información financiera está estrictamente protegida bajo nuestro secreto profesional en todo momento.
            </p>
          </div>

        </div>
      </div>
    </div>

    <!-- Timeline Section -->
    <section class="py-24 relative overflow-hidden">
      <!-- Background element -->
      <div class="absolute right-0 top-1/4 w-1/3 h-1/2 bg-brand-green/5 rounded-l-full blur-3xl -z-10"></div>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
          <h2 class="text-3xl lg:text-4xl font-extrabold text-brand-dark mb-6 tracking-tight">Nuestro Proceso de Defensa
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">Un camino claro, transparente y estratégico para proteger
            tu patrimonio y asegurar tu salida legal.</p>
        </div>

        <div class="relative">
          <!-- Línea vertical central -->
          <div
            class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-[95%] top-2 w-1.5 bg-gradient-to-b from-brand-green to-brand-green/20 rounded-full">
          </div>

          <div class="space-y-16">
            <!-- Step 1 -->
            <div class="relative flex flex-col md:flex-row items-center">
              <div class="md:w-1/2 flex md:justify-end mb-8 md:mb-0 md:pr-16">
                <div
                  class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all text-right w-full md:w-[90%] relative group">
                  <div class="text-brand-green font-bold text-sm uppercase tracking-wider mb-2">Paso 1</div>
                  <h3 class="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-green transition-colors">
                    Análisis Previo</h3>
                  <p class="text-gray-600 leading-relaxed">Evaluamos exhaustivamente la viabilidad técnica y el estado
                    procesal actual de tu deuda frente a las tesorerías y organismos correspondientes.</p>
                </div>
              </div>
              <div
                class="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white border-4 border-brand-green rounded-full flex items-center justify-center text-brand-green font-extrabold text-xl shadow-lg z-10 md:flex">
                1</div>
              <div class="md:w-1/2 md:pl-16"></div>
            </div>

            <!-- Step 2 -->
            <div class="relative flex flex-col md:flex-row items-center">
              <div class="md:w-1/2 md:pr-16 hidden md:block"></div>
              <div
                class="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-brand-dark border-4 border-white rounded-full flex items-center justify-center text-white font-extrabold text-xl shadow-lg z-10 md:flex">
                2</div>
              <div class="md:w-1/2 flex md:justify-start mb-8 md:mb-0 md:pl-16">
                <div
                  class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all text-left w-full md:w-[90%] relative group">
                  <div class="text-brand-dark font-bold text-sm uppercase tracking-wider mb-2">Paso 2</div>
                  <h3 class="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-green transition-colors">
                    Estrategia Legal</h3>
                  <p class="text-gray-600 leading-relaxed">Construimos y diseñamos un plan de defensa judicial
                    personalizado que permita bloquear posibles o actuales embargos y retenciones de manera oportuna.
                  </p>
                </div>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="relative flex flex-col md:flex-row items-center">
              <div class="md:w-1/2 flex md:justify-end mb-8 md:mb-0 md:pr-16">
                <div
                  class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all text-right w-full md:w-[90%] relative group">
                  <div class="text-brand-green font-bold text-sm uppercase tracking-wider mb-2">Paso 3</div>
                  <h3 class="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-green transition-colors">
                    Ejecución Procesal</h3>
                  <p class="text-gray-600 leading-relaxed">Nuestros abogados ingresan tu carpeta técnica a tribunales e
                    inician un seguimiento minucioso y activo notificándote de los avances constantemente.</p>
                </div>
              </div>
              <div
                class="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white border-4 border-brand-green rounded-full flex items-center justify-center text-brand-green font-extrabold text-xl shadow-lg z-10 md:flex">
                3</div>
              <div class="md:w-1/2 md:pl-16"></div>
            </div>

            <!-- Step 4 -->
            <div class="relative flex flex-col md:flex-row items-center">
              <div class="md:w-1/2 md:pr-16 hidden md:block"></div>
              <div
                class="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-brand-green border-4 border-white rounded-full flex items-center justify-center text-white font-extrabold text-xl shadow-lg z-10 md:flex">
                4</div>
              <div class="md:w-1/2 flex md:justify-start md:pl-16">
                <div
                  class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-brand-green/20 transition-all text-left w-full md:w-[90%] relative group">
                  <div class="text-brand-green font-bold text-sm uppercase tracking-wider mb-2">Paso 4</div>
                  <h3 class="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-green transition-colors">
                    Resolución y Resguardo</h3>
                  <p class="text-gray-600 leading-relaxed">Logramos declarar la prescripción, alzamos embargos y
                    restituimos tus antecedentes para que salgas de los registros recuperando tu paz financiera.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="bg-gradient-to-r from-brand-green to-brand-navy py-16 text-center px-6">
      <h2 class="text-3xl font-bold text-brand-light mb-6">¿Listo para resolver tus deudas?</h2>
      <NuxtLink to="/contacto"
        class="inline-block px-8 py-4 bg-brand-navy text-white font-bold border-2 border-brand-light rounded-full hover:bg-brand-green/80 transition shadow-lg">
        Contactanos Ahora
      </NuxtLink>
    </div>

  </div>
</template>

<script setup>
import { BadgeCheck, Landmark, ShieldCheck } from 'lucide-vue-next'
useHead({
  title: 'Inicio | Liberalegal',
  meta: [
    { name: 'description', content: 'Soluciones legales y defensa especializada ante deudas CAE e instituciones financieras.' }
  ]
})
</script>
