import './App.css'
import { TwitterFollowCard  } from './TwitterFollowCard'

const users = [
    {
        userName: 'pepe', 
        name: 'Pepe García', 
        isFollowing: true
    },
    {
        userName: 'pablohdz',
        name: 'Pablo Hernandez',
        isFollowing: false
    },
    {
        userName: 'elonmusk', 
        name: 'Elon Musk', 
        isFollowing: true
    },
    {
        userName: 'aaronacevedodj', 
        name: 'Aaron Acevedo', 
        isFollowing: false
    }
]

export function App () {
    return (
        <section className="App">
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                        name={name}
                    />
                ))
            }
        </section>
    )
}