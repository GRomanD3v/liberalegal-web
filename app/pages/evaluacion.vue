<template>
  <div class="bg-brand-light min-h-screen font-sans text-brand-dark selection:bg-brand-green selection:text-white">

    <!-- Header Formulario -->
    <div class="bg-brand-navy text-white pt-10 pb-16 px-4">
      <div class="max-w-4xl mx-auto">
        <div
          class="inline-block px-3 py-1 border border-green-500/50 rounded-full text-green-500 text-xs font-bold uppercase tracking-widest mb-4 bg-brand-dark">
          Evaluación Gratuita
        </div>
        <h1 class="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Informe de Factibilidad Técnica-Judicial</h1>
        <p class="text-brand-light/80 max-w-2xl leading-relaxed font-light">
          Responde el siguiente cuestionario. En base a tus respuestas generaremos un informe preliminar de viabilidad
          conforme a la Ley N° 20.720 de Insolvencia y Reemprendimiento.
        </p>
      </div>
    </div>

    <!-- Progress Bar Section -->
    <div class="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm" v-if="!informeGenerado">
      <div class="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <span class="text-xs font-bold text-gray-500 uppercase tracking-widest">Avance del cuestionario</span>
        <span class="text-xs font-bold text-brand-navy uppercase tracking-widest">{{ answeredCount }} de 7
          preguntas</span>
      </div>
      <div class="w-full h-1 bg-gray-100">
        <div class="h-full bg-brand-green transition-all duration-500 ease-out"
          :style="{ width: progressPercentage + '%' }"></div>
      </div>
    </div>

    <!-- MAIN CONTAINER -->
    <main class="max-w-4xl mx-auto px-4 -mt-8 relative z-10">

      <!-- CONTENEDOR FORMULARIO -->
      <div v-show="!informeGenerado" class="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10">

        <!-- Toggle Header -->
        <div class="flex items-center justify-between border-b border-gray-100 pb-6 mb-8 cursor-pointer"
          @click="formCollapsed = !formCollapsed">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 bg-brand-navy rounded-full flex items-center justify-center text-white shadow-inner">
              <FileText class="w-5 h-5" />
            </div>
            <div>
              <h2 class="font-bold text-lg text-brand-dark">Cuestionario de Pre-Evaluación</h2>
              <p class="text-gray-500 text-sm">7 preguntas — 2 minutos aprox.</p>
            </div>
          </div>
          <button class="p-2 bg-gray-50 text-gray-400 rounded-full hover:bg-gray-100 transition-all"
            :class="{ 'rotate-180': !formCollapsed }">
            <ChevronDown class="w-5 h-5 transition-transform" />
          </button>
        </div>

        <!-- Form Body -->
        <form v-show="!formCollapsed" @submit.prevent="generarInforme" class="space-y-12 transition-all">

          <!-- DATOS DE CONTACTO -->
          <section>
            <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">
              Datos de Contacto</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-xs font-bold text-brand-dark uppercase mb-2">Nombre Completo</label>
                <input v-model="form.nombre" type="text" required placeholder="Ej: Juan Pérez González"
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all text-brand-dark bg-gray-50 focus:bg-white" />
              </div>
              <div>
                <label class="block text-xs font-bold text-brand-dark uppercase mb-2">Número de Contacto</label>
                <input v-model="form.telefono" type="tel" required placeholder="Ej: +56 9 1234 5678"
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all text-brand-dark bg-gray-50 focus:bg-white" />
              </div>
              <div class="md:col-span-2">
                <label class="block text-xs font-bold text-brand-dark uppercase mb-2">Correo Electrónico</label>
                <input v-model="form.correo" type="email" required placeholder="Ej: juan.perez@correo.com"
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all text-brand-dark bg-gray-50 focus:bg-white" />
              </div>
            </div>
          </section>

          <!-- PREGUNTA 1 -->
          <section>
            <h3 class="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">Pregunta 1 de 7</h3>
            <p class="font-bold text-brand-dark text-lg mb-4">¿Cuál es el monto total aproximado de su deuda?</p>
            <div class="space-y-3">
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.deuda === 'excluye' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.deuda" value="excluye"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">Igual o menor a $6.000.000</span>
              </label>
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.deuda === 'medio' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.deuda" value="medio"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">Mayor a $6.000.000 y menor a $15.000.000</span>
              </label>
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.deuda === 'alto' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.deuda" value="alto"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">$15.000.000 o más</span>
              </label>
            </div>
          </section>

          <!-- PREGUNTA 2 -->
          <section>
            <h3 class="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">Pregunta 2 de 7</h3>
            <p class="font-bold text-brand-dark text-lg mb-4">¿Se encuentra en condiciones de cumplir con sus
              obligaciones financieras en relación a sus ingresos actuales?</p>
            <div class="space-y-3">
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.pago === 'si' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.pago" value="si"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">Sí, puedo cumplir con mis obligaciones</span>
              </label>
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.pago === 'no' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.pago" value="no"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">No, no puedo cumplir con mis obligaciones</span>
              </label>
            </div>
          </section>

          <!-- PREGUNTA 3 -->
          <section>
            <h3 class="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">Pregunta 3 de 7</h3>
            <p class="font-bold text-brand-dark text-lg mb-4">¿Cuál es su situación laboral o de actividad económica
              actual?</p>
            <div class="space-y-3">
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.laboral === 'independiente' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.laboral" value="independiente"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">Emito boletas de honorarios o desarrollo actividades
                  económicas de forma independiente (giro)</span>
              </label>
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.laboral === 'dependiente' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.laboral" value="dependiente"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">Soy trabajador dependiente y/o pensionado</span>
              </label>
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.laboral === 'cesante' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.laboral" value="cesante"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">Me encuentro cesante</span>
              </label>
            </div>
          </section>

          <!-- PREGUNTA 4 -->
          <section>
            <h3 class="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">Pregunta 4 de 7</h3>
            <p class="font-bold text-brand-dark text-lg mb-1">¿Se encuentra demandado actualmente por alguno de sus
              acreedores?</p>
            <p class="text-xs text-gray-500 mb-4 italic">Esta información permite determinar la urgencia y el tipo de
              estrategia a adoptar.</p>
            <div class="space-y-3">
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.demandado === 'si' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.demandado" value="si"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">Sí, tengo demanda activa</span>
              </label>
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.demandado === 'no' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.demandado" value="no"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">No</span>
              </label>
            </div>
          </section>

          <!-- PREGUNTA 5 -->
          <section>
            <h3 class="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">Pregunta 5 de 7</h3>
            <p class="font-bold text-brand-dark text-lg mb-4">¿Posee bienes a su nombre?</p>
            <div class="space-y-3">
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.bienes === 'si' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.bienes" value="si"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">Sí, tengo bienes (inmuebles, vehículos, terrenos,
                  derechos hereditarios)</span>
              </label>
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.bienes === 'no' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.bienes" value="no"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">No tengo bienes a mi nombre</span>
              </label>
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.bienes === 'transferidos' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.bienes" value="transferidos"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">Tuve bienes, pero los transferí o vendí en los últimos 2
                  años</span>
              </label>
            </div>
          </section>

          <!-- PREGUNTA 6 -->
          <section>
            <h3 class="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">Pregunta 6 de 7</h3>
            <p class="font-bold text-brand-dark text-lg mb-4">¿Ha solicitado su quiebra o intentado una renegociación
              ante la SUPERIR anteriormente?</p>
            <div class="space-y-3">
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.superir === 'reciente' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.superir" value="reciente"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">Sí, en los últimos 5 años</span>
              </label>
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.superir === 'incompleto' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.superir" value="incompleto"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">Inicié un trámite pero no lo terminé</span>
              </label>
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.superir === 'no' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.superir" value="no"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">No, es mi primera vez</span>
              </label>
            </div>
          </section>

          <!-- PREGUNTA 7 -->
          <section>
            <h3 class="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">Pregunta 7 de 7</h3>
            <p class="font-bold text-brand-dark text-lg mb-4">¿Tiene antecedentes penales por delitos concursales,
              contra la propiedad o estafa?</p>
            <div class="space-y-3">
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.penal === 'si' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.penal" value="si"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">Sí</span>
              </label>
              <label class="flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                :class="form.penal === 'no' ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:border-brand-green/30'">
                <input type="radio" v-model="form.penal" value="no"
                  class="w-5 h-5 text-brand-green focus:ring-brand-green" />
                <span class="ml-3 text-brand-dark font-medium">No</span>
              </label>
            </div>
          </section>

          <!-- Botón Generar -->
          <div class="pt-6 border-t border-gray-100 flex justify-between items-center">
            <button type="button" @click="resetForm"
              class="text-gray-500 font-semibold hover:text-brand-dark px-4 py-2">
              Limpiar
            </button>
            <button type="submit" :disabled="answeredCount < 7 || isGenerating"
              class="px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              :class="answeredCount === 7 ? 'bg-brand-green text-white hover:bg-brand-navy hover:-translate-y-1' : 'bg-gray-200 text-gray-400'">
              <Loader2 v-if="isGenerating" class="w-5 h-5 animate-spin" />
              {{ isGenerating ? 'Generando...' : 'Generar Informe' }}
              <ArrowRight v-if="!isGenerating" class="w-5 h-5" />
            </button>
          </div>

        </form>
      </div>

      <!-- MENSAJE DE ÉXITO -->
      <div v-if="informeGenerado"
        class="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in text-center p-12"
        id="seccion-informe">
        <div class="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check class="w-10 h-10" />
        </div>
        <h2 class="text-3xl font-bold text-brand-dark mb-4">¡Tus respuestas han sido recibidas con éxito!</h2>
        <button @click="resetForm"
          class="px-8 py-4 bg-brand-navy hover:bg-brand-green text-white font-bold rounded-xl transition-all inline-flex items-center gap-2">
          Hacer una nueva evaluación
        </button>
      </div>

    </main>

  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { FileText, ChevronDown, Check, ArrowRight, Loader2, AlertTriangle, X } from 'lucide-vue-next'

