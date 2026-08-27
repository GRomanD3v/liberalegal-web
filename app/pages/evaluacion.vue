<template>
  <div class="bg-brand-light min-h-screen font-sans text-brand-dark selection:bg-brand-green selection:text-white">

    <!-- Header -->
    <div class="bg-brand-navy text-white pt-10 pb-16 px-4">
      <div class="max-w-4xl mx-auto">
        <div
          class="inline-block px-3 py-1 border border-green-500/50 rounded-full text-green-500 text-xs font-bold uppercase tracking-[0.1em] mb-4 bg-brand-dark">
          Evaluación Gratuita
        </div>
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold mb-5 tracking-[0.03em]">
          Informe de Factibilidad<br>
          <span class="font-bold text-green-500">Técnica - Judicial</span>
        </h1>
        <p class="text-brand-light/80 max-w-2xl leading-relaxed font-normal">
          Responde el siguiente cuestionario. En base a tus respuestas generaremos un informe preliminar de viabilidad
          conforme a la Ley N° 20.720 de Insolvencia y Reemprendimiento.
        </p>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm" v-if="!isDisqualified && !isSubmitted">
      <div class="max-w-4xl mx-auto px-4 py-8 flex items-center justify-between">
        <span class="text-base font-bold text-gray-500 uppercase tracking-widest">Avance del cuestionario</span>
        <span class="text-base font-bold text-brand-navy uppercase tracking-widest">Paso {{ currentStep }} de 7</span>
      </div>
      <div class="w-full h-1 bg-gray-100">
        <div class="h-full bg-brand-green transition-all duration-500 ease-out" :style="{ width: progressPercent + '%' }">
        </div>
      </div>
    </div>

    <!-- Main Container -->
    <main class="max-w-4xl mx-auto px-4 mt-16 relative z-10 pb-16">
      <div id="evaluacion-card" class="scroll-mt-6">

        <!-- PANTALLA DE DESCALIFICACIÓN -->
        <div v-if="isDisqualified"
          class="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-12 text-center animate-fade-in">
          <div class="w-20 h-20 bg-orange-50 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle class="w-10 h-10" />
          </div>
          <h2 class="text-2xl font-bold text-brand-dark mb-4">Caso No Viable para Liquidación Voluntaria</h2>
          <div class="max-w-xl mx-auto bg-orange-50 border border-orange-200 rounded-xl p-5 mb-8 text-left">
            <p class="text-sm font-semibold text-orange-800 mb-2">No cumples con los requisitos para acogerte al
              procedimiento de Liquidación Voluntaria Ley N° 20.720:</p>
            <p class="text-sm text-brand-dark leading-relaxed">{{ disqualificationReason }}</p>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://www.superir.gob.cl" target="_blank" rel="noopener"
              class="px-8 py-3 bg-brand-navy hover:bg-brand-green text-white font-bold rounded-xl transition-all text-center">
              Consultar Renegociación Gratuita en SUPERIR
            </a>
            <button @click="resetQuiz"
              class="px-6 py-3 text-gray-500 font-semibold hover:text-brand-dark border border-gray-200 rounded-xl transition-all">
              Reiniciar evaluación
            </button>
          </div>
        </div>

        <!-- PANTALLA DE ÉXITO -->
        <div v-else-if="isSubmitted"
          class="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in text-center p-12"
          id="seccion-informe">
          <div class="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check class="w-10 h-10" />
          </div>
          <h2 class="text-3xl font-bold text-brand-dark mb-4">¡Evaluación Completada con Éxito!</h2>
          <p class="text-gray-500 max-w-md mx-auto leading-relaxed mb-3">
            Se emitirá y remitirá tu <strong class="text-brand-dark">Informe de Factibilidad</strong> a la dirección de
            correo ingresada (<span class="text-brand-orange">{{ formData.email }}</span>).
          </p>
          <p class="text-gray-400 text-sm max-w-md mx-auto bg-gray-50 p-4 rounded-xl border border-gray-100 mb-8">
            Un especialista de Libera Legal revisará los pormenores de tu causa y te contactará en un plazo máximo de
            <strong class="text-brand-dark">24 horas hábiles</strong>.
          </p>
          <button @click="resetQuiz"
            class="px-8 py-4 bg-brand-navy hover:bg-brand-green text-white font-bold rounded-xl transition-all inline-flex items-center gap-2">
            Hacer una nueva evaluación
          </button>
        </div>

        <!-- TARJETA DE PASOS -->
        <div v-else class="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10">

          <!-- Botón Atrás -->
          <button v-if="currentStep > 1" @click="goBack"
            class="flex items-center gap-2 text-gray-400 hover:text-brand-dark text-sm font-medium mb-6 transition-all">
            <ChevronLeft class="w-4 h-4" />
            Atrás
          </button>

          <!-- PASO 1 — Tipo de deudor -->
          <section v-if="currentStep === 1" class="space-y-4">
            <h3 class="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">Pregunta 1 de 7</h3>
            <p class="font-bold text-brand-dark text-lg mb-6">¿A qué categoría perteneces?</p>
            <div class="space-y-3">
              <button @click="formData.tipoDeudor = 'persona_natural'; handleNextStep()"
                class="w-full flex items-center justify-between p-4 border border-gray-200 hover:border-brand-green/50 hover:bg-brand-green/5 rounded-lg cursor-pointer transition-all text-left">
                <span class="text-brand-dark font-medium">Persona Natural (Trabajador, pensionado o
                  independiente)</span>
                <ArrowRight class="w-4 h-4 text-brand-green shrink-0" />
              </button>
              <button @click="formData.tipoDeudor = 'empresa'; handleNextStep()"
                class="w-full flex items-center justify-between p-4 border border-gray-200 hover:border-orange-300 hover:bg-orange-50 rounded-lg cursor-pointer transition-all text-left">
                <span class="text-brand-dark font-medium">Empresa / Persona Jurídica</span>
                <ArrowRight class="w-4 h-4 text-gray-400 shrink-0" />
              </button>
            </div>
          </section>

          <!-- PASO 2 — Monto de deuda -->
          <section v-else-if="currentStep === 2" class="space-y-4">
            <h3 class="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">Pregunta 2 de 7</h3>
            <p class="font-bold text-brand-dark text-lg mb-6">¿A cuánto asciende la suma total de tus deudas?</p>
            <div class="space-y-3">
              <button @click="formData.montoDeuda = 'menos_6m'; handleNextStep()"
                class="w-full flex items-center justify-between p-4 border border-gray-200 hover:border-orange-300 hover:bg-orange-50 rounded-lg cursor-pointer transition-all text-left">
                <span class="text-brand-dark font-medium">Menos de $6.000.000 CLP</span>
                <ArrowRight class="w-4 h-4 text-gray-400 shrink-0" />
              </button>
              <button @click="formData.montoDeuda = '6m_15m'; handleNextStep()"
                class="w-full flex items-center justify-between p-4 border border-gray-200 hover:border-brand-green/50 hover:bg-brand-green/5 rounded-lg cursor-pointer transition-all text-left">
                <span class="text-brand-dark font-medium">Entre $6.000.000 y $15.000.000 CLP</span>
                <ArrowRight class="w-4 h-4 text-brand-green shrink-0" />
              </button>
              <button @click="formData.montoDeuda = 'mas_15m'; handleNextStep()"
                class="w-full flex items-center justify-between p-4 border border-gray-200 hover:border-brand-green/50 hover:bg-brand-green/5 rounded-lg cursor-pointer transition-all text-left">
                <span class="text-brand-dark font-medium">Más de $15.000.000 CLP</span>
                <ArrowRight class="w-4 h-4 text-brand-green shrink-0" />
              </button>
            </div>
          </section>

          <!-- PASO 3 — Situación laboral -->
          <section v-else-if="currentStep === 3" class="space-y-4">
            <h3 class="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">Pregunta 3 de 7</h3>
            <p class="font-bold text-brand-dark text-lg mb-6">¿Cuál es tu situación laboral e ingresos actuales?</p>

            <!-- Opciones principales -->
            <div v-if="formData.situacionLaboral !== 'cesante'" class="space-y-3">
              <button @click="formData.situacionLaboral = 'empleado'; handleNextStep()"
                class="w-full flex items-center justify-between p-4 border border-gray-200 hover:border-brand-green/50 hover:bg-brand-green/5 rounded-lg cursor-pointer transition-all text-left">
                <span class="text-brand-dark font-medium">Empleado Dependiente (Contrato)</span>
                <ArrowRight class="w-4 h-4 text-brand-green shrink-0" />
              </button>
              <button @click="formData.situacionLaboral = 'independiente'; handleNextStep()"
                class="w-full flex items-center justify-between p-4 border border-gray-200 hover:border-brand-green/50 hover:bg-brand-green/5 rounded-lg cursor-pointer transition-all text-left">
                <span class="text-brand-dark font-medium">Independiente / Boletas de Honorarios</span>
                <ArrowRight class="w-4 h-4 text-brand-green shrink-0" />
              </button>
              <button @click="formData.situacionLaboral = 'jubilado'; handleNextStep()"
                class="w-full flex items-center justify-between p-4 border border-gray-200 hover:border-brand-green/50 hover:bg-brand-green/5 rounded-lg cursor-pointer transition-all text-left">
                <span class="text-brand-dark font-medium">Pensionado / Jubilado</span>
                <ArrowRight class="w-4 h-4 text-brand-green shrink-0" />
              </button>
              <button @click="formData.situacionLaboral = 'cesante'"
                class="w-full flex items-center justify-between p-4 border border-orange-200 bg-orange-50 hover:border-orange-400 hover:bg-orange-100 rounded-lg cursor-pointer transition-all text-left">
                <span class="text-orange-800 font-medium">Cesante / Sin ingresos actuales</span>
                <ArrowRight class="w-4 h-4 text-brand-orange shrink-0" />
              </button>
            </div>

            <!-- Sub-pregunta si es cesante -->
            <div v-else class="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-4">
              <p class="text-sm text-brand-dark leading-relaxed">
                Al encontrarte cesante, ¿cuentas con un tercero o familiar que pueda financiar los honorarios del
                procedimiento legal?
              </p>
              <div class="flex flex-col sm:flex-row gap-3">
                <button @click="formData.tieneTerceroFinancia = true; handleNextStep()"
                  class="flex-1 py-3 bg-brand-navy hover:bg-brand-green text-white font-semibold rounded-xl transition-all">
                  Sí, cuento con respaldo
                </button>
                <button @click="formData.tieneTerceroFinancia = false; handleNextStep()"
                  class="flex-1 py-3 bg-gray-200 hover:bg-gray-300 text-brand-dark font-semibold rounded-xl transition-all">
                  No cuento con respaldo
                </button>
              </div>
            </div>
          </section>

          <!-- PASO 4 — Situación de bienes -->
          <section v-else-if="currentStep === 4" class="space-y-4">
            <h3 class="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">Pregunta 4 de 7</h3>
            <p class="font-bold text-brand-dark text-lg mb-6">¿Tienes bienes a tu nombre (casas, departamentos, autos,
              terrenos o derechos)?</p>
            <div class="space-y-3">
              <button @click="formData.situacionBienes = 'sin_bienes'; handleNextStep()"
                class="w-full flex items-center justify-between p-4 border border-gray-200 hover:border-brand-green/50 hover:bg-brand-green/5 rounded-lg cursor-pointer transition-all text-left">
                <span class="text-brand-dark font-medium">No tengo nada a mi nombre.</span>
                <ArrowRight class="w-4 h-4 text-brand-green shrink-0" />
              </button>
              <button @click="formData.situacionBienes = 'bienes_menor_deuda'; handleNextStep()"
                class="w-full flex items-center justify-between p-4 border border-gray-200 hover:border-brand-green/50 hover:bg-brand-green/5 rounded-lg cursor-pointer transition-all text-left">
                <span class="text-brand-dark font-medium">Tengo un auto o propiedad, pero lo que debo es muchísimo más
                  de lo que valen.</span>
                <ArrowRight class="w-4 h-4 text-brand-green shrink-0" />
              </button>
              <button @click="formData.situacionBienes = 'bienes_mayor_deuda'; handleNextStep()"
                class="w-full flex items-center justify-between p-4 border border-orange-200 bg-orange-50 hover:border-orange-400 hover:bg-orange-100 rounded-lg cursor-pointer transition-all text-left">
                <span class="text-orange-800 font-medium">Tengo una casa, auto o terreno que vale más que el total de
                  mis deudas.</span>
                <ArrowRight class="w-4 h-4 text-brand-orange shrink-0" />
              </button>
            </div>
          </section>

          <!-- PASO 5 — Bienes muebles -->
          <section v-else-if="currentStep === 5" class="space-y-4">
            <h3 class="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">Pregunta 5 de 7</h3>
            <p class="font-bold text-brand-dark text-lg mb-2">Requisito de Liquidación Voluntaria</p>
            <p class="text-gray-500 text-sm mb-6 leading-relaxed">
              La Ley N° 20.720 requiere la entrega de bienes muebles prescindibles (televisores, equipos electrónicos o
              electrodomésticos secundarios) para proceder a la extinción total de tus deudas.
            </p>
            <p class="font-semibold text-brand-dark mb-4">¿Estás dispuesto a incluir este tipo de bienes para lograr
              la eliminación completa de tus deudas?</p>
            <div class="flex flex-col sm:flex-row gap-3">
              <button @click="formData.dispuestoMuebles = true; handleNextStep()"
                class="flex-1 py-4 bg-brand-navy hover:bg-brand-green text-white font-bold rounded-xl transition-all shadow-md">
                Sí, estoy dispuesto
              </button>
              <button @click="formData.dispuestoMuebles = false; handleNextStep()"
                class="flex-1 py-4 bg-gray-100 hover:bg-gray-200 text-brand-dark font-bold rounded-xl transition-all">
                No estoy dispuesto
              </button>
            </div>
          </section>

          <!-- PASO 6 — Antecedentes judiciales -->
          <section v-else-if="currentStep === 6" class="space-y-6">
            <h3 class="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">Pregunta 6 de 7</h3>
            <p class="font-bold text-brand-dark text-lg mb-2">Antecedentes Judiciales y Presión Financiera</p>

            <!-- Sub-pregunta 1: demandas activas -->
            <div>
              <label class="block text-sm font-semibold text-brand-dark mb-3">¿Tienes demandas de cobranza activas,
                notificaciones judiciales o embargos en curso?</label>
              <div class="flex gap-3">
                <button @click="formData.tieneDemandas = true"
                  :class="formData.tieneDemandas === true ? 'bg-brand-navy text-white border-brand-navy' : 'bg-white text-brand-dark border-gray-200 hover:border-brand-navy/30'"
                  class="flex-1 py-3 border rounded-xl font-semibold transition-all">
                  Sí, estoy demandado
                </button>
                <button @click="formData.tieneDemandas = false"
                  :class="formData.tieneDemandas === false ? 'bg-brand-navy text-white border-brand-navy' : 'bg-white text-brand-dark border-gray-200 hover:border-brand-navy/30'"
                  class="flex-1 py-3 border rounded-xl font-semibold transition-all">
                  No tengo demandas
                </button>
              </div>
            </div>

            <!-- Sub-pregunta 2: descuento por planilla -->
            <div v-if="formData.tieneDemandas !== null">
              <label class="block text-sm font-semibold text-brand-dark mb-3">¿Te están descontando deudas
                directamente de tu sueldo o pensión (Cajas de Compensación, cooperativas o embargos)?</label>
              <div class="flex gap-3">
                <button @click="formData.descuentoPlanilla = true"
                  :class="formData.descuentoPlanilla === true ? 'bg-brand-navy text-white border-brand-navy' : 'bg-white text-brand-dark border-gray-200 hover:border-brand-navy/30'"
                  class="flex-1 py-3 border rounded-xl font-semibold transition-all">
                  Sí, tengo descuentos
                </button>
                <button @click="formData.descuentoPlanilla = false"
                  :class="formData.descuentoPlanilla === false ? 'bg-brand-navy text-white border-brand-navy' : 'bg-white text-brand-dark border-gray-200 hover:border-brand-navy/30'"
                  class="flex-1 py-3 border rounded-xl font-semibold transition-all">
                  No tengo descuentos
                </button>
              </div>
            </div>

            <!-- Sub-pregunta 3: trámite SUPERIR -->
            <div v-if="formData.descuentoPlanilla !== null">
              <label class="block text-sm font-semibold text-brand-dark mb-3">¿Mantienes un trámite activo o
                inconcluso de renegociación ante la SUPERIR?</label>
              <div class="flex gap-3">
                <button @click="formData.tramiteSuperir = true; handleNextStep()"
                  class="flex-1 py-3 border border-gray-200 hover:border-orange-300 hover:bg-orange-50 bg-white text-brand-dark rounded-xl font-semibold transition-all">
                  Sí, en trámite / inconcluso
                </button>
                <button @click="formData.tramiteSuperir = false; handleNextStep()"
                  class="flex-1 py-3 border border-gray-200 hover:border-brand-green/50 hover:bg-brand-green/5 bg-white text-brand-dark rounded-xl font-semibold transition-all">
                  No, nunca
                </button>
              </div>
            </div>
          </section>

          <!-- PASO 7 — Datos de contacto -->
          <section v-else-if="currentStep === 7" class="space-y-6">
            <div class="bg-green-50 border border-green-200 rounded-xl p-4 mb-2">
              <p class="text-green-800 font-semibold text-sm">✓ Tu perfil presenta alta viabilidad para el
                procedimiento de Liquidación Voluntaria.</p>
              <p class="text-green-700 text-xs mt-1">Ingresa tus datos para generar y emitir tu Informe de
                Factibilidad Legal.</p>
            </div>

            <h3 class="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">Pregunta 7 de 7</h3>
            <p class="font-bold text-brand-dark text-lg mb-4">Datos de Contacto</p>

            <form @submit.prevent="validateAndSubmit" class="space-y-5" novalidate>
              <div>
                <label class="block text-xs font-bold text-brand-dark uppercase mb-2">Nombre Completo (Nombre y
                  Apellido)</label>
                <input v-model="formData.nombre" @input="errors.nombre = ''" type="text"
                  placeholder="Ej: Juan Pérez Morales"
                  :class="errors.nombre ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : 'border-gray-200 focus:border-brand-green focus:ring-brand-green/20'"
                  class="w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all text-brand-dark bg-gray-50 focus:bg-white" />
                <p v-if="errors.nombre" class="text-red-500 text-xs mt-1">{{ errors.nombre }}</p>
              </div>
              <div>
                <label class="block text-xs font-bold text-brand-dark uppercase mb-2">Teléfono / WhatsApp
                  (Chile)</label>
                <input v-model="formData.telefono" @input="errors.telefono = ''" type="tel"
                  placeholder="+56 9 1234 5678 o 912345678"
                  :class="errors.telefono ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : 'border-gray-200 focus:border-brand-green focus:ring-brand-green/20'"
                  class="w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all text-brand-dark bg-gray-50 focus:bg-white" />
                <p v-if="errors.telefono" class="text-red-500 text-xs mt-1">{{ errors.telefono }}</p>
              </div>
              <div>
                <label class="block text-xs font-bold text-brand-dark uppercase mb-2">Correo Electrónico</label>
                <input v-model="formData.email" @input="errors.email = ''" type="email" placeholder="juan@ejemplo.cl"
                  :class="errors.email ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : 'border-gray-200 focus:border-brand-green focus:ring-brand-green/20'"
                  class="w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all text-brand-dark bg-gray-50 focus:bg-white" />
                <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
              </div>

              <p v-if="submitError"
                class="text-red-700 text-xs bg-red-50 border border-red-200 p-3 rounded-lg leading-relaxed">{{
                  submitError }}</p>

              <button type="submit" :disabled="isSubmitting"
                class="w-full px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-brand-green text-white hover:bg-brand-navy hover:-translate-y-1">
                <Loader2 v-if="isSubmitting" class="w-5 h-5 animate-spin" />
                {{ isSubmitting ? 'Enviando…' : 'Solicitar Informe de Factibilidad Gratuito' }}
                <ArrowRight v-if="!isSubmitting" class="w-5 h-5" />
              </button>
            </form>
          </section>

        </div>
      </div>
    </main>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { AlertTriangle, Check, ArrowRight, ChevronLeft, Loader2 } from 'lucide-vue-next'

