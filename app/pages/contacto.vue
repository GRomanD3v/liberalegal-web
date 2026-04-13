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
          Hablemos de tu <span class="text-brand-accent">Caso</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Déjanos tus datos de contacto y un abogado del equipo te llamará para ofrecerte un diagnóstico confidencial.
        </p>
      </div>
    </div>

    <!-- Contenido -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto">

        <!-- Info Column -->
        <div class="bg-brand-dark p-12 text-white flex flex-col justify-between">
          <div>
            <h3 class="text-3xl font-bold mb-6 text-brand-light">Información</h3>
            <p class="text-gray-300 mb-10 leading-relaxed">
              La atención rápida es clave para detener embargos y retenciones fiscales. No dejes pasar más tiempo.
            </p>
            <div class="space-y-6">
              <div class="flex flex-col">
                <span class="text-sm text-brand-gold font-bold uppercase tracking-wider mb-1">Correo Electrónico</span>
                <span class="text-lg">contacto@liberalegal.cl</span>
              </div>
              <div class="flex flex-col">
                <span class="text-sm text-brand-gold font-bold uppercase tracking-wider mb-1">Teléfono Principal</span>
                <span class="text-lg">+56 9 1234 5678</span>
              </div>
              <div class="flex flex-col">
                <span class="text-sm text-brand-gold font-bold uppercase tracking-wider mb-1">Ubicación</span>
                <span class="text-lg">Providencia, Región Metropolitana, Chile</span>
              </div>
            </div>
          </div>
          <div class="mt-12 opacity-50 flex items-center gap-4">
            <img src="/logo-white.png" alt="Logo" class="h-8" />
          </div>
        </div>

        <!-- Form Column -->
        <div class="p-10 lg:p-12">

          <div v-if="errorMsg"
            class="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-medium text-sm">
            {{ errorMsg }}
          </div>

          <div v-if="showSuccess" class="h-full flex flex-col items-center justify-center text-center py-12">
            <h3 class="text-3xl font-extrabold text-brand-dark mb-4">¡Recibido exitosamente!</h3>
            <p class="text-gray-600 mb-8 px-4">
              La información sobre tu solicitud ha ingresado a nuestra base de datos. Nos pondremos en contacto
              prontamente.
            </p>
            <button @click="showSuccess = false" class="text-brand-green font-bold hover:underline">
              Enviar nueva consulta
            </button>
          </div>

          <form v-else @submit.prevent="submitForm" class="space-y-5">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Nombre Completo</label>
              <input v-model="form.fullName" type="text" required
                class="w-full px-5 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-gray-50 focus:bg-white text-gray-800">
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">RUT</label>
                <input v-model="form.rut" type="text" required
                  class="w-full px-5 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-gray-50 focus:bg-white text-gray-800">
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Teléfono Celular</label>
                <input v-model="form.phone" type="tel" required
                  class="w-full px-5 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-gray-50 focus:bg-white text-gray-800">
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Correo Electrónico</label>
              <input v-model="form.email" type="email" required
                class="w-full px-5 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-gray-50 focus:bg-white text-gray-800">
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Asunto / Situación Actual</label>
              <textarea v-model="form.message" rows="4"
                class="w-full px-5 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all resize-none bg-gray-50 focus:bg-white text-gray-800"></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting"
              class="w-full mt-4 bg-brand-green hover:bg-brand-dark text-white font-bold py-4 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed">
              {{ isSubmitting ? 'Procesando Envío...' : 'Enviar Inquietud Confidencial' }}
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const form = ref({
  fullName: '',
  rut: '',
  phone: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const errorMsg = ref('')

onMounted(() => {
  if (route.query.servicio) {
    const srv = route.query.servicio
    let msg = ''
    if (srv === 'cae') msg = 'Deseo consultar por la Defensa de Deuda CAE.'
    if (srv === 'prescripcion') msg = 'Deseo consultar por Prescripción de deudas.'
    if (srv === 'embargos') msg = 'Necesito ayuda urgente respecto a un Embargo.'
    if (srv === 'eliminacion') msg = 'Deseo consultar sobre eliminación de historial (Dicom).'

    if (msg) form.value.message = msg
  }
})

const validateRUT = (rut) => rut.length >= 8

const submitForm = async () => {
  errorMsg.value = ''
  if (!validateRUT(form.value.rut)) {
    errorMsg.value = 'El RUT es inválido. Por favor intenta nuevamente.'
    return
  }

  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))

  console.log('Contacto Multi-pagina:')
  console.log(form.value)

  isSubmitting.value = false
  showSuccess.value = true
  form.value = { fullName: '', rut: '', phone: '', email: '', message: '' }
}

useHead({
  title: 'Contacto | Liberalegal'
})
</script>
