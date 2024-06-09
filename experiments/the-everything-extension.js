if (!window["Scratch"]) {
	throw new Error("This needs to be ran in a Scratch environment to be used.")
}

if (!window["Scratch"]["Cast"]) {
	throw new Error("You must run this extension in either TurboWarp, or PenguinMod.")
}

(function(Scratch, Blockly) {
	let counter = 0
	function genStr(args) {
		const charset = args.CHARSET
		const length = args.LENGTH
		let result = ""
		for (let i = 0; i < length; i++) {
			result += charset[Math.floor(Math.random() * charset.length)]
		}
		return result
	}

	// GarboMuffin, why can't we include numbers and capital letters in extension IDs? It seems to not affect anything when you think twice.
	
	class Extension {
		getInfo() {
			return {
				id: "apanentgithub2024extensionENGLISH",
				name: "The Everything Extension for all of your needs",
				color1: "#550000",
				color2: "#250000",
				color3: "#100000",
				blocks: [
					{
						opcode: "",
						blockType: Scratch.BlockType.LABEL,
						text: "Random Blocks"
					},
					{
						opcode: "generatetext",
						blockType: Scratch.BlockType.REPORTER,
						text: "generate a text with charset: [CHARSET], and length: [LENGTH]",
						arguments: {
							CHARSET: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "abcdef"
							},
							LENGTH: {
								type: Scratch.ArgumentType.NUMBER,
								defaultValue: "6"
							}
						}
					},
					{
						opcode: "choosetext",
						blockType: Scratch.BlockType.REPORTER,
						text: "[A] or [B] with a [C]% chance",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "apple"
							},
							B: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "banana"
							},
							C: {
								type: Scratch.ArgumentType.NUMBER,
								defaultValue: "50"
							}
						}
					},
					{
						opcode: "",
						blockType: Scratch.BlockType.LABEL,
						text: "Operators"
					},
				]
			}
		}

		generatetext(args) {
			return genStr(args)
		}

		choosetext(args) {
			return [args.A, args.B][Math.random() > Scratch.Cast.toNumber(args.C) / 100 ? 0 : 1]
		}
	}
	Scratch.extensions.register(new Extension())
})(Scratch, Blockly)
