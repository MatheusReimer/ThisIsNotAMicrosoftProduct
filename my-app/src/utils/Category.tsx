import React from 'react'

interface Category {
    _id : string,
    title:string
}

let categories:Category[] = [{ _id: "0", title: "Academic"},{_id:"1", title:"Dev"},{_id:"2", title:"3D "},{_id:"3", title:"Servers"},{_id:"4", title:"Systems"}];

export default categories