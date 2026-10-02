<template>
  <div class="bg-brand-light min-h-screen">

    <!-- Hero Section (Corporate Style) -->
    <section class="relative w-full pt-2 pb-2 md:pt-24 md:pb-4 flex items-center bg-brand-navy overflow-hidden">
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
    <section class="w-full pt-2 px-4 sm:px-4 lg:px-6 bg-brand-navy relative">
      <div class="max-w-7xl mx-auto">
        <div class="mb-2 sm:mb-4 mx-auto py-4 px-5 sm:py-8 sm:px-8 rounded-2xl text-center">
          <p class="text-brand-green uppercase tracking-wider border inline-block bg-green-500/10 border-green-500 rounded-3xl py-2 px-4 sm:px-6 mb-4 text-xs sm:text-base font-semibold">Antes de comenzar</p>
          <h2 class="text-center text-2xl md:text-4xl font-bold text-brand-light tracking-wide pb-2">Confirma si tu situación corresponde a este procedimiento</h2>
          <p class="text-center text-brand-light/70 text-md sm:text-lg pt-2 max-w-4xl mx-auto leading-relaxed">No te pedimos ningún dato — solo que verifiques estos dos puntos antes de comenzar.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto bg-brand-light rounded-2xl sm:p-10 hover:shadow-md transition-shadow">
          <div class="py-8 px-4 sm:px-4 sm:py-8 text-justify border-b border-brand-navy/20 pb-8">
            <h3 class="text-xl sm:text-2xl font-bold mb-3 text-brand-green">¿Estás en insolvencia?</h3>
            <p class="text-brand-dark font-light">No basta con tener deudas para estar en insolvencia. Se trata de que tus ingresos actuales 
              ya no alcanzan para cubrir tus gastos básicos y, al mismo tiempo, cumplir tus obligaciones financieras. En nuestra experiencia 
              representando este tipo de casos, cuando más del 60% del ingreso mensual se destina al pago de deudas, la persona ya está en 
              esta situación, aunque logre "ir cumpliendo" mes a mes.</p>
          </div>
          <div class="py-8 px-4 sm:px-4 sm:py-8 text-justify">
            <h3 class="text-xl sm:text-2xl font-bold mb-3 text-brand-green">¿Estás dispuesto/a a entregar tus bienes?</h3>
            <span class="font-light text-brand-dark">El apego a lo propio es natural, y muchas personas dudan por eso. 
              Si tienes bienes inscritos a tu nombre —vivienda, vehículos, derechos hereditarios— debes saber que estos 
              también forman parte de lo que se liquidaría dentro del proceso, no solo el menaje del hogar. Si no tienes 
              bienes inscritos, en la práctica entregar bienes de menor valor (electrodomésticos, muebles, enseres del hogar) 
              suele bastar para extinguir deudas mucho mayores.</span>
          </div>

        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="w-full py-8 sm:py-12 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-brand-navy text-center relative overflow-hidden">
      <div class="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <!-- <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Tu tranquilidad financiera<span class="text-green-500 block">tiene una salida legal.</span>
        </h2> -->
        <p class="text-brand-light/70 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl animate-slide-up" style="animation-delay: 0.5s">
          Si ambas preguntas te representan, este puede ser tu camino. Si no, aún no es tu momento.</p>
        
        <NuxtLink to="/evaluacion"
          class="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-brand-green hover:bg-brand-green/90 text-brand-light font-bold rounded-xl transition-all shadow-xl hover:shadow-brand-green/30 text-lg sm:text-xl hover:scale-105 hover:-translate-y-1 duration-300 animate-slide-up uppercase tracking-wide"
          style="animation-delay: 0.4s">
          <span>Evaluar mi caso ahora</span>
          <ArrowRight class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
        </NuxtLink>
      </div>
    </section>

    <!-- Trust Bar -->
    <section class="w-full bg-brand-navy text-white pb-20 px-4 sm:px-6 lg:px-8 shadow-md relative z-20">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-stretch md:items-center gap-6 md:gap-10 text-center">
        <div class="flex-1 flex flex-col items-center justify-center bg-brand-light/5 py-8 px-6 rounded-xl border border-white/5">
          <h3 class="font-bold text-2xl text-brand-slate mb-2">Ley 20.720</h3>
          <p class="text-brand-slate leading-tight font-medium">Marco legal que protege al deudor en Chile</p>
        </div>
        <div class="flex-1 flex flex-col items-center justify-center bg-brand-light/5 py-8 px-6 rounded-xl border border-white/5">
          <h3 class="font-bold text-2xl text-brand-slate mb-2">48 hrs</h3>
          <p class="text-brand-slate leading-tight font-medium">Tiempo máximo para que un abogado te contacte</p>
        </div>
        <div class="flex-1 flex flex-col items-center justify-center bg-brand-light/5 py-8 px-6 rounded-xl border border-white/5">
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
   <!-- Preguntas Frecuentes -->
