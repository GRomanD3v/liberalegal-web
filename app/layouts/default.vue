<template>
  <div
    class="min-h-screen flex flex-col bg-brand-light text-brand-dark font-sans selection:bg-brand-green selection:text-white">
    <AppHeader />

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-brand-navy text-brand-light py-16 border-t-[4px] border-brand-accent">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Logo y Descripcion -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-3 mb-6">
            <img src="/logo-white.png" alt="Liberalegal" class="h-10 w-auto opacity-90" />
          </div>
          <p class="text-gray-400 text-sm leading-relaxed max-w-sm">
            Expertos en derecho administrativo y defensa de deudores. Recuperamos tu tranquilidad patrimonial frente a
            la Tesorería General de la República y otras instituciones financieras.
          </p>
        </div>

        <!-- Enlaces Rápidos -->
        <div>
          <h3 class="text-lg font-bold text-white mb-6">Navegación</h3>
          <ul class="space-y-4">
            <li>
              <NuxtLink to="/" class="text-gray-400 hover:text-white transition-colors">Inicio</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/servicios" class="text-gray-400 hover:text-white transition-colors">Servicios
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/nosotros" class="text-gray-400 hover:text-white transition-colors">Nosotros
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contacto" class="text-gray-400 hover:text-white transition-colors">Contacto
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contacto -->
        <div>
          <h3 class="text-lg font-bold text-white mb-6">Contacto</h3>
          <ul class="space-y-4 text-sm text-gray-400">
            <li>contacto@liberalegal.cl</li>
            <li>+56 9 0000 0000</li>
            <li>Santiago, Chile</li>
          </ul>
        </div>
      </div>

      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {{ new Date().getFullYear() }} Liberalegal. Todos los derechos reservados. Desarrollado por
          <a href="https://groman.cl" target="_blank"
            class="text-brand-accent hover:text-brand-light transition-colors">groman.cl</a>
        </p>
      </div>
    </footer>
  </div>
</template>
