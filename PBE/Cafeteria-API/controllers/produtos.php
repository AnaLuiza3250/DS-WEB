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
        
        $produtos = $database->executeQuery("SELECT * FROM produtos")->fetchAll();
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
        $nome = trim($body['nome']);
        $preco = trim($body['preco']);
        $cat_id = trim($body['categoria_id']);

        if(!$nome || !$preco || !$cat_id){
            echo json_encode([
                'status' => 'error',
                'message' => 'Campo nome não informado'
            ]);
            break;
        }

        $database->executeQuery(
            "INSERT INTO produtos (nome, preco, categoria_id) 
            VALUES (:nome, :preco, :categoria_id)",
            [
            ':nome' => $nome,
            ':preco' => $preco,
            ':categoria_id' => $cat_id
            ]
        );

        http_response_code(201);
        echo json_encode([
            'status' => 'success',
            'message' => 'Produto cadastrado com sucesso',
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
                'message' => 'ID do produto não informado'
            ]);
            break;
        }

        $apagar = $database->executeQuery(
            "DELETE FROM produtos WHERE id = :id",
            [':id' => $id]
        );

        if ($apagar->rowCount() > 0) {
            echo json_encode([
                'status' => 'success',
                'message' => 'Produto deletado com sucesso'
            ]);
        } else {
            http_response_code(404);
            echo json_encode([
                'status' => 'error',
                'message' => 'Produto não encontrado'
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