import { IStoreData } from "../interface/store.ts";

export const calculate = (data: IStoreData[]) => {
  let points = 0,
    pointsXvalue = 0;

  for (const asignature of data) {
    points += asignature.points;
    pointsXvalue += asignature.points * asignature.letterValue;
  }
  return pointsXvalue / points;
};
