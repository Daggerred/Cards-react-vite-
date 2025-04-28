// import React, { useState } from 'react'
// import Search  from './components/search'

// const App = () => {
//     const [searchTerm,setSearchTerm] = useState('')
//   return (
//     <main>
//           <div className="pattern"/>
//           <img src="./BG.png" alt="Background" />
//     <div className = "wrapper">
//         <header>
//             <img src="./hero-img.png" alt="hero-image" />
//                   <h1>Find <span className="text-gradient">Movies </span>You'll enjoy without the hassle</h1>
//                   <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Search>
//                   <h1>setSearchTerm</h1>
//         </header>
//     </div>
    
//     </main >
//   )
// }

// export default App


import React, { useState , useEffect} from 'react'
import Search from './components/search'
import NewsFeed from './components/newsfeed';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(()=>{
        
    },[])

    return (
        <main >
            <div className="pattern"/>
            <div className="wrapper">
                <header >
                    <img src="./hero-img.png" alt="Hero Banner" />
                    <h1>
                        Find <span className="text-gradient">Movies</span> You'll enjoy without the hassle
                    </h1>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <NewsFeed></NewsFeed>
                </header>
            </div>
        </main>
    )
}

export default App
