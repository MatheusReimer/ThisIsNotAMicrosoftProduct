import React from 'react'

interface Category {
    _id : string,
    title:string
}

let categories:Category[] = [{ _id: "0", title: "Educational"},{_id:"1", title:"Software Development"},{_id:"2", title:"3D Tools"},{_id:"3", title:"Servers"},{_id:"4", title:"Operating Systems"}];

export default categories