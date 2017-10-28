/* 
 * Aqui nós começamos a trabalhar com a validação de formulario
 */

var B_nome = false;
var B_sobrenome = false;
var B_email = false;
var B_login = false;
var B_senha = false;
var B_termos = false;

function validaNome(){
    
    var nome = document.getElementById('nome').value;   

    /*
     * Validamos aqui o tamanho dos caracteres 
     */
    
    if(nome.length < 3){
    
        document.getElementById('caixa').innerHTML = "O campo nome precisa ter no minimo 3 caracteres";
        document.getElementById('no').style.color="#e60000";
        B_nome = false;
        
    }else{
        
        document.getElementById('caixa').innerHTML = "Ok";
        document.getElementById('no').style.color="#999900";
        B_nome = true;
    }
      
}


function validaSobreNome(){
    
    var sobrenome = document.getElementById('sobrenome').value;   

    /*
     * Validamos aqui o tamanho dos caracteres 
     */
    
    if(sobrenome.length < 3){
    
        document.getElementById('caixa').innerHTML = "O campo sobrenome precisa ter no minimo 3 caracteres";
        document.getElementById('so').style.color="#e60000";
        B_sobrenome = false;
        
    }else{
        
        document.getElementById('caixa').innerHTML = "Ok";
        document.getElementById('so').style.color="#999900";
        B_sobrenome = true;
        
    }
      
}


function validaEmail(){
    
    var email = document.getElementById('email').value;   

    /*
     * Validamos aqui o tamanho dos caracteres 
     */
    
    if(email.length < 10){
    
        document.getElementById('caixa').innerHTML = "O campo Email precisa ter no minimo 10 caracteres";
        document.getElementById('em').style.color="#e60000";
        B_email = false;
        
    } else{
        
        for(var i= 0; i < email.length; i++){
            
            if(email.match(/@/)){
                
               
               if(email.match(/ /)){
                
                document.getElementById('caixa').innerHTML = "O email não pode ter espaços em branco entre os caracteres";
                document.getElementById('em').style.color="#e60000";
                B_email = false;
               
                
               } else{
                
                document.getElementById('caixa').innerHTML = "Ok";
                document.getElementById('em').style.color="#999900";
                B_email = true;
                
               }  
               
                
            } else{
                
                document.getElementById('caixa').innerHTML = "O campo Email precisa ter @ para ser valido";
                document.getElementById('em').style.color="#e60000";
                B_email = false;
                
            }
            
        }
        
        
        
    }
      
}


function validalogin(){
    
    var login = document.getElementById('login').value;   

    /*
     * Validamos aqui o tamanho dos caracteres 
     */
    
    if(login.length < 6){
    
        document.getElementById('caixa').innerHTML = "O campo login precisa ter no minimo 6 caracteres";
        document.getElementById('lo').style.color="#e60000";
        B_login = false;
        
    }else{
        
        if(login.match(/ /)){
                
                document.getElementById('caixa').innerHTML = "O campo login não pode ter espaços em branco entre os caracteres";
                document.getElementById('lo').style.color="#e60000";
                B_login = false; 
               
                
            } else{
                
                document.getElementById('caixa').innerHTML = "Ok";
                document.getElementById('lo').style.color="#999900";
                B_login = true;
                
            }
        
    }
      
}



function validaSenha(){
    
    var senha = document.getElementById('senha').value;   

    /*
     * Validamos aqui o tamanho dos caracteres 
     */
    
    if(senha.length < 6){
    
        document.getElementById('caixa').innerHTML = "O campo senha precisa ter no minimo 6 caracteres";
        document.getElementById('se').style.color="#e60000";
        B_senha = false;
        
    }else{
        
        if(senha.match(/ /)){
                
                document.getElementById('caixa').innerHTML = "O senha não pode ter espaços em branco entre os caracteres";
                document.getElementById('se').style.color="#e60000";
                B_senha = false;
               
                
            } else{
                
                document.getElementById('caixa').innerHTML = "Ok";
                document.getElementById('se').style.color="#999900";
                B_senha = true;
                
            }
        
    }
      
}

function validaTermo(){
    
    var termos = document.getElementById('termos');
    
    if(termos.checked === true){
        
        document.getElementById('te').style.color="#999900";
        B_termos = true;
        
    } else{
        
        document.getElementById('te').style.color="#e60000";
        B_termos = false;
        
    }
   
    
}

function validaTudo(){
    
    if((B_nome === true) && (B_sobrenome === true) && (B_email === true) && (B_login === true) && (B_senha === true) && (B_termos === true)){
        
        alert("Obrigado por se cadastrar!");
        
    }else{
        
        alert("Você ainda não preencheu os campos corretamente!");
        
    }
        
    
}

