<template>
<div>
    <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
        </li>
    </ul>
    </div>
    </nav>
    <div class="container modal-dialog">        
        <div class="row">            
            <div class="col-md-12">
                <div class="alert alert-danger" role="alert" id="error-message" v-if="error">
                    {{error}}
                </div>
            </div>
            <div class="col-md-6 main-section">
                <div class="modal-content">
                    <div class="col-12 user-img">
                        <img src="@/assets/avatar.png" alt="">
                    </div>
                    <form class="col-12" action="" @submit.prevent="register">
                        <h3>Nuevo Usuario</h3>
                        <div class="form-group" id="mail-group">
                            <input type="text" class="form-control validate" required v-model="register_name" placeholder="Ingrese su nombre">
                        </div>
                        <div class="form-group" id="mail-group">
                            <input type="email" class="form-control validate" required v-model="register_mail" placeholder="Ingrese su email">
                        </div>
                        <div class="form-group" id="pass-group">
                            <input type="password" class="form-control validate" required v-model="register_password" placeholder="Ingrese su contraseña">
                        </div>
                        <div class="form-group" id="pass-group">
                            <input type="password" class="form-control validate" id="repeat" required v-model="register_password_again" placeholder="Repita su contraseña">
                        </div>                     
                        <input type="submit" class="btn btn-primary"><i class="fas fa-sign-in-alt"></i> Registrar/>  
                    </form>
                </div>
            </div>
            <div class="col-md-6 main-section">
                <div class="modal-content">
                    <div class="col-12 user-img">
                        <img src="@/assets/user1.png" alt="">
                    </div>
                    <form class="col-12" action="" @submit.prevent="login">
                        <h3>Login</h3>
                        <div class="form-group" id="mail-group">
                            <input type="mail" class="form-control validate" required v-model="login_email" placeholder="Ingrese su email">
                        </div>
                        <div class="form-group" id="pass-group">
                            <input type="password" class="form-control validate" required v-model="login_password" placeholder="Ingrese su contraseña">
                        </div>                    
                        <input type="submit" class="btn btn-primary"><i class="fas fa-sign-in-alt"></i> Iniciar sesión/>  
                    </form>
                    <div class="col-12 forgot">
                        <a href="#">Recordar contraseña</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return{
            login_email:'',
            login_password:'',
            register_mail:'',
            register_password:'',
            register_password_again:'',
            register_name:'',
        }
    },
    computed:{
        error(){
            return this.$store.state.error;
        }
    },
    methods:{
        login(){
            console.log('login')
        },
        register(){
          const repeat = document.getElementById('repeat');
          repeat.setCustomValidity('');        

          if (this.register_password!=this.register_password_again){
                alert('Ambas contraseñas deben coincidir');
                repeat.setCustomValidity('Ambas contraseñas deben coincidir'); 
                return;
            }
            const datos = {email: this.register_mail, password:this.register_password,name:this.register_name}
            this.$store.dispatch("register",datos)
        }
    }
}
</script>

<style>

.modal-content{
    background-color: #3b4652;
    opacity: .85;
    box-shadow: 0px 0px 3px #848484;
}
.user-img{
    margin-top: -50px;
    margin-bottom: 35px;
}
.user-img img{
    width: 100px;
    height: 100px;
    box-shadow: 0px 0px 3px #848484;
    border-radius: 50%;
}
.form-group input{
    height: 42px;
    border: 0;
}
.forgot{
    padding: 5px 0;
}
.forgot a{
    color: white;
}
h3{
    color: #009fff;
}

</style>