import { PostListUseCase } from '../data/useCases/postListUseCase/post-list.useCase'
import { Post } from './pages/posts/posts'
import { AxiosHttpClient } from '../infra/implementations/axiosHttpClient/axios-http-client'
import './App.css'

function App() {
  const postListUseCase = new PostListUseCase(new AxiosHttpClient)

  return <Post postListUseCase={postListUseCase} />
}

export default App
