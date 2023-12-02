// replace link from fecth function
fetch('https://cdnjs.cloudflare.com/ajax/libs/three.js/0.159.0/three.min.js').then(res => res.blob()).then(data => 
  {
    const a = document.createElement('a');
    a.download = 'hello.txt';
    
    data.type = 'text/plain'
    a.href = URL.createObjectURL(data)
    setTimeout(function() {
      a.click()
    }, 2000);
  }
  ).catch(e => console.log(e))
