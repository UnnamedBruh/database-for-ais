async function transitions(json, f) {
	let i = 0
	while (json[String(i)]) {
		const e = json[String(i)]
		if (e.startsWith("[") && e.endsWith("]")) {
			const element = document.createElement("img")
			const url = e.slice(1, -1)
			document.body.appendChild(element)
			element.src = url
			if (!f) {
				element.style.opacity = 0
				await new Promise((resolve) => {
					element.onload = function() {
						function fadeIn() {
							const opacity = parseFloat(element.style.opacity)
							if (opacity < 1) {
								element.style.opacity = (opacity + 0.1).toString()
								requestAnimationFrame(fadeIn)
							} else {
								resolve()
							}
						}
						fadeIn()
					}

					element.onerror = function() {
						element.remove()
						resolve()
					}
				})
			}
		} else {
			let element = document.createElement("a")
			document.body.appendChild(element)
			if (!f) {
				await new Promise((resolve) => {
					function animateText(index) {
						for (let i = 0; i < 4; i++) {
							if (index < e.length) {
								if (e[index] === "\n") {
									const br = document.createElement("br")
									document.body.appendChild(br)
									element = document.createElement("a")
									document.body.appendChild(element)
								} else {
									element.textContent += e[index]
								}
							} else {
								resolve()
								break
							}
							index++
						}
						requestAnimationFrame(() => animateText(index + 4))
					}
					animateText(0)
				})
			} else {
				element.textContent = e
			}
		}
		i++
	}
}
setTimeout(function() {
const center = document.createElement("center")
document.body.appendChild(center)
const p = document.createElement("p")
p.innerText = "UnnamedBruh's AI Database"
center.appendChild(p)
const input = document.createElement("input")
input.placeholder = "Loading articles..."
input.type = "text"
input.style.width = "500px"
center.appendChild(input)
const select = document.createElement("select")
const option = document.createElement("option")
select.appendChild(option)
option.innerText = "Online pages will appear here"
center.appendChild(select);
(async function() {
	const onlineArticles = await new Promise(function(res, rej) {
		fetch("information.json").then(async function(e) {
			return await e.json()
		}).then(function(e) {
			res(e)
		})
	})

	input.placeholder = "NOW search an article... we have only " + onlineArticles.pages.slice(0, 5).join(", ") + " for articles."
	input.addEventListener("keydown", function(event) {
		if (event.key == "Enter") {
			input.style.opacity = "1"
			input.disabled = true
			const anim = setInterval(function() {
				input.style.opacity = String(parseFloat(input.style.opacity) - 0.1)
			}, 100)
			setTimeout(function() {
				input.remove()
				clearInterval(anim);
			}, 1000)
			p.innerText = "Select an article to view it below"
			onlineArticles.pages.filter(item => item.includes(event.target.value.toLowerCase())).forEach(function(item) {
				const option = document.createElement("option")
				option.innerText = item
				select.appendChild(option)
			})
			select.addEventListener("input", function(u) {
				p.style.opacity = "1"
				select.style.opacity = "1"
				const int = setInterval(function() {
					p.style.opacity = String(parseFloat(p.style.opacity) - 0.1)
					select.style.opacity = String(parseFloat(select.style.opacity) - 0.1)
				}, 100)
				setTimeout(function() {
					p.remove()
					select.remove()
					clearInterval(int);
					transitions(onlineArticles.information[u.target.value], false)
				}, 1000)
			})
		}
	})
})()
}, 500)
