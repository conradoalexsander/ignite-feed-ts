import styles from './App.module.css'
import { Header } from './components/Header'
import { Post, PostType } from "./components/Post"
import { Sidebar } from './components/Sidebar'

import "./global.css"

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/53683786?v=4",
      name: "Conrado Alexsander",
      role: "Software Engineer"
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal ' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      { type: 'paragraph', content: 'Acesse e deixe seu feedback' },
      { type: 'paragraph', content: 'conradoalexsander@meumail.com' },
    ],
    publishedAt: new Date('2023-01-10 19:13:10')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1672795241847-6fb44e4f469a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50",
      name: "Conrado Alexsander",
      role: "Software Engineer"
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal ' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      { type: 'paragraph', content: 'Acesse e deixe seu feedback' },
      { type: 'paragraph', content: 'conradoalexsander@meumail.com' },
    ],
    publishedAt: new Date('2023-01-13 20:10:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (<Post post={post} />)
          })}
        </main>
      </div>
    </div>
  )
}
