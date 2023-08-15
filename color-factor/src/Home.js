import React from 'react'

function Home({renderItems}) {
    return (
        <div className="Home">
            <a href="/colors/new">Add a new color</a>
            {renderItems()}
        </div>
    )
}

export default Home;