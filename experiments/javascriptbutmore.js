function compile(code) {
	const assigment = /([\"\'\`]*\s*?)(let\s+(\w+)\:\s*(\"[^\"]*\"|\'[^\']*\'|\`[^\`]*\`)\s*=\s*(\"[^\"]*\"|\'[^\']*\'|\`[^\`]*\`|\d+)|(\w+)()\s*=\s*(\"[^\"]*\"|\'[^\']*\'|\`[^\`]*\`|\d+))/gs
	const c = code
	let variables = {}
	const result = c.replace(assignment, function(match, str, _, varname, type, value) {
		if (str === "") {
			variable[varname] = {
				type,
				value
			}
			return "let " + varname + " = " + value
		}
		return match
	})
	return result
}
