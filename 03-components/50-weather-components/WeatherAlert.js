import { defineComponent } from 'vue'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherAlert',

  props: {
    alert: {
      type: Object,
      required: true
    },
  },

  template: `
    <div>
      <span class="weather-alert__icon">⚠️</span>
      <span class="weather-alert__description">{{ alert.sender_name }}: {{ alert.description }}</span>
    </div>
  `,
})
