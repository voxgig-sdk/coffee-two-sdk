# CoffeeTwo SDK feature factory

from coffeetwo_sdk.feature.base_feature import CoffeeTwoBaseFeature
from coffeetwo_sdk.feature.test_feature import CoffeeTwoTestFeature


_FEATURES = {
    "base": lambda: CoffeeTwoBaseFeature(),
    "test": lambda: CoffeeTwoTestFeature(),
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
