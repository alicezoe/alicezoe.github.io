const API_KEY = "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"

async function fetchData() {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{
          role: "user",
          content: "Hello!"
        }]
    })
  })

  const data = await response.json()
  console.log(data)
}

fetchData()
