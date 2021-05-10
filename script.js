//#region Ao clicar no botão de registre-se, a tela de login desaparece e a de registro aparece.
const loginbox = document.querySelector('.CaixaLoginBox')
const usuário = document.querySelector('.Usuário')
const senha = document.querySelector('.Senha')
const login = document.querySelector('.LoginBTN')
const registrar = document.querySelector('.RegistrarBTN')

registrar.addEventListener('click', function (){
    desaparecerlogin()
})

function desaparecerlogin() {
    usuário.style.opacity = "0"
    senha.style.opacity = "0"
    login.style.opacity = "0"
    registrar.style.opacity = "0"
    usuário2.style.display = "block"
    senha2.style.display = "block"
    registrar2.style.display = "block"
    voltarregistro.style.display = "block"
    setTimeout(desaparecerlogindisplay, 800);
}
function desaparecerlogindisplay() {
    usuário.style.display = "none"
    senha.style.display = "none"
    login.style.display = "none"
    registrar.style.display = "none"
    usuário2.style.opacity = "1"
    senha2.style.opacity = "1"
    registrar2.style.opacity = "1"
    voltarregistro.style.opacity = "1"
}
//#endregion

//#region Desaparecimento da parte de registro e alocação do user e password
const usuário2 = document.querySelector('.Usuário2')
const senha2 = document.querySelector('.Senha2')
const registrar2 = document.querySelector('.RegistrarBTN2')
const voltarregistro = document.querySelector('.VoltarRegistro')

voltarregistro.addEventListener('click', function(){
    desaparecerlogin2()
})

registrar2.addEventListener('click', function (){
    desaparecerlogin2()
    const user = document.querySelector(".Usuário2").value;
    const pass = document.querySelector(".Senha2").value;
    sessionStorage.setItem(user,pass);
    sessionStorage.setItem(pass,user);
})

function desaparecerlogin2() {
    usuário2.style.opacity = "0"
    senha2.style.opacity = "0"
    registrar2.style.opacity = "0"
    voltarregistro.style.opacity = "0"
    setTimeout(desaparecerlogindisplay2, 800);
}
function desaparecerlogindisplay2() {
    usuário2.style.display = "none"
    senha2.style.display = "none"
    registrar2.style.display = "none"
    voltarregistro.style.display = "none"
    usuário.style.display = "block"
    senha.style.display = "block"
    registrar.style.display = "block"
    login.style.display = "block"
    usuário.style.opacity = "1"
    senha.style.opacity = "1"
    registrar.style.opacity = "1"
    login.style.opacity = "1"
}
//#endregion
//#region Validação de usuário e senha e Pop ups
const logado = document.querySelector(".Logado")
const erro = document.querySelector(".Erro")
const perfil = document.querySelector(".Perfil")
const voltarperfil = document.querySelector(".VoltarPerfil")

login.addEventListener('click', function(){
    const user = document.querySelector(".Usuário").value;
    const pass = document.querySelector(".Senha").value;
    let info = sessionStorage.getItem(user);
    console.log(info)
    console.log(user, pass)

    if (user != "" && pass != "" && info != null && info == pass) {
        console.log("Login Successul!");
        logado.style.transform = "translate(-50%, 5%)"
        perfil.style.top = "50%"
        loginbox.style.top = "150%"
        document.querySelector(".BemVindoPerfil").innerText = "Bem Vindo " + user + "!";
        setTimeout(LogadoPop, 3500);
    } else {
        console.log("Incorrect username or password!");
        erro.style.transform = "translate(-50%, 5%)"
        setTimeout(ErroPop, 3500);
    }

    voltarperfil.addEventListener('click', function(){
        perfil.style.top = "-100%"
        loginbox.style.top = "50%"
    })
    function LogadoPop(){
        logado.style.transform = "translate(-50%, -130%)"
    }
    function ErroPop(){
        erro.style.transform = "translate(-50%, -130%)"
    }
})
//#endregion