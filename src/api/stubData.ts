import { Category, Saloon, Service } from "./types";

const categories: Category[] = ['barbershop', 'beauty', 'hair', 'massage']

const services: Service[] = [
  {
    id: 's1',
    saloonId: 'sa1',
    category: 'hair',
    name: "haircut",
    details: "men's haircut (adult). Takes approx. 45 minutes"
  },
  {
    id: 's2',
    saloonId: 'sa1',
    category: 'hair',
    name: "men adults haircut",
    details: "men's haircut (adult). Takes approx. 45 minutes"
  },
  {
    id: 's3',
    saloonId: 'sa1',
    category: 'beauty',
    name: "nails",
    details: "nails for women"
  },
  {
    id: 's4',
    saloonId: 'sa1',
    category: 'hair',
    name: "men children haircut",
    details: "boy's haircut. Takes approx. 30 minutes"
  },
  {
    id: 's5',
    saloonId: 'sa2',
    category: 'hair',
    name: "women haircut",
    details: "women haircut. Takes approx. 1h 30 min"
  },
  {
    id: 's6',
    saloonId: 'sa2',
    category: 'beauty',
    name: "nails",
    details: "nails for women and men"
  },
  {
    id: 's7',
    saloonId: 'sa3',
    category: 'barbershop',
    name: "beard services"
  },
]


const saloons: Saloon[] = [
  {
    id: 'sa1',
    categories: ['hair', 'beauty'],
    address: 'Vilniaus g., Vilnius',
    name: "Diana's saloon",
    description: "best in town for hair and beauty services"
  },
  {
    id: 'sa2',
    categories: ['hair', 'beauty'],
    address: 'Trakų g., Vilnius',
    name: "Pas Jolita",
  },
  {
    id: 'sa3',
    categories: ['barbershop'],
    address: 'Gedimino pr., Vilnius',
    name: "Barb your beard",
  },
]

export {
  categories,
  saloons,
  services
}