export default class AsApiServices {
  baseUrl = new URL('https://aviasales-test-api.kata.academy');

  searchId = null;

  async getSearchId() {
    const urlSearchId = new URL('/search', this.baseUrl);
    const response = await fetch(urlSearchId);

    if (!response.ok) {
      throw new Error(`Код ${response.status}: Не удалось получить ID. Пожалуйста перезагрузите страницу.`);
    }
    const body = await response.json();
    if (this.searchId === null) {
      this.searchId = body.searchId;
    }
  }

  async getTickets() {
    const urlGetTickets = new URL('/tickets', this.baseUrl);

    urlGetTickets.searchParams.append('searchId', this.searchId);
    const response = await fetch(urlGetTickets);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const body = await response.json();

    return body;
  }
}
