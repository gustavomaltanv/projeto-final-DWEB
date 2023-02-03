function validacaoEmail() {
    mail = document.getElementById("email").value;
    console.log(mail);

    usuario = mail.substring(0, mail.indexOf('@'));
    dominio = mail.substring(mail.indexOf('@') + 1);

    console.log(usuario + ' ' + dominio);

    if ((dominio.indexOf('@') == -1) &&
        (usuario.length >= 5) &&
        (dominio.length >= 5) &&
        (dominio.indexOf('.') >= 1)
    ) {
        return true;
    }

    else {
        alert("E-mail invalido!");
        return false;
    }
}

function maiusculo() {
    texto = document.getElementById("nome").value;
    console.log(texto);

    texto = texto.toUpperCase();
    console.log(texto);

    nome.value = (texto);
}

function validacaoTel() {
    telefone = document.getElementById("tele").value;
    console.log(telefone);

    if(telefone.length>=10) {
        ddd = telefone.substring(0,2);
        tel1 = telefone.substring(2,telefone.length-4);
        tel2 = telefone.substring(telefone.length-4);
        console.log('('+ddd+')'+tel1+'-'+tel2);
        tele.value = '('+ddd+')'+tel1+'-'+tel2;
    }

    else {
        alert('Telefone invalido!');
    }
}