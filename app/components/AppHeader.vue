<script setup>
import { Menu, X } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const router = useRouter()

const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Contacto', href: '/contacto' },
]

const navigateToContact = () => {
  isMenuOpen.value = false;
  router.push('/contacto')
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="[
    'fixed top-0 w-full z-50 transition-all duration-300 border-b border-gray-100 bg-white',
    isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
  ]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 flex-shrink-0 group">
          <img src="/logo.png" alt="Liberalegal" class="h-10 w-auto transition-transform group-hover:scale-105" />
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex space-x-8 items-center">
          <NuxtLink v-for="link in navLinks" :key="link.name" :to="link.href"
            class="text-gray-600 hover:text-brand-green transition-all font-semibold px-4 py-2 rounded-lg"
            active-class="text-brand-green bg-brand-green/20 font-extrabold shadow-sm">
            {{ link.name }}
          </NuxtLink>
          <button @click="navigateToContact"
            class="bg-brand-navy hover:bg-brand-green text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Defiende tu CAE
          </button>
        </nav>

        <!-- Mobile Menu Toggle -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu"
            class="text-brand-dark hover:text-brand-gold focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Menu v-if="!isMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Nav Slide-down -->
    <transition enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in" leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0">
      <div v-if="isMenuOpen"
        class="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden">
        <div class="pt-2 pb-6 px-4 space-y-1">
          <NuxtLink v-for="link in navLinks" :key="link.name" :to="link.href" @click="isMenuOpen = false"
            class="block px-4 py-3 text-base font-semibold text-gray-800 hover:text-brand-green hover:bg-brand-green/10 rounded-xl transition-colors"
            active-class="text-brand-green bg-brand-gold/10 font-extrabold border-l-4 border-brand-green">
            {{ link.name }}
          </NuxtLink>
          <div class="pt-4 pb-2 px-2">
            <button @click="navigateToContact"
              class="w-full flex justify-center items-center bg-brand-navy hover:bg-brand-green text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-md">
              Defiende tu CAE
            </button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>