definePageMeta({
  layout: 'captacion'
})

useHead({
  title: 'Informe de Factibilidad - LIBERA Legal',
})

// UI States
const formCollapsed = ref(false)
const informeGenerado = ref(false)
const isGenerating = ref(false)

// Form State
const form = reactive({
  nombre: '',
  telefono: '',
  correo: '',
  deuda: null,
  pago: null,
  laboral: null,
  demandado: null,
  bienes: null,
  superir: null,
  penal: null
})

// Informe Data
const informe = reactive({
  estado: '',
  estadoLabel: '',
  titulo: '',
  texto: '',
  datos: {},
  criterios: [],
  acciones: []
})

const fechaActual = computed(() => {
  return new Date().toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })
})

const answeredCount = computed(() => {
  const keys = ['deuda', 'pago', 'laboral', 'demandado', 'bienes', 'superir', 'penal']
  let count = 0
  keys.forEach(k => {
    if (form[k]) count++
  })
  return count
})

const progressPercentage = computed(() => {
  return (answeredCount.value / 7) * 100
})

const resetForm = () => {
  form.nombre = ''
  form.telefono = ''
  form.correo = ''
  form.deuda = null
  form.pago = null
  form.laboral = null
  form.demandado = null
  form.bienes = null
  form.superir = null
  form.penal = null

  informeGenerado.value = false
  formCollapsed.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const generarInforme = async () => {
  if (answeredCount.value < 7) return

  isGenerating.value = true

  // Genera el objeto 'informe'
  procesarLogica()

  // Conversión Google Ads
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-18195127031/j3mGCOyekbUcEPe1juRD',
      'value': 1.0,
      'currency': 'CLP'
    });
  }

  try {
    // Enviar el correo usando nuestra API interna de Nuxt
    await $fetch('/api/send-report', {
      method: 'POST',
      body: {
        cliente: {
          nombre: form.nombre,
          telefono: form.telefono,
          correo: form.correo
        },
        informe: informe
      }
    })
  } catch (error) {
    console.error('Error enviando el informe por correo:', error)
  }

  isGenerating.value = false
  informeGenerado.value = true



  // Scroll to report
  setTimeout(() => {
    document.getElementById('seccion-informe')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, 100)
}

