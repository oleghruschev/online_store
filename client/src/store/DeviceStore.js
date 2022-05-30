import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: "Name1",
      },
      {
        id: 2,
        name: "Name2",
      },
    ];
    this._brands = [
      {
        id: 1,
        name: "Name1",
      },
      {
        id: 2,
        name: "Name2",
      },
    ];
    this._devices = [
      {
        id: 1,
        name: "Name1",
        price: 324,
        img: "https://asfasf.png",
      },
      {
        id: 2,
        name: "Name2",
        price: 324,
        img: "https://asfasf.png",
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}
