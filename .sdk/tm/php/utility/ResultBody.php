<?php
declare(strict_types=1);

// CoffeeTwo SDK utility: result_body

class CoffeeTwoResultBody
{
    public static function call(CoffeeTwoContext $ctx): ?CoffeeTwoResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
