<?php
declare(strict_types=1);

// CoffeeTwo SDK utility: feature_add

class CoffeeTwoFeatureAdd
{
    public static function call(CoffeeTwoContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
