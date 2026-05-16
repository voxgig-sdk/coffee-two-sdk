<?php
declare(strict_types=1);

// CoffeeTwo SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

CoffeeTwoUtility::setRegistrar(function (CoffeeTwoUtility $u): void {
    $u->clean = [CoffeeTwoClean::class, 'call'];
    $u->done = [CoffeeTwoDone::class, 'call'];
    $u->make_error = [CoffeeTwoMakeError::class, 'call'];
    $u->feature_add = [CoffeeTwoFeatureAdd::class, 'call'];
    $u->feature_hook = [CoffeeTwoFeatureHook::class, 'call'];
    $u->feature_init = [CoffeeTwoFeatureInit::class, 'call'];
    $u->fetcher = [CoffeeTwoFetcher::class, 'call'];
    $u->make_fetch_def = [CoffeeTwoMakeFetchDef::class, 'call'];
    $u->make_context = [CoffeeTwoMakeContext::class, 'call'];
    $u->make_options = [CoffeeTwoMakeOptions::class, 'call'];
    $u->make_request = [CoffeeTwoMakeRequest::class, 'call'];
    $u->make_response = [CoffeeTwoMakeResponse::class, 'call'];
    $u->make_result = [CoffeeTwoMakeResult::class, 'call'];
    $u->make_point = [CoffeeTwoMakePoint::class, 'call'];
    $u->make_spec = [CoffeeTwoMakeSpec::class, 'call'];
    $u->make_url = [CoffeeTwoMakeUrl::class, 'call'];
    $u->param = [CoffeeTwoParam::class, 'call'];
    $u->prepare_auth = [CoffeeTwoPrepareAuth::class, 'call'];
    $u->prepare_body = [CoffeeTwoPrepareBody::class, 'call'];
    $u->prepare_headers = [CoffeeTwoPrepareHeaders::class, 'call'];
    $u->prepare_method = [CoffeeTwoPrepareMethod::class, 'call'];
    $u->prepare_params = [CoffeeTwoPrepareParams::class, 'call'];
    $u->prepare_path = [CoffeeTwoPreparePath::class, 'call'];
    $u->prepare_query = [CoffeeTwoPrepareQuery::class, 'call'];
    $u->result_basic = [CoffeeTwoResultBasic::class, 'call'];
    $u->result_body = [CoffeeTwoResultBody::class, 'call'];
    $u->result_headers = [CoffeeTwoResultHeaders::class, 'call'];
    $u->transform_request = [CoffeeTwoTransformRequest::class, 'call'];
    $u->transform_response = [CoffeeTwoTransformResponse::class, 'call'];
});
