class HexadecimalColorError extends Error {
	constructor(m) {
		return {
			message: "Uncaught HexadecimalColorError: " + m
		}
	}
} // Error can be used within JavaScript code.

let HexadecimalRGBColor = {}
HexadecimalRGBColor["new"] = function(col) {
	const object = {}
	object.parseColor = function(col) {
		object._color_ = col
		if (col && typeof col === "string" && col.startsWith("#")) {
			object.R = parseInt(col.slice(1, 3), 16)
			object.G = parseInt(col.slice(3, 5), 16)
			object.B = parseInt(col.slice(5, 7), 16)
			if (col.length >= 9) { // This might not be the most precise way to determine an opacity value.
				object.A = parseInt(col.slice(7, 9), 16)
			}
			object._valid = true
		} else {
			if (!col || col === undefined) {
				object._valid = null
			} else {
				object._valid = false
				throw new HexadecimalColorError("The color must be valid to be used.")
			}
		}
	}
	object.parseColor(col)
	return object
}
