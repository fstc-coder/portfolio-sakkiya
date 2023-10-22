// submission ajax
$("#submit_form").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbydw2z1iA4dCWVQxZq5YrlUo1bfR5adiOxXqGXEkuuHLIp8h-inirV085OzqbBfZcbV/exec",
      data:$("#submit_form").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})