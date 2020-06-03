/**
 * Método capaz de realizar a consulta do Cep em uma API pública
 * E retornar os dados em json do nome da cidade, estado e rua
 * 
 * Dependência Jquery Versão 3.5.1 ou superior
 * 
 * @param {string} cep 
 * @return {string} 
 * 
 * @author Patrick Cavalheiro
 * @date 02-06-2020
 * 
 * Atualmente este script usa a API do postmon.com.br
 */
function consultaCep(cep, retornoDados){
    if(cep != ''){
        let apiUrl = "https://api.postmon.com.br/v1/cep/";    
        $.ajax({
            method: 'GET',
            url: apiUrl + cep,
            dataType: 'json',
            timeout: 15000,
            success: function(dados){
                retornoDados(dados);                
            }, 
            error: function(){
                return false;
            }
        });
    } else {
        return false;
    }
}