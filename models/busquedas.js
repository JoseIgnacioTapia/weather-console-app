export class Busquedas {
  historial = ["Tegucigalpa", "Madrid", "San José"];

  constructor() {
    // TODO: leer DB si existe
  }

  get paramsMapbox() {
    return {
      acces_token: process.env.MAPBOX_KEY,
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

      return resp.data;
    } catch (error) {
      return [];
    }
  }
}
