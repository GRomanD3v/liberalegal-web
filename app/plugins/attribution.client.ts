export default defineNuxtPlugin(() => {
  const TRACKING_KEYS = [
    'gclid',
    'gbraid',
    'wbraid',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_matchtype',
    'utm_content'
  ]

  const COOKIE_NAME = 'll_attribution'
  const STORAGE_KEY = 'll_attribution'
  const COOKIE_MAX_AGE = 30 * 24 * 60 * 60 // 30 días en segundos

  const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null
    const match = document.cookie.match(new RegExp('(^|;\\s*)' + name + '=([^;]*)'))
    return (match && match[2]) ? decodeURIComponent(match[2]) : null
  }

  const setCookie = (name: string, value: string, maxAge: number) => {
    if (typeof document === 'undefined') return
    const isSecure = window.location.protocol === 'https:' ? '; Secure' : ''
    document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/; SameSite=Lax${isSecure}`
  }

  const loadSavedAttribution = (): Record<string, string> => {
    let data: Record<string, string> = {}
    try {
      const fromCookie = getCookie(COOKIE_NAME)
      if (fromCookie) {
        data = JSON.parse(fromCookie)
      }
    } catch (_) {}

    if (!data || !Object.keys(data).length) {
      try {
        const fromStorage = localStorage.getItem(STORAGE_KEY) || sessionStorage.getItem(STORAGE_KEY)
        if (fromStorage) {
          data = JSON.parse(fromStorage)
        }
      } catch (_) {}
    }
    return data || {}
  }

  const saveAttribution = (data: Record<string, string>) => {
    try {
      const json = JSON.stringify(data)
      setCookie(COOKIE_NAME, json, COOKIE_MAX_AGE)
      localStorage.setItem(STORAGE_KEY, json)
      sessionStorage.setItem(STORAGE_KEY, json)
    } catch (_) {}
  }

  const captureFromUrl = () => {
    if (typeof window === 'undefined') return
    const urlParams = new URLSearchParams(window.location.search)
    let hasNew = false
    const existing = loadSavedAttribution()
    const updated: Record<string, string> = { ...existing }

    for (const key of TRACKING_KEYS) {
      const val = urlParams.get(key)
      if (val && typeof val === 'string') {
        const cleanVal = val.trim().slice(0, 250)
        if (cleanVal) {
          updated[key] = cleanVal
          hasNew = true
        }
      }
    }

    if (!updated.landing_url) {
      updated.landing_url = window.location.href.slice(0, 500)
      hasNew = true
    }
    if (!updated.referrer && document.referrer) {
      updated.referrer = document.referrer.slice(0, 500)
      hasNew = true
    }

    if (hasNew) {
      saveAttribution(updated)
    }
  }

  // Ejecutar captura al cargar la página en el cliente
  captureFromUrl()

  // Capturar en cambios de ruta si se navega con nuevos parámetros
  const router = useRouter()
  router.afterEach(() => {
    captureFromUrl()
  })

  return {
    provide: {
      getAttribution: () => loadSavedAttribution()
    }
  }
})
