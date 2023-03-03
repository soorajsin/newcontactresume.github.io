var btn= document.getElementById('btn')
btn.addEventListener('click', function(e) {
          e.preventDefault()
          var name=document.getElementById('name').value;
          var email=document.getElementById('email').value;
          var Subject=document.getElementById('Subject').value;
          var message=document.getElementById('message').value;
          //write maintain data
          var body= 'name:'+ name +'<br/> email: '+ email + '<br/> Subject: '+ Subject + '<br/> message: '+ message


         

         //email portion
         Email.send({
          SecureToken : "eab4d504-7a99-419d-87a0-37df52b78f37 ",
          To : 'surajwork762@gmail.com',
          From : "surajwork762@gmail.com",
          Subject : "Texting email from "+email.value,
          Body : body
       }).then(
        message => alert(message)
      );


      
                
})