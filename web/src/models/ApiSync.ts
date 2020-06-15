import axios, { AxiosPromise } from 'axios';

// rootUrl : http://localhost:3000/users

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      // PUT
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // POST
      return axios.post(`${this.rootUrl}`, data);
    }
  }
}
