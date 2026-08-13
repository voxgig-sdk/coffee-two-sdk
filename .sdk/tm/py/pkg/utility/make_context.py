# CoffeeTwo SDK utility: make_context

from projectname_sdk.core.context import CoffeeTwoContext


def make_context_util(ctxmap, basectx):
    return CoffeeTwoContext(ctxmap, basectx)
