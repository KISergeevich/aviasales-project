export default class ApiAviasales {
  baseURL = 'https://aviasales-test-api.kata.academy/search'

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
      return result
    }
    return []
  }
}
