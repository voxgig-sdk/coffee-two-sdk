package voxgigcoffeetwosdk

import (
	"github.com/voxgig-sdk/coffee-two-sdk/go/core"
	"github.com/voxgig-sdk/coffee-two-sdk/go/entity"
	"github.com/voxgig-sdk/coffee-two-sdk/go/feature"
	_ "github.com/voxgig-sdk/coffee-two-sdk/go/utility"
)

// Type aliases preserve external API.
type CoffeeTwoSDK = core.CoffeeTwoSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CoffeeTwoEntity = core.CoffeeTwoEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CoffeeTwoError = core.CoffeeTwoError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCoffeeEntityFunc = func(client *core.CoffeeTwoSDK, entopts map[string]any) core.CoffeeTwoEntity {
		return entity.NewCoffeeEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCoffeeTwoSDK = core.NewCoffeeTwoSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
