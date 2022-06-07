const sentence = "hello there from lighthouse labs \n";


let delay = 0
  for (let word of sentence) {
    delay += 50 
   
    setTimeout(() => {
      
   
    process.stdout.write(word)
  }}, delay)
    
   
    
  };  

