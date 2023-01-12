export interface IInspiration {
  _id: string,
  name: string,
	url: string,
  date: string,
  image: string,
  user: { username: string,
	comment: string }
}