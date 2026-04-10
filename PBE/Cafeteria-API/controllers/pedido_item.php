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
    // -------------------------------------------------------
    case 'GET':
        $stmt = $database->executeQuery(
            "SELECT pedido_itens.*, produtos.nome 
             FROM pedido_itens
             INNER JOIN produtos ON pedido_itens.produto_id = produtos.id
             WHERE pedido_itens.pedido_id = :pedido_id",
            [':pedido_id' => $id]
        );
        $produtos = $stmt->fetchAll();
  
        echo json_encode([
            'status' => 'success',
            'data'   => $produtos
        ]);
        break;


    // -------------------------------------------------------
    // -------------------------------------------------------
    case 'POST':
        $body = json_decode(file_get_contents('php://input'), true);

        $pedido_id  = trim($body['pedido_id']);
        $produto_id = trim($body['produto_id']);
        $quantidade = trim($body['quantidade']);

        if(!$pedido_id || !$produto_id || !$quantidade){
            echo json_encode([
                'status' => 'error',
                'message' => 'Campos obrigatórios não informados'
            ]);
            break;
        }

        // Busca o preço do produto
        $stmt = $database->executeQuery(
            "SELECT preco FROM produtos WHERE id = :produto_id",
            [':produto_id' => $produto_id]
        );
        $produto = $stmt->fetch();

        if(!$produto){
            echo json_encode([
                'status' => 'error',
                'message' => 'Produto não encontrado'
            ]);
            break;
        }

        $preco = $produto['preco'];

        // Insere o item do pedido
        $database->executeQuery(
            "INSERT INTO pedido_itens (pedido_id, produto_id, quantidade, preco) 
            VALUES (:pedido_id, :produto_id, :quantidade, :preco)",
            [
                ':pedido_id'  => $pedido_id,
                ':produto_id' => $produto_id,
                ':quantidade' => $quantidade,
                ':preco'      => $preco
            ]
        );

        http_response_code(201);
        echo json_encode([
            'status' => 'success',
            'message' => 'Item do pedido cadastrado com sucesso',
            'idItem' => $database->lastInsertId()
        ]);

        /*//ADIÇÃO DO VALOR TOTAL NA TABELA PEDIDOS

        $pedido_id = trim($body['pedido_id']);
        $total     = trim($body['total']);

        if(!$pedido_id || !$total){
            echo json_encode([
                'status' => 'error',
                'message' => 'Campos obrigatórios não informados'
            ]);
            break;
        }

        $database->executeQuery(
            "UPDATE pedidos SET total = :total WHERE id = :pedido_id",
            [
                ':total'     => $total,
                ':pedido_id' => $pedido_id
            ]
        );

        echo json_encode([
            'status' => 'success',
            'message' => 'Total atualizado com sucesso'
        ]);*/
        
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
            "DELETE FROM pedido_itens WHERE id = :id",
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