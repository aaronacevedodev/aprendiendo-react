import './App.css'
import { TwitterFollowCard  } from './TwitterFollowCard'

export function App (){
    return (
        <section className="App">
            <TwitterFollowCard 
                 
                userName="pepe" 
                name="Pepe García"
            />
            <TwitterFollowCard 
                 
                name="Pablo Hernandez"
            />
            <TwitterFollowCard 
                userName="elonmusk" 
                name="Elon Musk"
            />
            <TwitterFollowCard 
                 
                userName="aaronacevedodj" 
                name="Aaron Acevedo"
            />
        </section>
    )
}