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
			let element = document.createElement("p")
			document.body.appendChild(element)
			if (!f) {
				await new Promise((resolve) => {
					function animateText(index) {
						if (index < e.length) {
							if (e[index] === "\n") {
								document.body.appendChild(document.createElement("br"))
								element = document.createElement("p")
								document.body.appendChild(element)
							} else {
								element.innerText += e[index]
							}
            						requestAnimationFrame(() => animateText(index + 1))
						} else {
							resolve()
						}
					}
					animateText(0)
				})
			} else {
				element.innerText = e
			}
		}
		i++
	}
}
setTimeout(function() {
const center = document.createElement("center")
document.body.appendChild(center)
const p = document.createElement("p")
p.innerText = "Apanent167's Wikipedia"
center.appendChild(p)
const input = document.createElement("input")
input.placeholder = "Loading articles..."
input.type = "text"
input.style.width = "500px"
center.appendChild(input)
const select = document.createElement("select")
const option = document.createElement("option")
select.appendChild(option)
option.innerText = "Online articles will appear here"
center.appendChild(select)
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
			setInterval(function() {
				input.style.opacity = String(parseFloat(input.style.opacity) - 0.1)
			}, 100)
			setTimeout(function() {
				input.remove()
			}, 1000)
			p.innerText = "Select an article to view it below"
			onlineArticles.pages.filter(item => item.includes(event.target.value.toLowerCase())).forEach(function(item, i) {
				if (i === 0) {
					option.innerText = item
				} else {
					const option = document.createElement("option")
					option.innerText = item
					select.appendChild(option)
				}
			})
			select.addEventListener("input", function(u) {
				p.style.opacity = "1"
				select.style.opacity = "1"
				setInterval(function() {
					p.style.opacity = String(parseFloat(p.style.opacity) - 0.1)
					select.style.opacity = String(parseFloat(select.style.opacity) - 0.1)
				}, 100)
				setTimeout(function() {
					p.remove()
					select.remove()
					transitions(onlineArticles.information[u.target.value], false)
				}, 1000)
			})
		}
	})
})()
}, 500)
