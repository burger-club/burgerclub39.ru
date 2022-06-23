import { Ref } from 'vue'
import { City } from '~/interfaces/city'

export const useCities = async () => {
  const { find } = useStrapi4()
  const { data: cities } = await useLazyAsyncData('cities', async () => {
    const { data } = await find('cities')
    return data
  })

  return cities
}

export const useCurrentCity = (): [Ref<City>, Function] => {
  const cityCookie = useCookie('city', { maxAge: 365 })

  const city = useState('city', () => cityCookie.value ?? null)

  const setCurrentCity = (newCity: City) => {
    cityCookie.value = newCity
    city.value = newCity
  }

  return [city, setCurrentCity]
}
