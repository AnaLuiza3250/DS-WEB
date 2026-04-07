<?php

require_once 'database.php';
$database = new Database();

$method   = $_SERVER['REQUEST_METHOD'];
$path     = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path     = trim($path, '/');
$segments = explode('/', $path);

if (isset($segments[2])) { //se está criado
    $id = $segments[2]; //pega o valor do ID e guarda -> cafeteria/produtos/1 (esse 1 é o [2] da array)
} else {
    $id = null;
}

switch($method){
    // -------------------------------------------------------
    // GET /produtos 
    // GET /produtos/1
    // -------------------------------------------------------
    case 'GET':
        
        $produtos = $database->executeQuery("SELECT * FROM pedidos")->fetchAll();
        echo json_encode([
            'status' => 'success',
            'data' => $produtos
        ]);

        break;
    // -------------------------------------------------------
    // POST /produtos
    // Body: { "nome": "Bebidas" }
    // -------------------------------------------------------
    case 'POST':
        $body = json_decode(file_get_contents('php://input'), true);
        $cliente = trim($body['cliente']);

        if(!$cliente){
            echo json_encode([
                'status' => 'error',
                'message' => 'Campo nome não informado'
            ]);
            break;
        }

        $database->executeQuery(
            "INSERT INTO pedidos (cliente) 
            VALUES (:cliente)",
            [
            ':cliente' => $cliente
            ]
        );

        http_response_code(201);
        echo json_encode([
            'status' => 'success',
            'message' => 'Cliente cadastrado com sucesso',
            'idProduto' => $database->lastInsertId()
        ]);

        break;
    // -------------------------------------------------------
    // PUT /produtos/1
    // Body: { "nome": "Salgados" }
    // -------------------------------------------------------
    case 'PUT':
        
        break;
   // -------------------------------------------------------
    // DELETE /produtos/1
    // -------------------------------------------------------
    case 'DELETE':
        if ($id === null) {
            http_response_code(400);
            echo json_encode([
                'status' => 'error',
                'message' => 'ID do cliente não informado'
            ]);
            break;
        }

        $apagar = $database->executeQuery(
            "DELETE FROM pedidos WHERE id = :id",
            [':id' => $id]
        );

        if ($apagar->rowCount() > 0) {
            echo json_encode([
                'status' => 'success',
                'message' => 'Cliente deletado com sucesso'
            ]);
        } else {
            http_response_code(404);
            echo json_encode([
                'status' => 'error',
                'message' => 'Cliente não encontrado'
            ]);
        }
    break;

    // -------------------------------------------------------
    // Método não permitido
    // -------------------------------------------------------
    default:
        http_response_code(405);
        echo json_encode([
            'status'  => 'error',
            'message' => 'Método não permitido.'
        ]);
}


?>