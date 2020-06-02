$(document).ready(function(){
    $('#btn-abrir').click(function(){
        $('#meu-modal').modal('show');
    });


    $('#btn-fechar').click(function(){
        $('#meu-modal').modal('hide');
    });

    $('[data-toggle=tooltip]').tooltip();
    $('[data-toggle=popover]').popover({html: true, placement: 'top'});

    $('.btn-excluir').click(function(){
        //remove a linha...
        $(this).parents('tr').remove();

        //mostra a mensagem
        $('#message-cliente').toast({
            autohide: true,
            delay: 5000
        }).toast('show');
    });

    $('#form-user').validate({
        rules: {
            nome: "required",
            senha: "required",
            field_email: {
                required: true,
                email: true
            },
            idade: {
                number: true,
                min: 16,
                max: 100
            }
        },
        messages: {
            nome: "Por favor, preencha seu nome...",
            senha: "Por favor, preencha sua senha...",
            field_email: {
                required: "Por favor, preencha seu e-mail...",
                email: "Insira um e-mail válido!"
            }, 
            idade: {
                number: "Insira apenas números...",
                min: "Idade mínima permitida: 16 anos",                
                max: "Idade máxima permitida: 100 anos"
            }
        },  
        errorPlacement: function(error, element) {            
            error.insertAfter(element).addClass('text-danger');
        },
        errorClass: "is-invalid" 
    });

    $('#btn-enviar').click(function(event){
        event.preventDefault();
        if ($('#form-user').valid()){
            $.ajax({
                method: 'POST',
                url: 'page01.php',
                data: $('#form-user').serialize(),
                dataType: 'json',
                success: function(retorno){
                    //pegando o retorno da requisição
                    $('#toast-cadastro .toast-body').html(retorno['message']);
                    $('#toast-cadastro').toast({
                        autohide: true,
                        delay: 5000
                    }).toast('show');
                }
            });
        }
    });
});