const procesarLogica = () => {
  let criterios = []
  let exclusiones = 0
  let evaluaciones = 0

  // 1. MONTO DEUDA
  if (form.deuda === 'excluye') {
    criterios.push({ tipo: 'bad', titulo: 'Monto de Deuda', texto: 'La deuda declarada no supera el mínimo de $6.000.000 exigido por la Ley 20.720. Criterio eliminatorio.' })
    exclusiones++
  } else {
    const label = form.deuda === 'alto' ? '$15.000.000 o más' : 'Entre $6.000.001 y $14.999.999'
    criterios.push({ tipo: 'ok', titulo: 'Monto de Deuda', texto: `Deuda declarada: ${label}. Supera el piso mínimo legal. Criterio cumplido.` })
  }

  // 2. CAPACIDAD DE PAGO
  if (form.pago === 'si') {
    criterios.push({ tipo: 'bad', titulo: 'Capacidad de Pago', texto: 'El deudor declara poder cumplir con sus obligaciones financieras. No se configura situación de insolvencia. Criterio eliminatorio.' })
    exclusiones++
  } else {
    criterios.push({ tipo: 'ok', titulo: 'Incapacidad de Pago', texto: 'Se declara imposibilidad de cumplir con las obligaciones financieras. Indicio de cesación de pagos. Criterio cumplido.' })
  }

  // 3. SITUACIÓN LABORAL
  const laboralLabels = { independiente: 'Trabajador independiente / giro', dependiente: 'Trabajador dependiente / pensionado', cesante: 'Cesante' }
  const laboralTipos = { independiente: 'ok', dependiente: 'ok', cesante: 'warn' }
  const laboralTextos = {
    independiente: 'Actividad económica independiente declarada. Aplica procedimiento de liquidación voluntaria del Título I de la Ley 20.720.',
    dependiente: 'Situación de dependencia laboral o pensión. Aplica procedimiento de renegociación de deudas.',
    cesante: 'Situación de cesantía declarada. Requiere análisis específico de fuentes de ingreso para determinar procedimiento aplicable.'
  }
  criterios.push({ tipo: laboralTipos[form.laboral], titulo: `Situación Laboral: ${laboralLabels[form.laboral]}`, texto: laboralTextos[form.laboral] })
  if (form.laboral === 'cesante') evaluaciones++

  // 4. DEMANDADO
  if (form.demandado === 'si') {
    criterios.push({ tipo: 'warn', titulo: 'Demanda Activa', texto: 'Existe demanda activa de uno o más acreedores. Requiere estrategia de defensa inmediata y posible suspensión de procedimientos ejecutivos.' })
    evaluaciones++
  } else {
    criterios.push({ tipo: 'ok', titulo: 'Sin Demanda Activa', texto: 'No existen demandas activas. Permite mayor tiempo para estructurar la estrategia procesal.' })
  }

  // 5. BIENES
  if (form.bienes === 'transferidos') {
    criterios.push({ tipo: 'warn', titulo: 'Bienes Transferidos en Últimos 2 Años', texto: 'La transferencia de bienes en los 2 años previos podría ser objeto de acción revocatoria por parte del tribunal o los acreedores. Sujeto a evaluación jurídica previa para determinar defensa de la transferencia y eventual revisión judicial.' })
    evaluaciones++
  } else if (form.bienes === 'si') {
    criterios.push({ tipo: 'warn', titulo: 'Bienes Declarados', texto: 'Posee bienes realizables a su nombre. Será necesario valorizar en consulta para determinar su impacto en el procedimiento de liquidación.' })
    evaluaciones++
  } else {
    criterios.push({ tipo: 'ok', titulo: 'Sin Bienes Realizables', texto: 'Sin bienes declarados a su nombre. Simplifica el procedimiento de liquidación conforme a la Ley 20.720.' })
  }

  // 6. SUPERIR
  if (form.superir === 'reciente') {
    criterios.push({ tipo: 'bad', titulo: 'Procedimiento SUPERIR Reciente', texto: 'Ha iniciado o completado un procedimiento ante la SUPERIR en los últimos 5 años. Criterio eliminatorio conforme a la Ley 20.720.' })
    exclusiones++
  } else if (form.superir === 'incompleto') {
    criterios.push({ tipo: 'warn', titulo: 'Trámite SUPERIR Incompleto', texto: 'Existe un trámite iniciado pero no concluido ante la SUPERIR. Requiere verificar fecha de inicio y estado actual para determinar viabilidad de nuevo procedimiento.' })
    evaluaciones++
  } else {
    criterios.push({ tipo: 'ok', titulo: 'Sin Procedimientos Anteriores SUPERIR', texto: 'Primera solicitud ante el sistema. Sin impedimentos por procedimientos anteriores. Criterio cumplido.' })
  }

  // 7. ANTECEDENTES PENALES
  if (form.penal === 'si') {
    criterios.push({ tipo: 'bad', titulo: 'Antecedentes Penales Relevantes', texto: 'Antecedentes por delitos concursales, contra la propiedad o estafa. Criterio eliminatorio conforme a requisitos de buena fe de la Ley 20.720.' })
    exclusiones++
  } else {
    criterios.push({ tipo: 'ok', titulo: 'Sin Antecedentes Penales Relevantes', texto: 'Sin antecedentes penales que obstaculicen el procedimiento. Criterio de buena fe cumplido.' })
  }

  // RESULTADOS
  if (exclusiones > 0) {
    informe.estado = 'excluido'
    informe.estadoLabel = 'No Viable'
    informe.titulo = 'El caso no reúne criterios de viabilidad inicial'
    const razones = criterios.filter(c => c.tipo === 'bad').map(c => c.titulo).join(', ')
    informe.texto = `Se detectaron ${exclusiones} criterio(s) eliminatorio(s): ${razones}. El caso no es procedente bajo la Ley N° 20.720 en las condiciones actuales declaradas. Se recomienda consulta para explorar alternativas de solución.`
    informe.acciones = [
      'Agendar consulta para analizar opciones alternativas fuera del procedimiento de insolvencia.',
      'Explorar posibilidad de negociación directa o refinanciamiento con acreedores.',
      'Revisar declaraciones para identificar si algún dato ingresado puede ser aclarado.'
    ]
  } else if (evaluaciones >= 2) {
    informe.estado = 'pending'
    informe.estadoLabel = 'Pendiente Evaluación'
    informe.titulo = 'Caso con indicios potenciales — requiere análisis profesional'
    informe.texto = `El caso supera los criterios eliminatorios, pero presenta ${evaluaciones} elemento(s) sujeto(s) a evaluación jurídica previa. La viabilidad dependerá del análisis profesional de esos factores. Se recomienda agendar consulta a la brevedad.`
    informe.acciones = [
      'Agendar consulta profesional para análisis jurídico de los elementos pendientes de evaluación.',
      'Reunir documentación de respaldo: contratos de deuda, notificaciones judiciales, liquidaciones de sueldo.',
      'En caso de bienes transferidos: recopilar contratos de compraventa y acreditar precio de mercado.',
      'En caso de trámite SUPERIR incompleto: obtener número de causa y fecha de inicio del procedimiento.'
    ]
  } else {
    informe.estado = 'viable'
    informe.estadoLabel = 'Preliminar Viable'
    informe.titulo = 'El caso reúne indicios iniciales de viabilidad'
    informe.texto = `Los antecedentes declarados cumplen los criterios técnicos preliminares de la Ley N° 20.720 de Insolvencia y Reemprendimiento. Se recomienda agendar consulta para análisis jurídico completo y determinación del procedimiento específico aplicable.`
    informe.acciones = [
      'Agendar consulta profesional para análisis jurídico completo y diseño de estrategia.',
      'Reunir documentación: contratos de deuda, última liquidación de sueldo, boletas de honorarios o documentos de actividad económica.',
      'Preparar listado completo de acreedores con montos adeudados y estado de cada obligación.',
      'En consulta se determinará el procedimiento específico aplicable (liquidación voluntaria o renegociación) y los plazos estimados.'
    ]
  }

  // DATOS PARA TABLA
  const bienesLabel = { si: 'Tiene bienes', no: 'Sin bienes', transferidos: 'Bienes transferidos (2 años)' }
  const superirLabel = { reciente: 'Sí, en últimos 5 años', incompleto: 'Trámite incompleto', no: 'Primera vez' }

  informe.datos = {
    'Monto de Deuda': form.deuda === 'alto' ? '$15.000.000 o más' : form.deuda === 'medio' ? '$6.000.001 – $14.999.999' : '≤ $6.000.000',
    'Capacidad de Pago': form.pago === 'si' ? 'Puede pagar' : 'No puede pagar',
    'Situación Laboral': laboralLabels[form.laboral],
    'Demandado': form.demandado === 'si' ? 'Sí' : 'No',
    'Bienes': bienesLabel[form.bienes],
    'Trámite SUPERIR': superirLabel[form.superir],
    'Antecedentes Penales': form.penal === 'si' ? 'Sí' : 'No'
  }

  informe.criterios = criterios
}
</script>
