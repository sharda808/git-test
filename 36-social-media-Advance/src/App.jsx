
import './App.css'
  import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import PostList from './components/PostList';
import { useState } from 'react';
import PostListProvider from './store/Post-list-store';
import { Outlet } from 'react-router-dom';
function App() {
const [selectedTab,setSelectedTab] = useState("Home");


  return (
<PostListProvider>
<div className="app-container">
<Sidebar selectedTab = {selectedTab} setSelectedTab= {setSelectedTab} />
<div className="content">
<Header />
{/* {selectedTab === 'Home' ? (<PostList/>) :(<CreatePost />)} */}

<Outlet />
<Footer />
</div>
</div>
</PostListProvider>
  )
}

export default App;
