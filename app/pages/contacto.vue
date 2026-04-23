<template>
  <div class="bg-brand-light min-h-screen pb-24">

    <!-- Header Section -->
    <div
      class="relative w-full border-b-8 border-b-brand-accent text-center pt-48 pb-48 px-4 sm:px-6 lg:px-8 shadow-lg mb-16 overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-r from-brand-green to-brand-dark">
        <img src="/justicia.jpg" alt="Fondo Justicia"
          class="w-full h-full object-cover mix-blend-multiply opacity-60" />
      </div>
      <div class="max-w-4xl mx-auto relative z-10" data-aos="fade">
        <h1 class="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          Hablemos de tu <span class="text-brand-accent">Caso</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Déjanos tus datos de contacto y un abogado del equipo te llamará para ofrecerte un diagnóstico confidencial.
        </p>
      </div>
    </div>

    <!-- Contenido -->
    <div class="max-w-6xl mx-auto px-4 pt-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

        <!-- Info Column -->
        <div class="flex flex-col">
          <h1 class="text-3xl font-extrabold text-brand-dark mb-8" data-aos="fade-down">Hablemos de tu caso</h1>

          <div class="space-y-8 text-gray-700">
            <div class="flex items-start" data-aos="fade-down" data-aos-delay="100">
              <MapPin class="w-6 h-6 text-brand-green mt-1 mr-4 shrink-0" />
              <div>
                <strong class="block text-brand-dark mb-1">Dirección:</strong>
                <span>Santiago, Región Metropolitana (Atención presencial previa cita).</span>
              </div>
            </div>

            <div class="flex items-start" data-aos="fade-down" data-aos-delay="200">
              <Clock class="w-6 h-6 text-brand-green mt-1 mr-4 shrink-0" />
              <div>
                <strong class="block text-brand-dark mb-1">Horario:</strong>
                <span>Lunes a Viernes de 09:00 a 18:00 hrs.</span>
              </div>
            </div>

            <div class="flex items-start" data-aos="fade-down" data-aos-delay="300">
              <Phone class="w-6 h-6 text-brand-green mt-1 mr-4 shrink-0" />
              <div>
                <strong class="block text-brand-dark mb-1">Teléfono:</strong>
                <span>+56 9 0000 0000</span>
              </div>
            </div>

            <div class="flex items-start" data-aos="fade-down" data-aos-delay="400">
              <Mail class="w-6 h-6 text-brand-green mt-1 mr-4 shrink-0" />
              <div>
                <strong class="block text-brand-dark mb-1">Correo:</strong>
                <span>contacto@liberalegal.cl</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Column -->
        <div class="bg-white p-8 rounded-lg shadow-md border border-gray-100" data-aos="fade-left">

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

          <form v-else @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label class="block text-sm mb-1 text-gray-700">Nombre Completo</label>
              <input v-model="form.fullName" type="text" required
                class="w-full px-4 py-3 rounded border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all">
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm mb-1 text-gray-700">RUT</label>
                <input v-model="form.rut" type="text" required
                  class="w-full px-4 py-3 rounded border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all">
              </div>
              <div>
                <label class="block text-sm mb-1 text-gray-700">Teléfono</label>
                <input v-model="form.phone" type="tel" required
                  class="w-full px-4 py-3 rounded border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all">
              </div>
            </div>

            <div>
              <label class="block text-sm mb-1 text-gray-700">Email</label>
              <input v-model="form.email" type="email" required
                class="w-full px-4 py-3 rounded border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all">
            </div>

            <div>
              <label class="block text-sm mb-1 text-gray-700">Tipo de Deuda</label>
              <select v-model="form.deuda" required
                class="w-full px-4 py-3 rounded border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all text-gray-700 bg-white">
                <option value="" disabled selected>Selecciona una opción</option>
                <option value="CAE">CAE</option>
                <option value="Bancaria">Bancaria</option>
                <option value="Retail">Retail</option>
                <option value="Otra">Otra</option>
              </select>
            </div>

            <div>
              <label class="block text-sm mb-1 text-gray-700">Mensaje o detalles de tu caso</label>
              <textarea v-model="form.message" rows="4" required
                class="w-full px-4 py-3 rounded border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all resize-none"></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting"
              class="w-full mt-2 bg-brand-green text-white py-3 rounded hover:bg-brand-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed font-semibold">
              {{ isSubmitting ? 'Enviando...' : 'Enviar Consulta Confidencial' }}
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
import { MapPin, Clock, Phone, Mail } from 'lucide-vue-next'

const route = useRoute()

const form = ref({
  fullName: '',
  rut: '',
  phone: '',
  email: '',
  deuda: '',
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
  form.value = { fullName: '', rut: '', phone: '', email: '', deuda: '', message: '' }
}

useHead({
  title: 'Contacto | Liberalegal'
})
</script>
