<?php
declare(strict_types=1);

// CoffeeTwo SDK utility: result_headers

class CoffeeTwoResultHeaders
{
    public static function call(CoffeeTwoContext $ctx): ?CoffeeTwoResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
