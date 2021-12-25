<template>
<div>
   <h1>Welcome to Login Page</h1>
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
          <button type="submit" class="btn btn-primary" id="loginBtn"  name="submit">Login</button>
      </div>
   </form>
</div>
</template>

<script>

</script>

<style>
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