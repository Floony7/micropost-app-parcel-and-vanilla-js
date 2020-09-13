import Header from "./components/Header"
import Posts from "./components/Posts"

async function App() {
  const template = document.createElement("template")
  template.innerHTML = `
  ${Header()}
    <div class="container">
      ${await Posts()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App
