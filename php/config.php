<?php
declare(strict_types=1);

// CoffeeTwo SDK configuration

class CoffeeTwoConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "CoffeeTwo",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://coffee.alexflipnote.dev",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "coffee" => [],
                ],
            ],
            "entity" => [
        'coffee' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'file',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
          ],
          'name' => 'coffee',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'GET',
                  'orig' => '/random.json',
                  'parts' => [
                    'random.json',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CoffeeTwoFeatures::make_feature($name);
    }
}
