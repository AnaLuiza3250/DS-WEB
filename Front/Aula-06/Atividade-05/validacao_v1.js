var erroNomeVal = 0;
var erroEmailVal = 0;
var erroSenhaVal = 0;
var erroCPFVal = 0;
var erroTelefoneVal = 0;
var erroCEPVal = 0;
var erroURLVal = 0;
var erroValorVal = 0;
var erroCartaoVal = 0;

//===================================================VALIDAÇÃO NOME====================================================
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // evita envio automático

    const nome = document.getElementById("nome").value.trim(); //PEGA O VALOR QUE ESTÁ NO INPUT 'NOME'. trim() remove espaços em branco no início e no fim
    const erroNome = document.getElementById("erro-nome");

    if (nome === "") { //se nome for vazia
        erroNome.textContent = "O nome não pode ficar vazio.";
        erroNome.style.color = "red";
        erroNomeVal = 0;
    } else if (nome.length < 3) { //quantidade mínima de caracteres 
        erroNome.textContent = "O nome deve ter pelo menos 3 caracteres.";
        erroNome.style.color = "red";
        erroNomeVal = 0;
    } else if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) { //!/^[A-Za-zÀ-ÿ\s]+$/ é uma expressão regular que permite letras (incluindo acentos) e espaços, mas não números ou caracteres especiais.
        erroNome.textContent = "O nome deve conter apenas letras.";
        erroNome.style.color = "red";
        erroNomeVal = 0;
    } else {
        erroNome.textContent = "Nome válido!";
        erroNome.style.color = "green";
        erroNomeVal = 1;
    }
});

//===================================================VALIDAÇÃO E-MAIL====================================================
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // evita envio automático

    const email = document.getElementById("email").value.trim();
    const erroEmail = document.getElementById("erro-email");

    /* Expressão regular simples para validar e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //verifica se o email tem um formato básico válido*/

    // Regex que exige o domínio @anaflix.com
    const regexEmail = /^[^\s@]+@anaflix\.com$/; //explicação em regex_anaflix.txt

    if (email === "") {
        erroEmail.textContent = "O e-mail não pode ficar vazio.";
        erroEmail.style.color = "red";
        erroEmailVal = 0;
    } else if (!regexEmail.test(email)) {
        erroEmail.textContent = "Seu email deve conter domínio do site. Digite um e-mail válido (ex: maria@anaflix.com).";
        erroEmail.style.color = "red";
        erroEmailVal = 0;
    } else {
        erroEmail.textContent = "E-mail válido!";
        erroEmail.style.color = "green";
        erroEmailVal = 1;
    }
});

//===================================================VALIDAÇÃO SENHA====================================================
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const senha = document.getElementById("senha").value;
    const erroSenha = document.getElementById("erro-senha");
    const confirmaSenha = document.getElementById("confirma-senha").value;
    const erroConfirma = document.getElementById("erro-confirma");


    // Regras:
    // - mínimo 8 caracteres
    // - pelo menos uma letra maiúscula
    // - pelo menos uma letra minúscula
    // - pelo menos um número
    // - pelo menos um caractere especial
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    //Verificação de senha
    if (senha === "") {
        erroSenha.textContent = "A senha não pode ficar vazia.";
        erroSenha.style.color = "red";
        erroSenhaVal = 0;
    } else if (!regexSenha.test(senha)) {
        erroSenha.textContent = "A senha deve ter no mínimo 8 caracteres, incluindo maiúsculas, minúsculas, números e caracteres especiais.";
        erroSenha.style.color = "red";
        erroSenhaVal = 0;
    } else {
        erroSenha.textContent = "Senha válida!";
        erroSenha.style.color = "green";
        erroSenhaVal = 1;
    }

    // Validação do confirmar senha
    if (confirmaSenha === "") {
        erroConfirma.textContent = "Confirme sua senha.";
        erroConfirma.style.color = "red";
        erroSenhaVal = 0;
    } else if (confirmaSenha !== senha) {
        erroConfirma.textContent = "As senhas não coincidem.";
        erroConfirma.style.color = "red";
        erroSenhaVal = 0;
    } else {
        erroConfirma.textContent = "Confirmação correta!";
        erroConfirma.style.color = "green";
        erroSenhaVal = 1;
    }
});

