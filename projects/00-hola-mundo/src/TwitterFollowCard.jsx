import { useState } from "react"

export function TwitterFollowCard ({ userName = 'unknown', name }){
    const [isFollowing, setIsFollowing] = useState(false)
    const imageSrc = `https://unavatar.io/${userName}`

    // Controlar ESTADOS dependiendo si el prop isFollowing = "true" / "false"
        // Cambiar el texto del botón
        const text = isFollowing ? 'Siguiendo' : 'Seguir'
        
        // Cambiar los estilos del botón
        const buttonClassName = isFollowing
            ? 'tw-followCard-button is-following'
            : 'tw-followCard-button'

    // Función para darle la vuelta al isFollowing
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    className="tw-followCard-avatar"
                    alt="El avatar de Pepe" 
                    src={imageSrc} />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span
                    className="tw-followCard-infoUserName"
                    >@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}> 
                    {text}
                </button>
            </aside>
        </article> 
    )
}