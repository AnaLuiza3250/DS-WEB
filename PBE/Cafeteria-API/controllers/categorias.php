<?php

require_once 'database.php';
$database = new Database();

$method   = $_SERVER['REQUEST_METHOD'];
$path     = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path     = trim($path, '/');
$segments = explode('/', $path);

if (isset($segments[2])) { //se está criado
    $id = $segments[2]; //pega o valor do ID e guarda -> cafeteria/categorias/1 (esse 1 é o [2] da array)
} else {
    $id = null;
}

switch($method){
    // -------------------------------------------------------
    // GET /categorias 
    // GET /categorias/1
    // -------------------------------------------------------
    case 'GET':
        
        $categorias = $database->executeQuery("SELECT * FROM categorias")->fetchAll();
        echo json_encode([
            'status' => 'success',
            'data' => $categorias
        ]);

        break;
    // -------------------------------------------------------
    // POST /categorias
    // Body: { "nome": "Bebidas" }
    // -------------------------------------------------------
    case 'POST':
        $body = json_decode(file_get_contents('php://input'), true);
        $nome = trim($body['nome']);

        if(!$nome){
            echo json_encode([
                'status' => 'error',
                'message' => 'Campo nome não informado'
            ]);
            break;
        }

        $database->executeQuery(
            "INSERT INTO categorias (nome) VALUES (:nome)",
            [':nome' => $nome]
        );

        http_response_code(201);
        echo json_encode([
            'status' => 'success',
            'message' => 'Categoria cadastrada com sucesso',
            'idCategoria' => $database->lastInsertId()
        ]);

        break;
    // -------------------------------------------------------
    // PUT /categorias/1
    // Body: { "nome": "Salgados" }
    // -------------------------------------------------------
    case 'PUT':
        
        break;
    // -------------------------------------------------------
    // DELETE /categorias/1
    // -------------------------------------------------------
    case 'DELETE':
        
        if (!$id) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'ID não informado.']);
            break;
        }

        $database->executeQuery('DELETE FROM categorias WHERE id = :id', [':id' => $id]);
        echo json_encode(['status' => 'success', 'message' => 'Item removido.']);
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