function validar()
{
    event.preventDefault();

   const email = document.getElementById('email').value
   const senha = document.getElementById('senha').value

   if(!email.include('@'))
   {
        alert('Insira um email valido!')
        return false
   }

   if(senha.length < 6)
   {
        alert('Digite uma senha com pelo menos 6 caracteres')
        return false
   }

   window.location.href = "teacher-home.html"
   return true
}