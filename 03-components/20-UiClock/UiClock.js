import { defineComponent, watch, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const getDate = () => new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' })
    const date = ref(getDate())

    const intervalId = setInterval(() => {
        date.value = getDate()
      }, 1000)

    onUnmounted(() => clearInterval(intervalId))

    return {
      date,
    }
  },

  template: `<div class="clock">{{ date }}</div>`,
})
