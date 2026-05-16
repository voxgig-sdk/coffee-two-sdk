# CoffeeTwo SDK feature factory

from feature.base_feature import CoffeeTwoBaseFeature
from feature.test_feature import CoffeeTwoTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CoffeeTwoBaseFeature(),
        "test": lambda: CoffeeTwoTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
