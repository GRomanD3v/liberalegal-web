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
          class="inline-block px-4 py-1.5 rounded-full border border-brand-green/20 bg-green-500/20 backdrop-blur-sm text-white text-sm mb-6 shadow-xl animate-fade-in uppercase tracking-wider">
          Evaluación Gratuita · Sin Compromiso
        </div>

        <h1
          class="text-4xl/snug md:text-5xl/snug lg:text-7xl/tight font-bold text-white mb-6 animate-slide-up"
          style="animation-delay: 0.1s">
          Descubre si la ley te permite <span class="text-green-500">eliminar</span> tus deudas
        </h1>

        <p class="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl font-light leading-relaxed animate-slide-up"
          style="animation-delay: 0.2s">
          Responde 7 preguntas y recibe en 24 horas un informe de Factibilidad Técnica-judicial
        </p>

        <!-- Pills / Etiquetas -->
        <div class="flex flex-wrap justify-center gap-3 animate-slide-up" style="animation-delay: 0.3s">
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
      </div>
    </section>
    <!-- Antes de responder el test -->
    <section class="w-full pb-10 px-4 bg-brand-navy relative">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16 border border-white/30 bg-green-300/10 mx-auto py-10 px-10 rounded-2xl text-center">
          <p class="text-brand-green uppercase tracking-wider border inline-block bg-brand-green/10 border-green-500 rounded-3xl py-2 px-6 mb-4 text-base">Lee esta información importante</p>
          <h2 class="text-center text-2xl md:text-4xl font-bold text-brand-light tracking-wide pb-2">Antes de responder nuestro test</h2>
          <p class="text-justify text-brand-light/70 text-lg pt-2 max-w-4xl mx-auto">Queremos cuidar tu tiempo y ayudarte con total transparencia. Este rápido cuestionario de 3 minuto analizará tu situación financiera para verificar si cumples con las condiciones que exige la Ley 20.720 (Ley de Insolvencia).
            Al completarlo, sabrás de inmediato si tu caso es viable y evitarás perder tiempo en reuniones o asesorías con abogados si tu perfil no califica.
            Para que este proceso sea exitoso y definitivo, debes tener presentes dos reglas fundamentales:</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="border bg-brand-light border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold mb-3 text-brand-dark"> <span class="text-brand-green text-2xl">Regla 1:</span> Estar en verdadero estado de insolvencia</h3>
            <p class="text-brand-dark font-medium">Para acogerse a este procedimiento legal, no basta con tener deudas; <span class="font-bold">es necesario estar en estado de insolvencia.</span></p>
            <p class="text-brand-dark font-medium pt-4"><span class="font-bold">¿Qué significa estar en insolvencia?</span> Significa que tus ingresos actuales no te permiten cubrir tus gastos básicos de vida y, al mismo tiempo, pagar las cuotas de tus deudas. Es decir, cuando tu presupuesto mensual colapsó y te resulta técnicamente imposible cumplir con tus compromisos financieros.</p>
          </div>
          <div class="border bg-brand-light border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold mb-3 text-brand-dark"> <span class="text-brand-green text-2xl">Regla 2:</span> Disposición a entregar tu patrimonio para eliminar tus deudas</h3>
            <span class="font-bold text-brand-dark">*Si tienes bienes o derechos a tu nombre (casas, departamentos, vehículos, terrenos, derechos hereditarios, participación en sociedades, etc.):</span>
            <p class="text-brand-dark font-medium pt-4">Debes estar dispuesto/a a que estos activos sean entregados y liquidados dentro del proceso legal para saldar las deudas. Si tienes de alto valor que no deseas perder, este procedimiento no es la alternativa adecuada para ti.</p>
            <span class="text-brand-dark font-medium pt-4 block"><span class="font-bold">*Si NO tienes bienes inmuebles ni vehículos a tu nombre: </span>¡También puedes acogerte! La ley permite liquidar y eliminar la totalidad de tus deudas entregando bienes muebles básicos y enseres de tu hogar (como por ejemplo: un televisor, una lavadora, una cafetera, un juego de comedor, etc.).</span>
          </div>

        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="w-full py-2 pb-24 bg-brand-navy text-center relative overflow-hidden">
      <div class="max-w-7xl mx-auto relative z-10">
        <!-- <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Tu tranquilidad financiera<span class="text-green-500 block">tiene una salida legal.</span>
        </h2> -->
        <p class="max-w-4xl mx-auto text-brand-light/60 text-lg font-medium animate-slide-up" style="animation-delay: 0.5s">
          Si comprendes estas dos reglas y estás listo/a para dar el paso hacia tu tranquilidad financiera, responde las siguientes preguntas a continuación para evaluar tu caso de inmediato.
        </p>
        <br>
         <NuxtLink to="/evaluacion"
          class="inline-flex justify-center items-center gap-2 px-10 py-5 bg-brand-green hover:bg-brand-green hover:text-brand-light text-brand-light font-bold rounded-xl transition-all shadow-xl hover:shadow-brand-green/30 text-xl hover:scale-105 hover:-translate-y-1 duration-300 animate-slide-up uppercase tracking-wide"
          style="animation-delay: 0.4s">
          Evaluar mi caso ahora
          <ArrowRight class="w-6 h-6" />
        </NuxtLink>
        
      </div>
    </section>

    <!-- Trust Bar -->
    <section class="w-full bg-brand-navy text-white pb-20 shadow-md relative z-20">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center">
        <div class="flex-1 flex flex-col items-center bg-brand-light/5 py-8 px-6 rounded-xl">
          <h3 class="font-bold text-2xl text-brand-slate mb-2">Ley 20.720</h3>
          <p class="text-brand-slate leading-tight font-medium">Marco legal que protege al deudor en Chile</p>
        </div>
        <div class="flex-1 flex flex-col items-center bg-brand-light/5 py-8 px-6 rounded-xl">
          <h3 class="font-bold text-2xl text-brand-slate mb-2">48 hrs</h3>
          <p class="text-brand-slate leading-tight font-medium">Tiempo máximo para que un abogado te contacte</p>
        </div>
        <div class="flex-1 flex flex-col items-center bg-brand-light/5 py-8 px-6 rounded-xl">
          <h3 class="font-bold text-2xl text-brand-slate mb-2">$0</h3>
          <p class="text-brand-slate leading-tight font-medium">Costo de la evaluación y primera consulta</p>
        </div>
      </div>
    </section>

    <!-- Urgencia
    <section class="w-full bg-brand-light py-8 px-4">
      <div class="max-w-5xl mx-auto py-20 md:py-20 text-center">
        <div
          class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-green/10 text-brand-navy mb-6">
          <AlertCircle class="w-16 h-16" />
        </div>
        <h2 class="text-2xl md:text-3xl lg:text-4xl/tight text-brand-dark mb-6 flex flex-col">
          No importa el origen de tu deuda:<br>ya sea bancaria, comercial, educativa o de salud.
        </h2>
        <p class="text-xl text-gray-600 mb-8 font-medium max-w-4xl mx-auto leading-relaxed">
          La Ley de Insolvencia y Reemprendimiento permite a personas naturales iniciar un proceso legal para renegociar
          o eliminar deudas.
        </p>
        <div class="inline-block text-brand-navy px-8 py-3 font-bold text-2xl">
          Muchas personas no saben que califican.
        </div>
      </div>
    </section> -->

    <!-- Cómo Funciona -->
    <section class="w-full py-24 px-4 bg-brand-light relative overflow-hidden text-brand-navy">
      <div class="absolute inset-0 z-0"></div>

      <div class="max-w-6xl mx-auto relative z-10">
        <div class="mb-20 text-center">
          <span
            class="bg-green-500/10 border border-green-500/20 text-green-500 rounded-full px-5 py-2 text-xs font-bold uppercase">¿Cómo
            funciona?</span>
          <h2 class="text-3xl md:text-4xl mt-6 font-bold tracking-tight">De la duda al plan de acción en 3 pasos</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Paso 1 -->
          <div
            class="bg-brand-navy/5 border border-brand-green/10 rounded-2xl px-6 py-8 flex flex-col items-center text-center hover:bg-brand-navy/10 transition-colors">
            <div
              class="w-14 h-14 bg-brand-green/90 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-lg">
              1</div>
            <h3 class="text-2xl font-semibold mb-4">Responde 7 preguntas</h3>
            <p class="text-brand-navy font-light text-lg leading-relaxed">Sin RUT ni datos bancarios. Solo tu situación
              financiera básica para evaluar tu caso.</p>
          </div>
          <!-- Paso 2 -->
          <div
            class="bg-brand-navy/5 border border-brand-green/10 rounded-2xl px-6 py-8 flex flex-col items-center text-center hover:bg-brand-navy/10 transition-colors">
            <div
              class="w-14 h-14 bg-green-500/90 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-lg">
              2</div>
            <h3 class="text-2xl font-bold mb-4">Recibimos tus respuestas</h3>
            <p class="text-brand-navy font-light text-lg leading-relaxed">Nuestro equipo jurídico revisa personalmente tu caso y prepara tu informe de factibilidad.
              Lo recibirás en un plazo máximo de 24 horas.</p>
          </div>
          <!-- Paso 3 -->
          <div
            class="bg-brand-navy/5 border border-brand-green/10 rounded-2xl px-6 py-8 flex flex-col items-center text-center hover:bg-brand-navy/10 transition-colors">
            <div
              class="w-14 h-14 bg-green-500/90 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-lg">
              3</div>
            <h3 class="text-2xl font-bold mb-4">Habla con un abogado</h3>
            <p class="text-brand-navy font-light text-lg leading-relaxed">Te contactamos en máximo 48 hrs para revisar tu
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
          <span class="text-green-500 font-bold uppercase tracking-widest text-xs mb-4 inline-block bg-white/5 border border-green-500/20 rounded-full px-5 py-2">¿Qué recibes?</span>
          <h2 class="text-2xl md:text-4xl font-bold mb-8 text-white tracking-wide leading-tight">Tu informe de
            viabilidad incluye</h2>
          <NuxtLink to="/evaluacion"
            class="hidden lg:inline-flex justify-center items-center gap-2 px-8 py-4 bg-white hover:bg-green-500/90 text-black hover:text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-brand-green/30 text-base hover:scale-100 hover:-translate-y-1 duration-300 uppercase tracking-wide">
            Quiero mi informe
            <ArrowRight class="w-5 h-5 font-bold" />
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
      <div class="max-w-7xl mx-auto">
        <div class="mb-16 text-center">
          <span class="text-brand-green font-bold uppercase tracking-widest text-sm mb-4 block">Preguntas
            frecuentes</span>
          <h2 class="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">Lo que más nos preguntan antes de
            empezar</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-brand-navy/10 border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold mb-3 text-brand-dark">¿Esto me obliga a contratar?</h3>
            <p class="text-gray-600 font-medium">No. La evaluación es gratuita y sin compromiso. Decides tú si continuar
              con el proceso.</p>
          </div>
          <div class="bg-brand-navy/10 Border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold mb-3 text-brand-dark">¿Por qué el informe tarda hasta 24 horas y no es
              inmediato?</h3>
            <p class="text-gray-600 font-medium">Porque no creemos en soluciones masivas de software. Cada situación
              financiera en Chile es única. Para garantizarte opciones reales y un documento técnico-judicial con
              validez, un miembro de nuestro equipo legal revisa personalmente tus respuestas antes de emitir el informe
              con el membrete de Libera Legal.</p>
          </div>
          <div class="bg-brand-navy/10 border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold mb-3 text-brand-dark">¿Mis datos están seguros?</h3>
            <p class="text-gray-600 font-medium">Tu información es confidencial y solo la usa el estudio para
              contactarte directamente.</p>
          </div>
          <div class="bg-brand-navy/10 border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold mb-3 text-brand-dark">¿Atienden a personas de regiones fuera de Santiago?</h3>
            <p class="text-gray-600 font-medium">Sí, absolutamente. Libera Legal cuenta con cobertura nacional. Gracias
              a la digitalización de los Tribunales de Justicia y de la Tesorería General de la República (TGR), podemos
              tramitar y defender tu caso en cualquier región de Chile de forma 100% online y sin que tengas que salir
              de tu hogar.</p>
          </div>
        </div>
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
