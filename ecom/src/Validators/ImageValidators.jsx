import React from 'react'

export default function ImageValidators(e) {
  let files = e.target.files
  let imageFormats = []
  if(files.length===1){
    let pic = files[0]
        if(!(pic.type==="image/jpg" || pic.type==="image/jpeg" ||pic.type==="image/png" ||pic.type==="image/gif" ||pic.type==="image/pdf")){
            return "Invalid Image format, Please upload an image of type .jpg, .jpeg, .png, .gif"
        }
        else if(pic.size>1048576)
            return "Image is too Heavy, Please upload an image less than or equal to 1MB"
        else {
            return ""
        }
  }
}
