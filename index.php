<?php
include("login.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <script src="script.js"></script>
    <div class="container-login">
        <div class="login-box">
            <h2>Inicio de Sesion</h2>
            <form action="index.php" method="POST">

                <div class="user-box">  
                    <input type="text" id="user" name="user" required autocomplete="off">
                    <label for="user">Usuario</label>
                </div>
            
                <div class="user-box">   
                    <input type="password"  id="password" name="password" required autocomplete="off">
                    <label for="password">Contraseña</label> 
                    <span class="password-toggle" onclick="togglePasswordVisibility()">
                        <i class="fas fa-eye" id="eye-icon"></i>
                    </span>
                </div>

                <button class="signin-botton" onclick="">Iniciar Sesion</button>
            </form>
        </div> 
    </div> 

    <?php 
    if (isset($error)): ?>
        <p style="color: red;"><?php echo $error; ?></p>
    <?php endif; ?>

</body>
</html>




