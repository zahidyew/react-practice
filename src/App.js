import {Route, BrowserRouter, Switch} from 'react-router-dom'

//import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Posts from './components/posts/Posts'
import Todos from './components/todos/Todos'
import Comments from './components/comments/Comments'
import Albums from './components/albums/Albums'
import Users from './components/users/Users'
import Photos from './components/photos/Photos'
import './css/App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="title-div">
          <h1>JSONPlaceholder</h1>
        </div>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/todos" component={Todos} />
          <Route path="/comments" component={Comments} />
          <Route path="/albums" component={Albums} />
          <Route path="/photos" component={Photos} />
          <Route path="/users" component={Users} />
        </Switch>
      </BrowserRouter>   

      {/* <div style={divStyle}>
        <h1>Some Exercise</h1>
        <Counter />
      </div> */}   
    </div>
  );
}

/* const divStyle = {
  textAlign: "center"
} */

export default App;
