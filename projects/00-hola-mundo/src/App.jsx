import './App.css'
import { TwitterFollowCard  } from './TwitterFollowCard'

export function App (){
    return (
        <section className="App">
            <TwitterFollowCard 
                isFollowing 
                userName="pepe" 
                name="Pepe García"
            />
            <TwitterFollowCard 
                isFollowing 
                userName="pheralb" 
                name="Pablo Hernandez"
            />
            <TwitterFollowCard 
                isFollowing={false} 
                userName="elonmusk" 
                name="Elon Musk"
            />
            <TwitterFollowCard 
                isFollowing 
                userName="aaronacevedodj" 
                name="Aaron Acevedo"
            />
        </section>
    )
}