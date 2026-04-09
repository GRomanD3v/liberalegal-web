<script setup>
import { Menu, X } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value

const navLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Sobre Nosotros', href: '#about' },
]

const scrollToContact = () => {
  isMenuOpen.value = false;
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
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
    'fixed top-0 w-full z-50 transition-all duration-300',
    isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
  ]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <a href="#home" class="flex items-center gap-3 flex-shrink-0 group">
          <img src="/logo.png" alt="Liberalegal" class="h-10 w-auto transition-transform group-hover:scale-105" />
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex space-x-8 items-center">
          <a v-for="link in navLinks" :key="link.name" :href="link.href"
            class="text-gray-700 hover:text-brand-green transition-colors font-medium">
            {{ link.name }}
          </a>
          <button @click="scrollToContact"
            class="bg-brand-green hover:bg-brand-dark text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Defiende tu CAE
          </button>
        </nav>

        <!-- Mobile Menu Toggle -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu"
            class="text-brand-dark hover:text-brand-green focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors">
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
          <a v-for="link in navLinks" :key="link.name" :href="link.href" @click="isMenuOpen = false"
            class="block px-4 py-3 text-base font-semibold text-gray-800 hover:text-brand-green hover:bg-brand-green/5 rounded-xl transition-colors">
            {{ link.name }}
          </a>
          <div class="pt-4 pb-2 px-2">
            <button @click="scrollToContact"
              class="w-full flex justify-center items-center bg-brand-green hover:bg-brand-dark text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-md">
              Defiende tu CAE
            </button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>
