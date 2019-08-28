window.cipher = {
  encode: (offset,string) => {
    let nuevoTexto = '';

    for (let i = 0; i < string.length; i++) {
      
      let convAscii=((string.charCodeAt(i)-65+offset)%26+65);
       convAscii= String.fromCharCode(convAscii);
       nuevoTexto+=convAscii;

      
      }
         return nuevoTexto;
    
    }
  };

  
  /*window.cipher = {
    decode: (offset, string) => {
  
      let textoDecode = '';
  
      for (let i = 0; i < string.length; i++) {
        
        let inverAscii=((string.charCodeAt(i)-90-offset)%26+90);
         inverAscii= String.fromCharCode(inverAscii);
         textoDecode+=inverAscii;
  
        
        }
           return textoDecode;
      
      }
    };
  */
    
  