<section class="w-full py-24 px-4 bg-white relative">
  <div class="max-w-4xl mx-auto"> <!-- Cambié max-w-7xl a max-w-4xl para que el acordeón no quede demasiado ancho -->
    <div class="mb-16 text-center">
      <span class="text-brand-green font-bold uppercase tracking-widest text-sm mb-4 block">Preguntas frecuentes</span>
      <h2 class="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">Lo que más nos preguntan antes de empezar</h2>
    </div>

    <!-- Contenedor del Acordeón -->
    <div class="space-y-4">
      <div 
        v-for="(faq, index) in faqs" 
        :key="index"
        class="bg-brand-navy/10 border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
      >
        <!-- Botón del Acordeón -->
        <button 
          @click="toggleFaq(index)"
          class="w-full p-6 sm:p-8 text-left flex justify-between items-center focus:outline-none"
        >
          <h3 class="text-xl font-bold text-brand-dark pr-6">{{ faq.pregunta }}</h3>
          
          <!-- Ícono que gira cuando está abierto -->
          <ChevronDown 
            class="w-6 h-6 text-brand-green flex-shrink-0 transition-transform duration-300"
            :class="{ 'rotate-180': faqAbierta === index }"
          />
        </button>
        
        <!-- Contenido desplegable con transición nativa de Vue -->
        <transition 
          enter-active-class="transition-[grid-template-rows] duration-300 ease-out"
          leave-active-class="transition-[grid-template-rows] duration-300 ease-in"
          enter-from-class="grid-rows-[0]"
          enter-to-class="grid-rows-[1fr]"
          leave-from-class="grid-rows-[1fr]"
          leave-to-class="grid-rows-[0]"
        >
          <div v-show="faqAbierta === index" class="grid">
            <div class="overflow-hidden">
              <p class="text-gray-600 font-medium px-6 sm:px-8 pb-6 sm:pb-8 pt-0" v-html="faq.respuesta"></p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
// Añade ChevronDown o similar a tus importaciones de Lucide
import { CheckCircle, AlertCircle, CheckCircle2, FileText, ArrowRight, ChevronDown } from 'lucide-vue-next'

definePageMeta({
  layout: 'captacion'
})

useHead({
  title: 'LIBERA Deudas - Evaluación Gratuita',
  meta: [
    { name: 'description', content: 'Evalúa gratis si tu situación de insolvencia cumple los requisitos de la Ley 20.720. Responde 7 preguntas, sin RUT ni datos bancarios.' }
  ]
})

// Estado para controlar qué pregunta está abierta
const faqAbierta = ref(null)

const toggleFaq = (index) => {
  faqAbierta.value = faqAbierta.value === index ? null : index
}

