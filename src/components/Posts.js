import axios from "axios"

const Posts = async () => {
  const res = await axios.get("http://localhost:3000/posts/")
  console.log(res.data)
  const posts = res.data
  const postList = posts
    .map((post) => {
      const { title, id, body } = post
      return `<h4>${title}</h4><p>${body}</p>`
    })
    .join("")

  console.log(postList)

  const template = `
    <div class="card">
      <div class="card-body">
      ${postList}
      </div>
    </div>
  `

  return template
}

export default Posts
