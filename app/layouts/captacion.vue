<template>
  <div class="min-h-screen flex flex-col bg-brand-light text-brand-dark font-sans selection:bg-brand-green selection:text-white">
    
    <!-- Minimal Navbar -->
    <header class="w-full bg-brand-navy px-6 py-4 flex items-center justify-center md:justify-start shadow-md z-50">
      <NuxtLink to="/" class="hover:opacity-80 transition-opacity">
        <img src="/logo-white.png" alt="Liberalegal" class="h-10 w-auto" />
      </NuxtLink>
    </header>

    <!-- Page Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Standard Footer -->
    <footer class="bg-brand-navy text-brand-light py-16 border-t-[4px] border-brand-accent">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Logo y Descripcion -->
        <div class="col-span-1 md:col-span-2" data-aos="fade-up" data-aos-delay="0">
          <div class="flex items-center gap-3 mb-6">
            <img src="/logo-white.png" alt="Liberalegal" class="h-10 w-auto opacity-90" />
          </div>
        </div>

        <!-- Contacto -->
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-lg font-bold text-white mb-6">Contacto</h3>
          <ul class="space-y-4 text-sm text-gray-400">
            <li>contacto@liberalegal.cl</li>
            <li>+56 9 9661 6321</li>
          </ul>
        </div>
      </div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {{ new Date().getFullYear() }} Liberalegal. Todos los derechos reservados. Desarrollado por
          <a href="https://groman.cl" target="_blank" class="text-brand-accent font-bold hover:text-brand-light hover:font-bold transition-colors">groman.cl</a>
        </p>
      </div>
    </footer>

  </div>
</template>
