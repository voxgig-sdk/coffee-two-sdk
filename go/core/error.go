package core

type CoffeeTwoError struct {
	IsCoffeeTwoError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCoffeeTwoError(code string, msg string, ctx *Context) *CoffeeTwoError {
	return &CoffeeTwoError{
		IsCoffeeTwoError: true,
		Sdk:              "CoffeeTwo",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CoffeeTwoError) Error() string {
	return e.Msg
}
