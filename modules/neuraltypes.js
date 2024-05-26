const NeuralType = (function()
  let json = {
    approximator: function(rules = {}) {
      // The Approximator is trained to return a chosen value based on the knowledge provided.
      let knowledge = []
      let json = {
        train: function(type) {
          if (["string", "number"].includes(typeof type)) {
            knowledge.push(type)
          } else {
            throw "The Approximator must be trained on either a string, or a number, for simplicity."
          }
        },
        test: function(type) {
          function isJSON(j) {
            try {
              JSON.parse(JSON.stringify(j))
              return true
            } catch {
              return false
            }
          }
          if (isJSON(rules)) {
            throw "The rules argument must be a JSON"
          }
          const appr = Object.prototype.hasOwnProperty.call(rules, "worksApproximately") ? !!rules.worksApproximately : true
          for (const data of knowledge) {
            if (typeof data == "string") {
              if (appr) {
                if (type.startsWith(data) || type.endsWith(data) || type.includes(data)) {
                  return data
                }
              } else {
                if (type === data) {
                  return data
                }
              }
            }
          }
        }
      }
      return json
    }
  }
  return json
})()
