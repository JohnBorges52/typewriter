const sentence = "hello there from lighthouse labs";


let delay = 0
let count = 0
  for (let word of sentence) {
    delay += 50 
   
    setTimeout(() => {
      count += 1
      if (count < sentence.length) {
    process.stdout.write(word)
  }
  else{
    console.log('s')
  }}, delay)
    
   
    
  };  

