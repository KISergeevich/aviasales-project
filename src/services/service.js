export default class ApiAviasales {
  baseURL = 'https://aviasales-test-api.kata.academy'

  async getSearchId() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    }

    const response = await fetch(`${this.baseURL}/search`, options)
    if (response.ok) {
      const result = await response.json()
      return result
    }
    return ''
  }

  async getTickets(searchId) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    }

    const response = await fetch(`${this.baseURL}/tickets?searchId=${searchId}`, options)
    if (response.ok) {
      const result = await response.json()
      return result
    }
    return []
  }
}
