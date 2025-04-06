import { defineComponent } from 'vue'
import { WeatherConditionIcons } from './weather.service.ts'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherConditions',

  setup(){
      return{
        WeatherConditionIcons, 
      }
  },

  props: {
    weather: {
      type: Object,
      required: true
    },
    temp: {
      type: Number,
      required: true
    }
  },

  template: `
    <div>
      <div class="weather-conditions__icon" :title="weather.description">{{ WeatherConditionIcons[weather.id] }}</div>
      <div class="weather-conditions__temp">{{ (temp - 273.15).toFixed(1) }} °C</div>
    </div>
  `,
})
