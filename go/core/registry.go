package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCoffeeEntityFunc func(client *CoffeeTwoSDK, entopts map[string]any) CoffeeTwoEntity

