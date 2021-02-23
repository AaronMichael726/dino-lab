import logo from './logo.svg';
import './App.css';
import Comments from './comments'

function App() {
  //stored variables
  const name = 'aaron'
  const post = {
    title: 'Dinosaurs are awesome',
    author: 'Aaron Hernandez',
    body: 'Check out this body property!',
    comments: [
      'first',
      'second',
      'third'
    ]
  }
  return (
    <div className="App">
      <h1>{post.title}</h1>
      <h2>By: {post.author}</h2>
      <p>{post.body}</p>
      <Comments />
      <p>{name}</p>
    </div>
  );
}

export default App;
