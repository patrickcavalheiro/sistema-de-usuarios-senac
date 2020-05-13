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
});