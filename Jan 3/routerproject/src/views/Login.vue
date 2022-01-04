<template>
    <div>
         <header>
          <nav class="navbar navbar-expand-lg navbar shadow bg-white">
            <a class="navbar-brand ms-5" href="https://www.novastrid.com" target="_blank">
              NovaStrid.com
            </a>
          </nav>
   </header> 
   <form>
      <div>
         <input type="text" name="name" id="name" placeholder="Enter your name" required>
      </div>
      <div>
         <input type="email" name="email" id="emai" placeholder="Enter your email" required>
      </div>
      <div>
         <input type="password" name="password" id="password" placeholder="Enter password" required>
      </div>
      <div>
          <button type="submit" class="btn btn-success" name="submit">Submit</button>
      </div>
   </form>

</div>
</template>

<style scoped>

form{
       padding: 50px;
    }
   div{
       padding: 10px;
   }
   
   input[type=text],input[type=email],input[type=password]{
       padding: 10px;
       border-radius: 5px;
       width: 300px;
   }
   input[type=submit]{
       border-radius: 5px;
   }
  
</style>



