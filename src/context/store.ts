import { defineStore } from 'pinia';

type DataStore = {
    id: string
    asignature: string
    points: number
    letterValue: number
}

interface IStoreData {
    data: DataStore[] 
}

export const useMyStore = defineStore('myStore', {
  state: (): IStoreData => ({
    data: []
  }),
  actions: {
    addItem(item: DataStore){
        this.data.push(item)
    },
    removeItem(index: string){
        const newData = this.data.filter((el)=> el.id !== index)
        this.data = newData;
    }
  }
});