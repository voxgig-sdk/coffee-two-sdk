<?php
declare(strict_types=1);

// CoffeeTwo SDK base feature

class CoffeeTwoBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CoffeeTwoContext $ctx, array $options): void {}
    public function PostConstruct(CoffeeTwoContext $ctx): void {}
    public function PostConstructEntity(CoffeeTwoContext $ctx): void {}
    public function SetData(CoffeeTwoContext $ctx): void {}
    public function GetData(CoffeeTwoContext $ctx): void {}
    public function GetMatch(CoffeeTwoContext $ctx): void {}
    public function SetMatch(CoffeeTwoContext $ctx): void {}
    public function PrePoint(CoffeeTwoContext $ctx): void {}
    public function PreSpec(CoffeeTwoContext $ctx): void {}
    public function PreRequest(CoffeeTwoContext $ctx): void {}
    public function PreResponse(CoffeeTwoContext $ctx): void {}
    public function PreResult(CoffeeTwoContext $ctx): void {}
    public function PreDone(CoffeeTwoContext $ctx): void {}
    public function PreUnexpected(CoffeeTwoContext $ctx): void {}
}
