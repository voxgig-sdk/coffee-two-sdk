<?php
declare(strict_types=1);

// CoffeeTwo SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CoffeeTwoMakeContext
{
    public static function call(array $ctxmap, ?CoffeeTwoContext $basectx): CoffeeTwoContext
    {
        return new CoffeeTwoContext($ctxmap, $basectx);
    }
}
