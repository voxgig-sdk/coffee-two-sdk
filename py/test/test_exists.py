# ProjectName SDK exists test

import pytest
from coffeetwo_sdk import CoffeeTwoSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CoffeeTwoSDK.test(None, None)
        assert testsdk is not None
