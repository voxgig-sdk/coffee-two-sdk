# CoffeeTwo SDK feature factory

from coffeetwo_sdk.feature.base_feature import CoffeeTwoBaseFeature
from coffeetwo_sdk.feature.ratelimit_feature import CoffeeTwoRatelimitFeature
from coffeetwo_sdk.feature.retry_feature import CoffeeTwoRetryFeature
from coffeetwo_sdk.feature.test_feature import CoffeeTwoTestFeature
from coffeetwo_sdk.feature.timeout_feature import CoffeeTwoTimeoutFeature


_FEATURES = {
    "base": lambda: CoffeeTwoBaseFeature(),
    "ratelimit": lambda: CoffeeTwoRatelimitFeature(),
    "retry": lambda: CoffeeTwoRetryFeature(),
    "test": lambda: CoffeeTwoTestFeature(),
    "timeout": lambda: CoffeeTwoTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
