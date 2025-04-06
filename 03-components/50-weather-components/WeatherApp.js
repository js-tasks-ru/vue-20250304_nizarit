import { defineComponent } from 'vue'
import { getWeatherData } from './weather.service.ts'
import './WeatherApp.css'
import WeatherDetails from './WeatherDetails.js'
import WeatherConditions from './WeatherConditions.js'
import WeatherAlert from './WeatherAlert.js'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherDetails,
    WeatherConditions,
    WeatherAlert
  },

  setup(){
    return{
      weatherData: getWeatherData(), 
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
      <li v-for="item in weatherData" class="weather-card"
        :class="{'weather-card--night' : !(item.current.dt >= item.current.sunrise && item.current.dt <= item.current.sunset)}">
          <WeatherAlert v-if="item.alert" class="weather-alert" :alert="item.alert"/>
          <div>
            <h2 class="weather-card__name">
              {{ item.geographic_name }}
            </h2>
            <div class="weather-card__time">
              {{ item.current.dt }}
            </div>
          </div>
          <WeatherConditions class="weather-conditions" :weather="item.current.weather" :temp="item.current.temp"/>
          <WeatherDetails class="weather-details" :pressure="item.current.pressure" :humidity="item.current.humidity" :clouds="item.current.clouds" :wind="item.current.wind_speed"/>
        </li>
      </ul>
    </div>
  `,
})
