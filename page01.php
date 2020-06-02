<?php

if(isset($_POST) && array_key_exists('nome', $_POST)){
    $nome = $_POST['nome'];
    $email = $_POST['field_email'];    
    $idade = $_POST['idade'];
    $senha = $_POST['senha'];

    //<---- aqui viria o código para inserir na base---->

    //<--- / ----->

    echo json_encode(array('message' => "Usuário $nome inserido com sucesso"));
}