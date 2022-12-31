export type Course =  {
    thumb:string,
    description:string,
    title:string,
    price:string,
    category:number
  }

export interface ListOfCourses {
    courses : Course[]
}