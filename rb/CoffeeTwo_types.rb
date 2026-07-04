# frozen_string_literal: true

# Typed models for the CoffeeTwo SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Coffee entity data model.
#
# @!attribute [rw] file
#   @return [String]
Coffee = Struct.new(
  :file,
  keyword_init: true
)

# Match filter for Coffee#load (any subset of Coffee fields).
#
# @!attribute [rw] file
#   @return [String, nil]
CoffeeLoadMatch = Struct.new(
  :file,
  keyword_init: true
)

