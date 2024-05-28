const Connect = {}
Connect["Text"] = {}
Connect["Text"]["en"] = {}
Connect["Text"]["en"]["Toolbox"] = {}
Connect["Text"]["en"]["Toolbox"]["OPERATORS"] = "Operators"
Connect["Text"]["en"]["Toolbox"]["DISPLAY"] = "Display"
Connect["Text"]["en"]["Toolbox"]["COMMENTS"] = "Comments"
Connect["Text"]["en"]["Toolbox"]["LITERALS"] = Literals"

Connect["Text"]["en"]["Blocks"] = {}
Connect["Text"]["en"]["Blocks"]["operators_add_explain"] = "Returns the sum of the two numbers."
Connect["Text"]["en"]["Blocks"]["operators_subtract_explain"] = "Returns the first number subtracted by the second number."
Connect["Text"]["en"]["Blocks"]["operators_multiply_explain"] = "Returns the first number multiplied by the second number."
Connect["Text"]["en"]["Blocks"]["operators_divide_explain"] = "Returns the first number divided by the second number."
Connect["Text"]["en"]["Blocks"]["operators_round_explain"] = "Returns the number rounded positively."
Connect["Text"]["en"]["Blocks"]["operators_negate_explain"] = "Returns the number negated."
Connect["Text"]["en"]["Blocks"]["operators_abs_explain"] = "Returns the number in a positive value."
Connect["Text"]["en"]["Blocks"]["operators_pi_explain"] = "Returns the mathematical constant PI, or the diameter of a circle."
Connect["Text"]["en"]["Blocks"]["operators_euler_explain"] = "Returns the mathematical constant Euler."
Connect["Text"]["en"]["Blocks"]["operators_exponent_explain"] = "Returns the base number with a power of the second number."
Connect["Text"]["en"]["Blocks"]["operators_infinity_explain"] = "Returns a number when the maximum value is exceeded, Infinity."
Connect["Text"]["en"]["Blocks"]["operators_greater_than_explain"] = "Returns if the first number is greater than the second number."
Connect["Text"]["en"]["Blocks"]["operators_less_than_explain"] = "Returns if the first number is less than the second number."
Connect["Text"]["en"]["Blocks"]["operators_equal_to_explain"] = "Returns if the first value is exactly equal to the second value."
Connect["Text"]["en"]["Blocks"]["operators_letter_of_explain"] = "Returns the letter extracted from the text."
Connect["Text"]["en"]["Blocks"]["operators_lowercase_explain"] = "Returns the text entirely converted into lowercase."
Connect["Text"]["en"]["Blocks"]["operators_uppercase_explain"] = "Returns the text entirely converted into uppercase."
Connect["Text"]["en"]["Blocks"]["operators_random_letter_explain"] = "Returns a random letter extracted from the text."
Connect["Text"]["en"]["Blocks"]["operators_random_number_explain"] = "Returns a random number between the first value and the second value."
Connect["Text"]["en"]["Blocks"]["operators_stringtonumber_explain"] = "Returns the text converted into a text value. Returns NaN if the conversion was unsuccessful."
Connect["Text"]["en"]["Blocks"]["operators_valuetostring_explain"] = "Returns the value converted into a text."
Connect["Text"]["en"]["Blocks"]["operators_and_explain"] = "Returns true if both booleans are true."
Connect["Text"]["en"]["Blocks"]["operators_or_explain"] = "Returns true if any of the booleans are true."
Connect["Text"]["en"]["Blocks"]["operators_typeof_explain"] = "Returns the type of the value provided. 'string' if the value is a string, 'number' if the value is a number, etc."
Connect["Text"]["en"]["Blocks"]["operators_not_explain"] = "Returns false if the boolean is true, true if the boolean is false."
Connect["Text"]["en"]["Blocks"]["operators_true_explain"] = "Returns the literal boolean true."
Connect["Text"]["en"]["Blocks"]["operators_false_explain"] = "Returns the literal boolean false."
Connect["Text"]["en"]["Blocks"]["operators_join_explain"] = "Returns two texts combined together."
Connect["Text"]["en"]["Blocks"]["operators_includes_explain"] = "Returns if the first text exactly has the second text."
Connect["Text"]["en"]["Blocks"]["operators_indexof_explain"] = "Returns the index of where the second text EXACTLY is in the first text. Returns 0 if there is no second text in the first text."
Connect["Text"]["en"]["Blocks"]["operators_blank_explain"] = "Returns a blank text. I doubt this is going to be useful in the code you write."

