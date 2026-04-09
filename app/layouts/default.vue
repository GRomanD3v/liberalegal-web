<template>
  <div
    class="min-h-screen flex flex-col bg-brand-light text-brand-dark font-sans selection:bg-brand-green selection:text-white">
    <AppHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="bg-brand-dark text-brand-light py-10 mt-16 border-t border-gray-700">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex items-center gap-3">
          <img src="/logo-white.png" alt="Liberalegal" class="h-8 w-auto grayscale opacity-80" />
        </div>
        <p class="text-gray-400 text-sm">
          &copy; {{ new Date().getFullYear() }} Liberalegal. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  </div>
</template>
