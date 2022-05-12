import React from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx"
import Notes from "../Notes.js"



function App(){
    return(
        <div>
            <Header />
            
            {Notes.map(nota => (<Note 
                key={nota.id}
                title={nota.title}
                content={nota.content}
            />))}

            <Footer />
        </div>
        
    )
}

export default App;