definePageMeta({
  layout: 'captacion'
})

useHead({
  title: 'Informe de Factibilidad - LIBERA Legal',
})

// ── Estados de UI ──────────────────────────────────────────────────────────────
const currentStep = ref(1)
const isDisqualified = ref(false)
const disqualificationReason = ref('')
const isSubmitted = ref(false)
const isSubmitting = ref(false)
const submitError = ref('')

// ── Formulario ─────────────────────────────────────────────────────────────────
const formData = ref({
  tipoDeudor: '',
  montoDeuda: '',
  situacionLaboral: '',
  tieneTerceroFinancia: null,
  situacionBienes: '',
  dispuestoMuebles: null,
  tieneDemandas: null,
  descuentoPlanilla: null,
  tramiteSuperir: null,
  nombre: '',
  telefono: '',
  email: ''
})

const errors = ref({ nombre: '', telefono: '', email: '' })

// ── Atribución UTM ─────────────────────────────────────────────────────────────
// Metadata de origen de campaña — útil para cruzar leads con Google Ads (AG1/AG2/AG3).
// No es parte de la lógica legal; se envía al servidor para triage de conversiones.
const origen = ref({
  utm_source: '', utm_medium: '', utm_campaign: '',
  utm_content: '', utm_term: '', referrer: '', landing_url: ''
})

