<?php
declare(strict_types=1);

// CoffeeTwo SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class CoffeeTwoFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new CoffeeTwoBaseFeature();
            case "test":
                return new CoffeeTwoTestFeature();
            default:
                return new CoffeeTwoBaseFeature();
        }
    }
}
