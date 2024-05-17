import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useInfoStore = defineStore('info', () => {
  const show_css = ref(true)
  const show_html = ref(true)
  const show_anim = ref(true)
  const show_font = ref(true)
  const show_desktop = ref(true)
  const show_tablet = ref(false)
  const show_mobile = ref(false)

  return { show_css, show_html, show_anim, show_font, show_desktop, show_tablet, show_mobile }
})
