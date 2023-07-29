export class Busquedas {
  historial = ["Tegucigalpa", "Madrid", "San José"];

  constructor() {
    // TODO: leer DB si existe
  }

  get paramsMapbox() {
    return {
      acces_token:
        "pk.eyJ1Ijoiam9laXQiLCJhIjoiY2xrYnYwNzRrMGlsOTNmb2Jxc3IwcnhkNyJ9.PgUvdbkOlDh6KsQ1iVb3NQ",
      limit: 5,
      language: "es",
    };
  }

  async ciudad(lugar = "") {
    try {
      // peticion http
      const intance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapbox,
      });

      const resp = await intance.get();
      console.log(resp.data);

      return [];
    } catch (error) {
      return [];
    }
    // peticion thhp
    console.log(lugar);
  }
}
