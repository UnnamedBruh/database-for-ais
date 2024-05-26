async function transitions(json, f) {
	let i = 0
	while (!!json[String(i)]) {
		const e = json[String(i)]
		if (e.startsWith("[") && e.endsWith("]")) {
			const element = document.createElement("img")
			const url = e.slice(1, -1)
			document.body.appendChild(element)
			element.src = url
			if (f === false) {element.style.opacity = 0
			async t() {
				return new Promise(function(res, rej) {
					function e() {
						if (element.style.opacity < 1) {
							element.style.opacity += 0.1
						} else {
							res()
						}
					}
					e()
				})
			}
			await t()}
		} else {
			const element = document.createElement("p")
			document.body.appendChild(element)
			if (f === false) {async function anim(s, e, a) {
				let est = a
				if (e.length > s) {
					if (e[s] === "\n") {
						document.body.appendChild(document.createElement("br"))
						est = document.createElement("p")
						document.body.appendChild(est)
					} else {
						a.innerText += e[s]
					}
					requestAnimationFrame(anim(s + 1, e, est))
				} else {
					e()
				}
			}
			async e(i) {
				return new Promise(function(res, rej) {
					anim(i, res, element)
				})
			}
			await e(0)
		}} else {
			element.innerText = e
		}
	}
}

document.querySelector("input").addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		
	}
}
