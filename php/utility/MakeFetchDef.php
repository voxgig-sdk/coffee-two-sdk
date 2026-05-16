<?php
declare(strict_types=1);

// CoffeeTwo SDK utility: make_fetch_def

require_once __DIR__ . '/../core/Result.php';

class CoffeeTwoMakeFetchDef
{
    public static function call(CoffeeTwoContext $ctx): array
    {
        $spec = $ctx->spec;
        if (!$spec) {
            return [null, $ctx->make_error('fetchdef_no_spec', 'Expected context spec property to be defined.')];
        }

        if (!$ctx->result) {
            $ctx->result = new CoffeeTwoResult([]);
        }
        $spec->step = 'prepare';

        [$url, $err] = ($ctx->utility->make_url)($ctx);
        if ($err) {
            return [null, $err];
        }

        $spec->url = $url;

        $fetchdef = ['url' => $url, 'method' => $spec->method, 'headers' => $spec->headers];
        if ($spec->body !== null) {
            $fetchdef['body'] = is_array($spec->body) ? \Voxgig\Struct\Struct::jsonify($spec->body) : $spec->body;
        }

        return [$fetchdef, null];
    }
}
