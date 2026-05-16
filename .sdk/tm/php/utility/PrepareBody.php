<?php
declare(strict_types=1);

// CoffeeTwo SDK utility: prepare_body

class CoffeeTwoPrepareBody
{
    public static function call(CoffeeTwoContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
