<template>
  <div class="bg-brand-light min-h-screen">

    <!-- Hero Section (Corporate Style) -->
    <section class="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 flex items-center bg-brand-navy overflow-hidden">
      <!-- Imagen de fondo -->
      <div class="absolute inset-0 z-0">
        <img src="/hero-img.jpg" alt="LIBERA Legal" class="w-full h-full object-cover object-center opacity-40" />
        <div class="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent"></div>
      </div>

      <!-- Decoración fondo -->
      <div
        class="absolute inset-0 z-0 bg-gradient-to-br from-brand-green/30 to-transparent opacity-60 mix-blend-overlay">
      </div>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

        <div
          class="inline-block px-4 py-1.5 rounded-full border border-brand-light/20 bg-white/10 backdrop-blur-sm text-brand-light text-sm font-semibold mb-6 shadow-xl animate-fade-in uppercase tracking-wider">
          Evaluación Gratuita · Sin Compromiso
        </div>

        <h1
          class="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up"
          style="animation-delay: 0.1s">
          Descubre si la ley te permite <span class="text-green-500">borrar</span> tus deudas
        </h1>

        <p class="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl font-light leading-relaxed animate-slide-up"
          style="animation-delay: 0.2s">
          Responde 7 preguntas y recibe en 24 horas un informe de Factibilidad Técnica-judicial
        </p>

        <!-- Pills / Etiquetas -->
        <div class="flex flex-wrap justify-center gap-3 mb-10 animate-slide-up" style="animation-delay: 0.3s">
          <span
            class="bg-green-500/10 border border-green-500/20 text-white rounded-full px-5 py-2 font-semibold text-sm backdrop-blur-sm">✓
            Sin costo</span>
          <span
            class="bg-green-500/10 border border-green-500/20 text-white rounded-full px-5 py-2 font-semibold text-sm backdrop-blur-sm">✓
            Confidencial</span>
          <span
            class="bg-green-500/10 border border-green-500/20 text-white rounded-full px-5 py-2 font-semibold text-sm backdrop-blur-sm">✓
            Cobertura en todo Chile</span>
          <span
            class="bg-green-500/10 border border-green-500/20 text-white rounded-full px-5 py-2 font-semibold text-sm backdrop-blur-sm">✓
            Sin datos bancarios/Sin RUT</span>
        </div>

        <NuxtLink to="/evaluacion"
          class="inline-flex justify-center items-center gap-2 px-10 py-5 bg-green-500 hover:bg-brand-light hover:text-brand-dark text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-brand-green/30 text-xl hover:scale-105 hover:-translate-y-1 duration-300 animate-slide-up uppercase tracking-wide"
          style="animation-delay: 0.4s">
          Evaluar mi caso ahora
          <ArrowRight class="w-6 h-6" />
        </NuxtLink>
        <p class="text-brand-light/60 mt-4 text-sm font-medium animate-slide-up" style="animation-delay: 0.5s">Informe
          personalizado - revisión experta en 24 horas</p>
      </div>
    </section>

    <!-- Trust Bar -->
    <section class="w-full bg-white text-brand-dark py-24 px-4 shadow-md relative z-20">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center">
        <div class="flex-1 flex flex-col items-center">
          <h3 class="font-bold text-2xl text-brand-green mb-2">Ley 20.720</h3>
          <p class="text-brand-muted leading-tight font-medium">Marco legal que protege al deudor en Chile</p>
        </div>
        <div class="hidden md:block w-px h-16 bg-gray-200"></div>
        <div class="flex-1 flex flex-col items-center">
          <h3 class="font-bold text-2xl text-brand-green mb-2">48 hrs</h3>
          <p class="text-brand-muted leading-tight font-medium">Tiempo máximo para que un abogado te contacte</p>
        </div>
        <div class="hidden md:block w-px h-16 bg-gray-200"></div>
        <div class="flex-1 flex flex-col items-center">
          <h3 class="font-bold text-2xl text-brand-green mb-2">$0</h3>
          <p class="text-brand-muted leading-tight font-medium">Costo de la evaluación y primera consulta</p>
        </div>
      </div>
    </section>

    <!-- Urgencia -->
    <section class="w-full bg-brand-light py-20 px-4">
      <div class="max-w-5xl mx-auto bg-white rounded-3xl p-10 md:p-14 shadow-xl text-center border border-gray-100">
        <div
          class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-green/10 text-brand-green mb-6">
          <AlertCircle class="w-8 h-8" />
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 tracking-tight leading-tight">
          No importa el origen de tu deuda: ya sea bancaria, comercial, educativa o de salud.
        </h2>
        <p class="text-xl text-gray-600 mb-8 font-medium max-w-4xl mx-auto leading-relaxed">
          La Ley de Insolvencia y Reemprendimiento permite a personas naturales iniciar un proceso legal para renegociar
          o eliminar deudas.
        </p>
        <div
          class="inline-block bg-green-500/10 border border-green-500 text-green-500 px-8 py-3 rounded-full font-bold text-lg">
          Muchas personas no saben que califican.
        </div>
      </div>
    </section>

    <!-- Cómo Funciona -->
    <section class="w-full py-24 px-4 bg-brand-navy relative overflow-hidden text-white">
      <div class="absolute inset-0 z-0 bg-gradient-to-t from-brand-dark/50 to-transparent"></div>

      <div class="max-w-6xl mx-auto relative z-10">
        <div class="mb-20 text-center">
          <span
            class="bg-green-500/10 border border-green-500/20 text-green-500 rounded-full px-5 py-2 font-semibold text-lg backdrop-blur-sm">Cómo
            funciona</span>
          <h2 class="text-4xl md:text-5xl mt-6 font-bold tracking-tight">De la duda al plan de acción en 3 pasos</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Paso 1 -->
          <div
            class="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-10 hover:bg-white/10 transition-colors">
            <div
              class="w-14 h-14 bg-green-500/90 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-lg">
              1</div>
            <h3 class="text-2xl font-bold mb-4">Responde 7 preguntas</h3>
            <p class="text-gray-300 font-light text-lg leading-relaxed">Sin RUT ni datos bancarios. Solo tu situación
              financiera básica para evaluar tu caso.</p>
          </div>
          <!-- Paso 2 -->
          <div
            class="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-10 hover:bg-white/10 transition-colors md:mt-8">
            <div
              class="w-14 h-14 bg-green-500/90 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-lg">
              2</div>
            <h3 class="text-2xl font-bold mb-4">Recibe tu informe</h3>
            <p class="text-gray-300 font-light text-lg leading-relaxed">En segundos obtienes un informe de viabilidad
              con los procedimientos jurídicos que la ley pone a tu disposición.</p>
          </div>
          <!-- Paso 3 -->
          <div
            class="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-10 hover:bg-white/10 transition-colors md:mt-16">
            <div
              class="w-14 h-14 bg-green-500/90 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-lg">
              3</div>
            <h3 class="text-2xl font-bold mb-4">Habla con un abogado</h3>
            <p class="text-gray-300 font-light text-lg leading-relaxed">Te contactamos en máximo 48 hrs para revisar tu
              informe y explicar tus opciones reales sin costo.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Qué Recibes -->
    <section class="w-full py-24 px-4 bg-brand-navy relative overflow-hidden">
      <!-- Imagen de fondo con gradiente oscuro a la izquierda -->
      <div class="absolute inset-0 z-0">
        <img src="/nos.jpg" alt="Qué recibes" class="w-full h-full object-cover object-center opacity-60" />
        <div class="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/20"></div>
      </div>

      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div class="flex-1">
          <span class="text-green-500 font-bold uppercase tracking-widest text-sm mb-4 block">Qué recibes</span>
          <h2 class="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight leading-tight">Tu informe de
            viabilidad incluye</h2>
          <NuxtLink to="/evaluacion"
            class="hidden lg:inline-flex justify-center items-center gap-2 px-8 py-4 bg-green-500/90 hover:bg-white text-white hover:text-brand-navy font-bold rounded-xl transition-all shadow-xl hover:shadow-brand-green/30 text-lg hover:scale-105 hover:-translate-y-1 duration-300 uppercase tracking-wide">
            Quiero mi informe
            <ArrowRight class="w-5 h-5" />
          </NuxtLink>
        </div>

        <div class="flex-1 w-full">
          <div class="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
            <div class="border-b border-gray-100 pb-8 mb-8">
              <div class="flex items-center gap-4 mb-4">
                <div class="p-3 bg-brand-green/10 rounded-xl text-brand-green">
                  <FileText class="w-8 h-8" />
                </div>
                <h3 class="text-2xl font-bold text-brand-dark">Informe de Factibilidad Técnica-Judicial</h3>
              </div>
            </div>
            <ul class="space-y-6">
              <li class="flex items-start gap-4">
                <CheckCircle2 class="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span class="font-medium text-gray-700 text-lg">Evaluación de criterios de viabilidad según Ley 20.720
                  de Insolvencia y Reemprendimiento</span>
              </li>
              <li class="flex items-start gap-4">
                <CheckCircle2 class="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span class="font-medium text-gray-700 text-lg">Procedimientos jurídicos que la ley pone a disposición
                  para tu situación específica</span>
              </li>
              <li class="flex items-start gap-4">
                <CheckCircle2 class="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span class="font-medium text-gray-700 text-lg">Próximas acciones concretas recomendadas por el estudio
                  jurídico</span>
              </li>
            </ul>
          </div>
        </div>
        <NuxtLink to="/evaluacion"
          class="lg:hidden w-full flex justify-center items-center gap-2 px-8 py-4 bg-brand-navy hover:bg-brand-green text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-brand-green/30 text-lg mt-8 uppercase tracking-wide">
          Quiero mi informe
          <ArrowRight class="w-5 h-5" />
        </NuxtLink>
      </div>
    </section>

    <!-- Preguntas Frecuentes -->
    <section class="w-full py-24 px-4 bg-white relative">
      <div class="max-w-4xl mx-auto">
        <div class="mb-16 text-center">
          <span class="text-brand-green font-bold uppercase tracking-widest text-sm mb-4 block">Preguntas
            frecuentes</span>
          <h2 class="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">Lo que más nos preguntan antes de
            empezar</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-brand-light/50 border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold mb-3 text-brand-dark">¿Esto me obliga a contratar?</h3>
            <p class="text-gray-600 font-medium">No. La evaluación es gratuita y sin compromiso. Decides tú si continuar
              con el proceso.</p>
          </div>
          <div class="bg-brand-light/50 border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold mb-3 text-brand-dark">¿Por qué el informe tarda hasta 24 horas y no es
              inmediato?</h3>
            <p class="text-gray-600 font-medium">Porque no creemos en soluciones masivas de software. Cada situación
              financiera en Chile es única. Para garantizarte opciones reales y un documento técnico-judicial con
              validez, un miembro de nuestro equipo legal revisa personalmente tus respuestas antes de emitir el informe
              con el membrete de Libera Legal.</p>
          </div>
          <div class="bg-brand-light/50 border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold mb-3 text-brand-dark">¿Mis datos están seguros?</h3>
            <p class="text-gray-600 font-medium">Tu información es confidencial y solo la usa el estudio para
              contactarte directamente.</p>
          </div>
          <div class="bg-brand-light/50 border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold mb-3 text-brand-dark">¿Atienden a personas de regiones fuera de Santiago?</h3>
            <p class="text-gray-600 font-medium">Sí, absolutamente. Libera Legal cuenta con cobertura nacional. Gracias
              a la digitalización de los Tribunales de Justicia y de la Tesorería General de la República (TGR), podemos
              tramitar y defender tu caso en cualquier región de Chile de forma 100% online y sin que tengas que salir
              de tu hogar.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="w-full py-32 px-4 bg-brand-navy text-center relative overflow-hidden">
      <!-- Decoración de fondo -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-brand-green/20 rounded-full z-0">
      </div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-brand-green/20 rounded-full z-0">
      </div>

      <div class="max-w-4xl mx-auto relative z-10">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
          Tu tranquilidad financiera <br><span class="text-green-500 block mt-2">tiene una salida legal. Da el primer
            paso para proteger tu patrimonio y empezar de nuevo.</span>
        </h2>
        <NuxtLink to="/evaluacion"
          class="inline-flex justify-center items-center gap-2 px-12 py-5 bg-green-500 hover:bg-brand-light hover:text-brand-dark text-white font-bold rounded-xl transition-all shadow-[0_0_40px_rgba(58,90,64,0.4)] hover:shadow-[0_0_60px_rgba(58,90,64,0.6)] text-xl hover:scale-105 hover:-translate-y-1 duration-300 uppercase tracking-wide">
          Comenzar mi evaluación gratuita
          <ArrowRight class="w-6 h-6" />
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
import { CheckCircle, AlertCircle, CheckCircle2, FileText, ArrowRight } from 'lucide-vue-next'

definePageMeta({
  layout: 'captacion'
})

useHead({
  title: 'LIBERA Deudas - Evaluación Gratuita',
  meta: [
    { name: 'description', content: 'Descubre si calificas para la eliminación o renegociación de deudas bajo la Ley 20.720 en 2 minutos.' }
  ]
})
</script>
