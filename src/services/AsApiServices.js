export default class AsApiServices {
  baseUrl = new URL('https://front-test.dev.aviasales.ru');

  searchId = null;

  async getSearchId() {
    const urlSearchId = new URL('/search', this.baseUrl);

    const response = await fetch(urlSearchId);

    if (!response.ok) {
      throw new Error(`Could not fetch ${urlSearchId}, received ${response.status}`);
    }
    const body = await response.json();

    this.searchId = body.searchId;
  }

  async getTickets() {
    const urlGetTickets = new URL('/tickets', this.baseUrl);
    urlGetTickets.searchParams.append('searchId', this.searchId);

    const response = await fetch(urlGetTickets);

    if (!response.ok) {
      throw new Error(`Could not fetch ${urlGetTickets}, received ${response.status}`);
    }

    const body = await response.json();

    return body;
  }

  async recursiveQueryGetTickets() {
    const response = await this.getTickets();
    if (!response.stop) {
      this.recursiveQueryGetTickets();
    }
  }
}
