//Example fetch using NASA API
document.querySelector('button').addEventListener('click', 

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=3SOXMv4YgMNh79A48S8ouRStlK3ZsN8PT4x8morP&date=${choice}`
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === "image"){
          document.getElementById('video').style.display = 'none'
          document.getElementById('pic').style.display = 'block'
          document.querySelector('img').src = data.hdurl
        }else if(data.media_type === 'video'){
          document.getElementById('pic').style.display = 'none'
          document.getElementById('video').style.display = 'block'
          document.querySelector('iframe').src = data.url
        }else{
          alert('Media Not Supported - Contact NASA IMMEDIATLY')
        }
        document.querySelector('.off').style.display = 'block'
        document.querySelector('h3').innerText = data.explanation
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
})


