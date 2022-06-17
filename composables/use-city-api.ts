import { readonly, Ref } from 'vue'
import { City } from '~/interfaces/city'

export const useCities = (): City[] => {
  const { find } = useStrapi4()
  const { value: cities } = useState('cities', async () => {
    const res = await find('cities')

    return res.data
  })

  return cities
}

export const useCurrentCity = (): [Ref<City>, Function] => {
  const city: Ref<City> = useState('city', () =>
    JSON.parse(localStorage.getItem('city') ?? 'null'),
  )

  const setCurrentCity = (newCity: City) => {
    localStorage.setItem('city', JSON.stringify(newCity))
    city.value = newCity
  }

  return [readonly(city), setCurrentCity]
}
