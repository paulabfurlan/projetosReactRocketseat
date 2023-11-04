import { Header } from "./components/Header"
import "./global.css"
import styles from "./App.module.css"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date('2023-11-04 20:11:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date('2023-11-04 20:14:00')
  },
];

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Paula"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde veritatis est vitae aperiam. Placeat minima provident tempore vel earum doloribus illum et laudantium maiores, consequatur praesentium ut quae odio?"
          />
          <Post 
            author="Liviane"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde veritatis est vitae aperiam. Placeat minima provident tempore vel earum doloribus illum et laudantium maiores, consequatur praesentium ut quae odio?"
          />
        </main>
      </div>
    </div>
  )
}

export default App
