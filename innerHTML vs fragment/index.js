
function doWithInnerHTML(){

  let start = Date.now()
  let container = document.getElementById("container")
  
  for(let i = 0;i < 1000; i++){
    container.innerHTML += `
    <label for="">Meu índice: ${i}</label>
    `
  }

  let duration = Date.now() - start;
  console.log(`duration: ${duration}`)
}

function doWithFragment(){

  let start = Date.now()
  let container = document.getElementById("container")
  let fragment = document.createDocumentFragment()

  for(let i = 0;i < 10000; i++){
    const label = document.createElement('label')
    label.textContent = `Meu índice: ${i}`
    fragment.append(label)
  }
  
  container.append(fragment)
  let duration = Date.now() - start
  console.log(`duration: ${duration}`)
}

