<script setup>
import { ref } from 'vue'
import { Send, AlertCircle, CheckCircle2 } from 'lucide-vue-next'

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

const validateRUT = (rut) => {
  // basic length check for demo
  return rut.length >= 8
}

const submitForm = async () => {
  errorMsg.value = ''
  
  if (!validateRUT(form.value.rut)) {
    errorMsg.value = 'RUT inválido. Por favor revisa e intenta nuevamente.'
    return
  }

  isSubmitting.value = true

  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 1500))

  console.log('=== NUEVO CONTACTO RECIBIDO (PRUEBA) ===')
  console.log('Nombre:', form.value.fullName)
  console.log('RUT:', form.value.rut)
  console.log('Teléfono:', form.value.phone)
  console.log('Email:', form.value.email)
  console.log('Mensaje:', form.value.message)
  console.log('========================================')

  isSubmitting.value = false
  showSuccess.value = true

  // Reset after 5s
  setTimeout(() => {
    showSuccess.value = false
    form.value = {
      fullName: '', rut: '', phone: '', email: '', message: ''
    }
  }, 5000)
}
</script>

<template>
  <section id="contact" class="py-24 bg-brand-light relative overflow-hidden">
    <div class="absolute inset-y-0 right-0 w-1/2 bg-brand-green/5 rounded-l-full transform translate-x-1/3"></div>
    
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
        <div class="grid grid-cols-1 lg:grid-cols-5">
          
          <!-- Info panel -->
          <div class="lg:col-span-2 bg-brand-green p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div class="absolute top-0 right-0 -m-8 w-32 h-32 bg-white/10 rounded-full"></div>
            <div class="absolute bottom-0 left-0 -m-12 w-40 h-40 bg-brand-accent/20 rounded-full"></div>
            
            <div class="relative z-10">
              <h2 class="text-3xl font-extrabold mb-4">Inicia tu Defensa</h2>
              <p class="text-brand-light/90 mb-10 leading-relaxed text-lg">
                Rellena el formulario con tus datos para que uno de nuestros expertos revise tu caso sin compromiso.
              </p>
            </div>
            
            <div class="relative z-10 space-y-8">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
                  <span class="font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 class="font-bold text-xl mb-1">Análisis Previo</h4>
                  <p class="text-brand-light/80">Revisamos tu situación frente a la Tesorería en detalle.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
                  <span class="font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 class="font-bold text-xl mb-1">Contacto Directo</h4>
                  <p class="text-brand-light/80">Te contactamos para explicarte las opciones de defensa.</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Form panel -->
          <div class="lg:col-span-3 p-10 lg:p-12">
            <div v-if="errorMsg" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
              <AlertCircle class="w-6 h-6 text-red-500 flex-shrink-0" />
              <p class="text-red-700 font-medium">{{ errorMsg }}</p>
            </div>

            <div v-if="showSuccess" class="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-fade-in">
              <div class="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 class="w-12 h-12 text-brand-green" />
              </div>
              <h3 class="text-3xl font-extrabold text-brand-dark">¡Mensaje Enviado!</h3>
              <p class="text-lg text-gray-600 max-w-sm">
                Hemos recibido tu información. Un abogado revisará tu caso y te contactará a la brevedad.
              </p>
            </div>

            <form v-else @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="fullName" class="block text-sm font-semibold text-gray-700 mb-2">Nombre Completo</label>
                <input id="fullName" v-model="form.fullName" type="text" required class="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all text-gray-800 bg-gray-50/50 focus:bg-white" placeholder="Ej. Juan Pérez">
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="rut" class="block text-sm font-semibold text-gray-700 mb-2">RUT</label>
                  <input id="rut" v-model="form.rut" type="text" required class="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all text-gray-800 bg-gray-50/50 focus:bg-white" placeholder="12.345.678-9">
                </div>
                <div>
                  <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                  <input id="phone" v-model="form.phone" type="tel" required class="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all text-gray-800 bg-gray-50/50 focus:bg-white" placeholder="+56 9 1234 5678">
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Correo Electrónico</label>
                <input id="email" v-model="form.email" type="email" required class="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all text-gray-800 bg-gray-50/50 focus:bg-white" placeholder="tucorreo@ejemplo.com">
              </div>

              <div>
                <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">Comentarios o Detalles (Opcional)</label>
                <textarea id="message" v-model="form.message" rows="3" class="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 outline-none transition-all resize-none text-gray-800 bg-gray-50/50 focus:bg-white" placeholder="Cuéntanos brevemente tu situación actual..."></textarea>
              </div>

              <button type="submit" :disabled="isSubmitting" class="w-full bg-brand-green hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-all shadow-xl hover:shadow-brand-green/40 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 text-lg mt-4">
                <span v-if="isSubmitting">Enviando Datos...</span>
                <template v-else>
                  <span>Enviar Inquietud</span>
                  <Send class="w-5 h-5" />
                </template>
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