onMounted(() => {
  const route = useRoute()
  origen.value.utm_source = route.query.utm_source || ''
  origen.value.utm_medium = route.query.utm_medium || ''
  origen.value.utm_campaign = route.query.utm_campaign || ''
  origen.value.utm_content = route.query.utm_content || ''
  origen.value.utm_term = route.query.utm_term || ''
  origen.value.referrer = document.referrer || ''
  origen.value.landing_url = window.location.href
})

// ── Computed ───────────────────────────────────────────────────────────────────
const progressPercent = computed(() => (currentStep.value / 7) * 100)

// Scoring de prioridad comercial — se recalcula también en el servidor.
// Nunca confiar en un valor calculado en el cliente para triage interno.
const leadScore = computed(() => {
  if (formData.value.tieneDemandas === true || formData.value.descuentoPlanilla === true) return 'HOT_LEAD'
  if (formData.value.montoDeuda === 'mas_15m') return 'WARM_LEAD'
  return 'STANDARD'
})

// ── Navegación ─────────────────────────────────────────────────────────────────
const scrollToTop = () => {
  const el = document.getElementById('evaluacion-card')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const triggerDisqualification = (reason) => {
  disqualificationReason.value = reason
  isDisqualified.value = true
  scrollToTop()
}

const handleNextStep = () => {
  // Descalificaciones por paso — lógica de negocio auditada y cerrada.
  if (currentStep.value === 1 && formData.value.tipoDeudor === 'empresa') {
    return triggerDisqualification('Nuestro servicio está especializado exclusivamente en Personas Naturales. Para empresas aplican otros procedimientos contemplados en la Ley N° 20.720.')
  }
  if (currentStep.value === 2 && formData.value.montoDeuda === 'menos_6m') {
    return triggerDisqualification('Por montos de deuda inferiores a $6.000.000 CLP, los costos y honorarios del proceso no justifican iniciar una liquidación voluntaria. Te sugerimos optar por la renegociación gratuita en la SUPERIR.')
  }
  if (currentStep.value === 3 && formData.value.situacionLaboral === 'cesante' && formData.value.tieneTerceroFinancia === false) {
    return triggerDisqualification('El procedimiento de liquidación voluntaria requiere financiamiento para honorarios y tramitación legal. Al no contar con ingresos ni respaldo de un tercero, el proceso resulta inviable.')
  }
  if (currentStep.value === 4 && formData.value.situacionBienes === 'bienes_mayor_deuda') {
    return triggerDisqualification('Si el valor comercial de tus bienes es superior al monto total de tus deudas, la liquidación voluntaria expondría tu patrimonio innecesariamente. Te recomendamos el procedimiento de renegociación ante la SUPERIR.')
  }
  if (currentStep.value === 5 && formData.value.dispuestoMuebles === false) {
    return triggerDisqualification('La Ley N° 20.720 exige incluir bienes muebles prescindibles para extinguir el saldo insoluto de tus deudas. Sin esta condición, el tribunal no aprobará la liquidación.')
  }
  if (currentStep.value === 6 && formData.value.tramiteSuperir === true) {
    return triggerDisqualification('Si mantienes un procedimiento activo o inconcluso ante la SUPERIR, debes finalizar dicha instancia administrativa antes de iniciar un procedimiento judicial de liquidación voluntaria.')
  }
  currentStep.value++
  scrollToTop()
}

// Navegación hacia atrás con rollback de sub-estados en el paso 6.
// Evita que un toque accidental (especialmente en mobile) obligue a reiniciar toda la evaluación.
const goBack = () => {
  if (currentStep.value === 6) {
    if (formData.value.tramiteSuperir !== null) {
      formData.value.tramiteSuperir = null
      return
    }
    if (formData.value.descuentoPlanilla !== null) {
      formData.value.descuentoPlanilla = null
      return
    }
    if (formData.value.tieneDemandas !== null) {
      formData.value.tieneDemandas = null
      return
    }
  }
  if (currentStep.value === 3 && formData.value.situacionLaboral === 'cesante') {
    formData.value.situacionLaboral = ''
    formData.value.tieneTerceroFinancia = null
    return
  }
  if (currentStep.value > 1) {
    currentStep.value--
    scrollToTop()
  }
}

// ── Envío del formulario ───────────────────────────────────────────────────────
const buildPayload = () => ({
  contacto: {
    nombre: formData.value.nombre.trim(),
    telefono: formData.value.telefono.trim(),
    email: formData.value.email.trim()
  },
  respuestas: {
    tipoDeudor: formData.value.tipoDeudor,
    montoDeuda: formData.value.montoDeuda,
    situacionLaboral: formData.value.situacionLaboral,
    tieneTerceroFinancia: formData.value.tieneTerceroFinancia,
    situacionBienes: formData.value.situacionBienes,
    dispuestoMuebles: formData.value.dispuestoMuebles,
    tieneDemandas: formData.value.tieneDemandas,
    descuentoPlanilla: formData.value.descuentoPlanilla,
    tramiteSuperir: formData.value.tramiteSuperir
  },
  scoring: leadScore.value,
  origen: origen.value,
  timestamp: new Date().toISOString()
})

const validateAndSubmit = async () => {
  errors.value = { nombre: '', telefono: '', email: '' }
  let isValid = true

  const nameWords = formData.value.nombre.trim().split(/\s+/).filter(w => w.length > 0)
  if (nameWords.length < 2) {
    errors.value.nombre = 'Ingresa tu nombre y apellido completo.'
    isValid = false
  }

  // Acepta 9XXXXXXXX (9 dígitos) o 569XXXXXXXX (con código de país, 11 dígitos).
  const cleanPhone = formData.value.telefono.replace(/[\s\-\+]/g, '')
  const phoneRegex = /^(569\d{8}|9\d{8})$/
  if (!phoneRegex.test(cleanPhone)) {
    errors.value.telefono = 'Ingresa un celular chileno válido (9 dígitos, ej: 912345678).'
    isValid = false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.value.email.trim())) {
    errors.value.email = 'Ingresa un correo electrónico válido.'
    isValid = false
  }

  if (!isValid) return

  isSubmitting.value = true
  submitError.value = ''

  // Conversión Google Ads — se dispara justo antes del envío, cuando el lead ya validó sus datos.
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-18195127031/j3mGCOyekbUcEPe1juRD',
      'value': 1.0,
      'currency': 'CLP'
    })
  }

  try {
    await $fetch('/api/evaluacion', {
      method: 'POST',
      body: buildPayload()
    })
    isSubmitted.value = true
    setTimeout(() => {
      document.getElementById('seccion-informe')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  } catch (err) {
    // No mostrar éxito si el envío falla: perder un HOT_LEAD por un error silencioso
    // es el peor escenario posible para este funnel.
    submitError.value = 'No pudimos enviar tu evaluación. Revisa tu conexión e inténtalo nuevamente. Si el problema persiste, contáctanos directamente.'
  } finally {
    isSubmitting.value = false
  }
}

const resetQuiz = () => {
  currentStep.value = 1
  isDisqualified.value = false
  disqualificationReason.value = ''
  isSubmitted.value = false
  isSubmitting.value = false
  submitError.value = ''
  errors.value = { nombre: '', telefono: '', email: '' }
  formData.value = {
    tipoDeudor: '', montoDeuda: '', situacionLaboral: '', tieneTerceroFinancia: null,
    situacionBienes: '', dispuestoMuebles: null, tieneDemandas: null, descuentoPlanilla: null, tramiteSuperir: null,
    nombre: '', telefono: '', email: ''
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