//===================================================VALIDAÇÃO CPF====================================================
function validarCPF(cpf) { //função para verificar cada caractere do CPF e calcular os dígitos verificadores
    cpf = cpf.replace(/[^\d]+/g, ''); // remove pontos e traços

    if (cpf.length !== 11) return false; //tem que ter 11 dígitos

    // Elimina CPFs inválidos conhecidos
    if (/^(\d)\1+$/.test(cpf)) return false;

    let soma = 0, resto;

    // Primeiro dígito verificador
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i - 1]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;

    soma = 0;
    // Segundo dígito verificador
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i - 1]) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[10])) return false;

    return true;
}

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const cpf = document.getElementById("cpf").value;
    const erroCPF = document.getElementById("erro-cpf");

    if (!validarCPF(cpf)) {
        erroCPF.textContent = "CPF inválido!";
        erroCPF.style.color = "red";
        erroCPFVal = 0;
    } else {
        erroCPF.textContent = "CPF válido!";
        erroCPF.style.color = "green";
        erroCPFVal = 1;
    }

})

//===================================================VALIDAÇÃO TELEFONE====================================================
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const telefone = document.getElementById("telefone").value.trim();
    const erroTelefone = document.getElementById("erro-telefone");

    // Regex para telefone com DDD:
    // (XX) 9XXXX-XXXX  -> celular
    // (XX) XXXX-XXXX   -> fixo
    const regexTelefone = /^\(\d{2}\)\s?(?:9\d{4}-\d{4}|\d{4}-\d{4})$/;

    if (telefone === "") {
        erroTelefone.textContent = "O telefone não pode ficar vazio.";
        erroTelefone.style.color = "red";
        erroTelefoneVal = 0;
    } else if (!regexTelefone.test(telefone)) {
        erroTelefone.textContent = "Digite um telefone válido no formato (11) 99999-9999 ou (11) 1234-5678.";
        erroTelefone.style.color = "red";
        erroTelefoneVal = 0;
    } else {
        erroTelefone.textContent = "Telefone válido!";
        erroTelefone.style.color = "green";
        erroTelefoneVal = 1;
    }

});

document.getElementById("telefone").addEventListener("input", function (e) {
    let valor = e.target.value.replace(/\D/g, ""); // remove tudo que não é número

    // Limita a 11 dígitos (DDD + número)
    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length <= 10) {
        // Formato fixo: (XX) XXXX-XXXX
        e.target.value = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
        // Formato celular: (XX) 9XXXX-XXXX
        e.target.value = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }
});

//===================================================VALIDAÇÃO CEP====================================================
function validarCEP(cep) {
    const regexCEP = /^\d{5}-\d{3}$/; // O CEP deve seguir o formato 00000-000, onde \d{5} representa os primeiros 5 dígitos, seguido por um hífen e depois \d{3} para os últimos 3 dígitos. O ^ e $ garantem que toda a string corresponda exatamente a esse formato.
    return regexCEP.test(cep);
}

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const cep = document.getElementById("cep").value;
    const erroCep = document.getElementById("erro-cep");

    if (!validarCEP(cep)) {
        erroCep.textContent = "CEP inválido! Use o formato 00000-000.";
        erroCep.style.color = "red";
        erroCEPVal = 0;
    } else {
        erroCep.textContent = "CEP válido!";
        erroCep.style.color = "green";
        erroCEPVal = 1;
    }
});

document.getElementById("cep").addEventListener("input", function (f) {
    let valor = f.target.value.replace(/\D/g, ""); // remove tudo que não é número

    if (valor.length > 8) valor = valor.slice(0, 8); // limita a 8 dígitos

    // Aplica a máscara: 00000-000
    if (valor.length > 5) {
        f.target.value = valor.replace(/(\d{5})(\d{0,3})/, "$1-$2");
    } else {
        f.target.value = valor;
    }
});

//===================================================VALIDAÇÃO URL====================================================
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const url = document.getElementById("url").value.trim();
    const erroUrl = document.getElementById("erro-url");

    // Regex para verificar se começa com http:// ou https://
    const regexUrl = /^(http:\/\/|https:\/\/).+/;

    if (url === "") {
        erroUrl.textContent = "A URL não pode ficar vazia.";
        erroUrl.style.color = "red";
        erroURLVal = 0;
    } else if (!regexUrl.test(url)) {
        erroUrl.textContent = "A URL deve começar com http:// ou https://";
        erroUrl.style.color = "red";
        erroURLVal = 0;
    } else {
        erroUrl.textContent = "URL válida!";
        erroUrl.style.color = "green";
        erroURLVal = 1;
    }
});

