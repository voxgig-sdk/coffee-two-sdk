package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CoffeeTwo",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://coffee.alexflipnote.dev",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"coffee": map[string]any{},
			},
		},
		"entity": map[string]any{
			"coffee": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "file",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
				},
				"name": "coffee",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
								"method": "GET",
								"orig": "/random.json",
								"parts": []any{
									"random.json",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
