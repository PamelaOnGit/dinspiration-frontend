export interface IFood { 
lifestyle: { 
  lowGi: boolean, 
  lowCarb: boolean, 
  highProtein: boolean, 
  lowCalorie: boolean, 
  keto: boolean, 
  skip: true
}, 
_id: string, 
name: string, 
imageURL: string, 
options: Array<string>, 
}