//===================================================VALIDAÇÃO VALOR====================================================
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const valor = document.getElementById("valor").value.trim();
    const erroValor = document.getElementById("erro-valor");

    // Regex para formato monetário brasileiro: 1.299,90
    const regexValor = /^\d{1,3}(\.\d{3})*,\d{2}$/;

    if (!regexValor.test(valor)) {
        erroValor.textContent = "Formato inválido! Use o padrão brasileiro (ex.: 1.299,90)";
        erroValor.style.color = "red";
        erroValorVal = 0;
        return;
    }

    // Converte para número (substitui ponto por nada e vírgula por ponto)  PARA PODER VALIDAR, JÁ QUE O JS USA O PONTO COMO SEPARADOR DECIMAL
    const valorNum = parseFloat(valor.replace(/\./g, "").replace(",", "."));

    // Intervalo permitido (exemplo: entre 100 e 5000)
    const min = 42.50;
    const max = 5000;

    if (isNaN(valorNum)) {
        erroValor.textContent = "Digite um valor numérico.";
        erroValor.style.color = "red";
        erroValorVal = 0;
    } else if (valorNum < min || valorNum > max) {
        erroValor.textContent = `O valor deve estar entre R$ ${min.toFixed(2)} e R$ ${max.toFixed(2)}.`;
        erroValor.style.color = "red";
        erroValorVal = 0;
    } else {
        erroValor.textContent = "Valor válido!";
        erroValor.style.color = "green";
        erroValorVal = 1;
    }
});


//===================================================VALIDAÇÃO CARTÃO====================================================
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const numero = document.getElementById("cartao").value.replace(/\s+/g, "");
    const erroCartao = document.getElementById("erro-cartao");

    // Verifica se tem 16 dígitos numéricos
    if (!/^\d{16}$/.test(numero)) {
        erroCartao.textContent = "O cartão deve ter exatamente 16 dígitos numéricos.";
        erroCartao.style.color = "red";
        erroCartaoVal = 0;
        return;
    }

    // Identifica bandeira pelo prefixo
    let bandeira = "";
    if (/^4/.test(numero)) {
        bandeira = "Visa";
    } else if (/^5[1-5]/.test(numero)) {
        bandeira = "MasterCard";
    } else if (/^3[47]/.test(numero)) {
        bandeira = "American Express (15 dígitos, não 16)";
    } else if (/^6(?:011|5)/.test(numero)) {
        bandeira = "Discover";
    } else {
        bandeira = "Bandeira desconhecida";
    }

    erroCartao.textContent = `Cartão válido! Bandeira: ${bandeira}`;
    erroCartao.style.color = "green";
    erroCartaoVal = 1;
});

document.getElementById("cartao").addEventListener("input", function (e) {
    let valor = e.target.value.replace(/\D/g, ""); // remove tudo que não é número

    if (valor.length > 16) valor = valor.slice(0, 16); // limita a 16 dígitos

    // Aplica máscara: 0000 0000 0000 0000
    e.target.value = valor.replace(/(\d{4})(?=\d)/g, "$1 ");
});

//===================================================LISTA====================================================
contadorItem = 0;
function adicionar() {

    if (
        erroNomeVal !== 1 ||
        erroEmailVal !== 1 ||
        erroSenhaVal !== 1 ||
        erroCPFVal !== 1 ||
        erroTelefoneVal !== 1 ||
        erroCEPVal !== 1 ||
        erroURLVal !== 1 ||
        erroValorVal !== 1 ||
        erroCartaoVal !== 1
    ) {
        alert("Preencha todos os campos corretamente antes de adicionar.");
        return;
    }

    contadorItem++ //incrementando o contador
    //crio o item
    let novoItem = document.createElement("li"); //criar um elemento html

    nome = document.getElementById("nome").value;
    email = document.getElementById("email").value;
    cpf = document.getElementById("cpf").value;
    fone = document.getElementById("telefone").value;
    cep = document.getElementById("cep").value;
    dta = document.getElementById("data-nascimento").value;
    valor = document.getElementById("valor").value;
    url = document.getElementById("url").value;


    novoItem.innerHTML = //Dá para usar tags de html desse jeito
        "<br><strong>Nome:</strong> " + nome + "<br>" +
        "<strong>Email:</strong> " + email + "<br>" +
        "<strong>CPF:</strong> " + cpf + "<br>" +
        "<strong>Telefone:</strong> " + fone + "<br>" +
        "<strong>CEP:</strong> " + cep + "<br>" +
        "<strong>Data de Nascimento:</strong> " + dta + "<br>" +
        "<strong>Valor:</strong> " + valor + "<br>" +
        "<strong>URL:</strong> " + url + "<br><br>";

    novoItem.setAttribute("id", contadorItem); //atribuo um ID

    let botaoRemover = document.createElement("button"); //botão de remover
    botaoRemover.textContent = "Remover";
    botaoRemover.setAttribute("onclick", "remover(" + contadorItem + ")")
    novoItem.appendChild(botaoRemover);

    document.getElementById("lista").appendChild(novoItem); //adiciona o item à lista
}

function remover(itemLista) {
    var item = document.getElementById(itemLista);
    document.getElementById("lista").removeChild(item);
}
