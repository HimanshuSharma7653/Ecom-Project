import React from 'react'

export default function FormValidators(e) {
  let {name, value} = e.target

  switch(name){
    case "name":
        if(!value || value===0)
            return name+ "Field is required!"
        else if(value.length<3 || value.length>200)
            return name+ "field must be 3-200 words"
        else
            return ""
    default:
        return ""
  }
}