Connect["Text"]["en"]["Blocks"]["operators_add"] = "$0 + $1"
Connect["Text"]["en"]["Blocks"]["operators_subtract"] = "$0 - $1"
Connect["Text"]["en"]["Blocks"]["operators_multiply"] = "$0 x $1"
Connect["Text"]["en"]["Blocks"]["operators_divide"] = "$0 ÷ $1"
Connect["Text"]["en"]["Blocks"]["operators_round"] = "round $0"
Connect["Text"]["en"]["Blocks"]["operators_negate"] = "- %% $0"
Connect["Text"]["en"]["Blocks"]["operators_abs"] = "abs of $0"
Connect["Text"]["en"]["Blocks"]["operators_pi"] = "pi"
Connect["Text"]["en"]["Blocks"]["operators_euler"] = "e"
Connect["Text"]["en"]["Blocks"]["operators_exponent"] = "$0 to the power of $1"
Connect["Text"]["en"]["Blocks"]["operators_infinity"] = "Infinity"
Connect["Text"]["en"]["Blocks"]["operators_greater_than"] = "$0 > $1"
Connect["Text"]["en"]["Blocks"]["operators_less_than"] = "$0 < $1"
Connect["Text"]["en"]["Blocks"]["operators_equal_to"] = "$0 = $1"
Connect["Text"]["en"]["Blocks"]["operators_letter_of"] = "letter $0 of $1"
Connect["Text"]["en"]["Blocks"]["operators_lowercase"] = "$0 in lowercase"
Connect["Text"]["en"]["Blocks"]["operators_uppercase"] = "$0 in uppercase"
Connect["Text"]["en"]["Blocks"]["operators_random_letter"] = "random letter of $0"
Connect["Text"]["en"]["Blocks"]["operators_random_number"] = "random number from $0 to $1"
Connect["Text"]["en"]["Blocks"]["operators_stringtonumber"] = "$0 to a number"
Connect["Text"]["en"]["Blocks"]["operators_valuetostring"] = "$0 to text"
Connect["Text"]["en"]["Blocks"]["operators_and"] = "$0 and $1"
Connect["Text"]["en"]["Blocks"]["operators_or"] = "$0 or $1"
Connect["Text"]["en"]["Blocks"]["operators_typeof"] = "type of $0"
Connect["Text"]["en"]["Blocks"]["operators_not"] = "not $0"
Connect["Text"]["en"]["Blocks"]["operators_true"] = "true"
Connect["Text"]["en"]["Blocks"]["operators_false"] = "false"
Connect["Text"]["en"]["Blocks"]["operators_join"] = "join $0 $1"
Connect["Text"]["en"]["Blocks"]["operators_includes"] = "$0 includes $1 %% ?"
Connect["Text"]["en"]["Blocks"]["operators_indexof"] = "index of $0 in $1"
Connect["Text"]["en"]["Blocks"]["operators_blank"] = "blank text"

Connect["Text"]["en"]["Blocks"]["operators__blocks"] = Object.keys(Connect["Text"]["en"]["Blocks"]).filter(item => item.startsWith("operators_") && !item.endsWith("_explain"))

Connect["Functionality"] = {}
Connect["Functionality"]["Blocks"] = {}
Connect["Functionality"]["Blocks"]["operators_add"] = function(args) {
  return args.NUM1 + args.NUM2
}
Connect["Functionality"]["Blocks"]["operators_subtract"] = function(args) {
  return args.NUM1 - args.NUM2
}
Connect["Functionality"]["Blocks"]["operators_multiply"] = function(args) {
  return args.NUM1 * args.NUM2
}
Connect["Functionality"]["Blocks"]["operators_divide"] = function(args) {
  return args.NUM1 / args.NUM2
}
Connect["Functionality"]["Blocks"]["operators_round"] = function(args) {
  return Math.round(args.NUM)
}
Connect["Functionality"]["Blocks"]["operators_negate"] = function(args) {
  return args.NUM * -1
}
Connect["Functionality"]["Blocks"]["operators_abs"] = function(args) {
  return Math.abs(args.NUM)
}
Connect["Functionality"]["Blocks"]["operators_pi"] = function() {
  return 3.141592653589793
}
Connect["Functionality"]["Blocks"]["operators_euler"] = function() {
  return 2.718281828459045
}
Connect["Functionality"]["Blocks"]["operators_exponent"] = function(args) {
  return Math.pow(args.NUM1, args.NUM2)
}
Connect["Functionality"]["Blocks"]["operators_infinity"] = function(args) {
  return Infinity
}
Connect["Functionality"]["Blocks"]["operators_greater_than"] = function(args) {
  return args.NUM1 > args.NUM2
}
Connect["Functionality"]["Blocks"]["operators_less_than"] = function(args) {
  return args.NUM1 < args.NUM2
}
Connect["Functionality"]["Blocks"]["operators_equal_to"] = function(args) {
  return args.VAL1 === args.VAL2
}
Connect["Functionality"]["Blocks"]["operators_letter_of"] = function(args) {
  return args.VAL.charAt(args.LETTER)
}
Connect["Functionality"]["Blocks"]["operators_lowercase"] = function(args) {
  return args.TEXT.toLowerCase()
}
Connect["Functionality"]["Blocks"]["operators_uppercase"] = function(args) {
  return args.TEXT.toUpperCase()
}
Connect["Functionality"]["Blocks"]["operators_random_letter"] = function(args) {
  let $ = args.TEXT
  return $[Math.floor($.length * Math.random())]
}
Connect["Functionality"]["Blocks"]["operators_random_number"] = function(args) {
  return (Math.random() * (args.NUM2 - args.NUM1)) + args.NUM1
}
Connect["Functionality"]["Blocks"]["operators_tonumber"] = function(args) {
  try {
    return Number(args.VAL)
  } catch {
    return 0
  }
}
