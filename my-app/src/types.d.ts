export type Course =  {
    thumb:string,
    description:string,
    title:string,
    price:string,
    category:number,
    link:string
  }

export interface ListOfCourses {
    courses : Course[]
}