// You don't HAVE to use ANTLR to make a programming language
let ProgrammingLanguage = (function() {
	const ignoreReg = /(?<!")[\t\r \n;]+(?!")/g // Ignore any whitespace characters, including semicolons, since they're not important in our code.
	function lexer(code) {
		return code.split(ignoreReg)
	}
	function parser(tokens) {
		let transpiled = []
		let int = /[0-9]+(?!\.)/
		let num = /[0-9]+(\.([0-9]+)?)/
		let str = /\"[^\"]*\"/
	}
})()
