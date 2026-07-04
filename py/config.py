# CoffeeTwo SDK configuration


def make_config():
    return {
        "main": {
            "name": "CoffeeTwo",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://coffee.alexflipnote.dev",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "coffee": {},
            },
        },
        "entity": {
      "coffee": {
        "fields": [
          {
            "active": True,
            "name": "file",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
        ],
        "name": "coffee",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/random.json",
                "parts": [
                  "random.json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