// Array con la información que tenías hardcodeada en el HTML
const faqs = [
  {
    pregunta: '¿Esto me obliga a contratar?',
    respuesta: 'No. La evaluación es gratuita y sin compromiso. Decides tú si continuar con el proceso.'
  },
  {
    pregunta: '¿Por qué el informe tarda hasta 24 horas y no es inmediato?',
    respuesta: 'Porque no creemos en soluciones masivas de software. Cada situación financiera en Chile es única. Para garantizarte opciones reales y un documento técnico-judicial con validez, un miembro de nuestro equipo legal revisa personalmente tus respuestas antes de emitir el informe con el membrete de Libera Legal.'
  },
  {
    pregunta: '¿Mis datos están seguros?',
    respuesta: 'Tu información es confidencial y solo la usa el estudio para contactarte directamente.'
  },
  {
    pregunta: '¿Atienden a personas de regiones fuera de Santiago?',
    respuesta: 'Sí, absolutamente. Libera Legal cuenta con cobertura nacional. Gracias a la digitalización de los Tribunales de Justicia y de la Tesorería General de la República (TGR), podemos tramitar y defender tu caso en cualquier región de Chile de forma 100% online y sin que tengas que salir de tu hogar.'
  },
  {
    pregunta: '¿Me pueden meter preso por no pagar mis deudas?',
    respuesta: 'No. En Chile la prohibición de prisión por deudas tiene rango constitucional: está consagrada en el artículo 7, inciso 7° del Pacto de San José de Costa Rica (Convención Americana de Derechos Humanos), ratificado por Chile. Nadie va preso por no pagar una deuda comercial o de consumo.<br><br>Las excepciones que existen no sancionan la deuda en sí, sino otra conducta: el giro doloso de cheques (delito por el uso fraudulento de un instrumento bancario), el no pago de pensión de alimentos (por el interés superior del niño), y la apropiación indebida de cotizaciones previsionales retenidas por el empleador y no pagadas (por la protección de los derechos previsionales de los trabajadores).'
  },
  {
    pregunta: '¿Qué pasa con las cosas indispensables de mi casa?',
    respuesta: 'La ley protege los utensilios de cocina y los alimentos necesarios para el consumo de tu familia durante un mes — eso nunca se liquida. Lo que sí puede formar parte del proceso son electrodomésticos prescindibles, como un televisor, una cafetera o una freidora de aire, que en la práctica suelen bastar para extinguir deudas mucho mayores.'
  },
  {
    pregunta: '¿Qué pasa si ya tengo una demanda o un embargo en curso?',
    respuesta: 'Al ingresar tu solicitud de liquidación, se suspenden las acciones individuales de tus acreedores en tu contra — incluidos los embargos y juicios ejecutivos ya iniciados. No es que la deuda desaparezca de inmediato, pero las gestiones de cobro en tu contra se detienen mientras el procedimiento avanza.'
  },
  {
    pregunta: '¿Me pueden embargar mi sueldo?',
    respuesta: 'Tu remuneración está protegida hasta 56 UF — esa parte nunca es embargable. Sobre ese monto, el artículo 276 de la Ley 20.720 permite retener el excedente, pero solo por un máximo de tres meses consecutivos, no de forma indefinida. Y si ya tienes un embargo de sueldo vigente por una demanda, al ingresar tu solicitud de liquidación ese embargo queda suspendido junto con las demás acciones de tus acreedores.'
  },
  {
    pregunta: '¿Me siguen descontando el crédito de mi sueldo si tengo descuento por planilla?',
    respuesta: 'No. Una vez que la resolución que admite a trámite tu liquidación se publica en el Boletín Concursal, la entidad que te hace el descuento queda obligada a detenerlo. Desde ese momento vuelves a recibir tu remuneración completa.'
  },
  {
    pregunta: '¿Voy a poder salir del boletín comercial?',
    respuesta: 'Sí. Es una consecuencia legal de la resolución de término del procedimiento, aunque no ocurre de forma automática: requiere solicitarlo formalmente, algo que nuestro equipo gestiona como parte del servicio.'
  },
  {
    pregunta: '¿Necesito tener un contrato de trabajo formal para acogerme?',
    respuesta: 'No. La ley no exige contrato formal — lo relevante es que puedas acreditar de dónde provienen tus ingresos, algo que normalmente se resuelve con tu carpeta tributaria.'
  }
]
</script>
