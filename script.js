const api = "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" ;
const inp = document.getElementById("inp");
const images = document.getElementById("imagess")



 async function getImages ()
{
    // get images from api (openApi)
    const methods = {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt":inp.value ,
                "n":3,
                "size":"256x256"
            }
        )
    }
    const rsp = await fetch(`https://api.openai.com/v1/images/generations`, methods);
    const data = await rsp.json()
    const listImages = data.data ;
    images.innerHTML=""
    listImages.map(photo => {
        const conainer =document.createElement("div")
        images.append(conainer)
        const img = document.createElement("img")
        conainer.append(img)
        img.src = photo.url
    })

  
    // console.log(listImages);

}


    // cartona = ``
    // for (let i =0 ; i < listImages.length ; i++){
    //     cartona += `
    //     <div><img src="${listImages[i].url}" alt=""></div>
      
    //     `
    // }
    //  document.getElementById("imagess").innerHTML=cartona;







