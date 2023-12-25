export default class ApiAviasales {
  baseURL = 'https://front-test.dev.aviasales.ru/search'

  async getSearchId() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    }

    const response = await fetch(this.baseURL, options)
    if (response.ok) {
      const result = await response.json()
      console.log(result)
    }
  }
}
