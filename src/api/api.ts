import { categories, saloons, services } from "./stubData";
import { Api, Category } from "./types";

class API implements Api {
  #baseUrl: string
  constructor(baseUrl: string) {
    this.#baseUrl = baseUrl
  }

  public getCategoriesList() {
    return Promise.resolve(categories)
    // replace with this line when backend is ready:
    // return this.getList<Category>(`${this.#baseUrl}/categories`)
  }

  public getSaloonsList(categoryId: string) {
    return Promise.resolve(saloons)
  }

  public getServicesList(saloonId: string) {
    return Promise.resolve(services)
  }

  protected async getList<T>(url: string): Promise<T[]> {
    return await fetch(url).then(res => res.json() as unknown as T[])
  }
}


export default new API('/localhost')
