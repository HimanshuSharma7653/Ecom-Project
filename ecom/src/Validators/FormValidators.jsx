import React from 'react'

export default function FormValidators(e) {
  let {name, value} = e.target

  switch(name){
    case "name":
    case "icon":
        if(!value || value===0)
            return name+ "Field is required!"
        else if(value.length<3 || value.length>200)
            return name+ "field must be 3-200 words"
        else
            return ""
    case "shortDescription":
        if(!value || value===0)
            return name+ "Field is required!"
        else if(value.length<50)
            return name+ "field must be upto 50 words"
        else
            return ""
    default:
        return ""

    case "answer":
    case "question":
        if(!value || value===0)
            return name+ " Field is required!"
        else if(value.length<10)
            return name+ " field must be upto 10 words"
        else
            return ""
  }
}
