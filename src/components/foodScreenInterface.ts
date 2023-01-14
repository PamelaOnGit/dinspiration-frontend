import { IFood } from "../interfaces/food"
// import IInspiration from inspo


export interface IFoodScreen { 

  food: IFood,
  inspirations: Array<Object> | null
  }

  // replace inspirations with IInspirations when it's done
