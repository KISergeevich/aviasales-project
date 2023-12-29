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
    let response
    try {
      response = await fetch(`${this.baseURL}/tickets?searchId=${searchId}`, options)
    } catch (error) {
      if (error instanceof Error && error.status === 500) {
        return { status: '500', tickets: [], stop: false }
      }
      throw error
    }

    if (response.ok) {
      const result = await response.json()
      return result
    }
    return { status: 'err', tickets: [], stop: false }
  }
}
