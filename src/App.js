import React from 'react'
import Accordion from "./components/Accordion";
import Quiz from './components/Quiz'

const App = () => {

    const items = [
        {
            title: 'What is react',
            content: 'React is a front end javascript framework'
        },

        {
            title: 'Why use React?',
            content: 'React is a favorite library among engineers'
        },

        {
            title: 'How do you use react',
            content: 'You use react by creating components'
        },
    ]


    return (
        <div>
            <Accordion items={items}/>
        </div>
    )

}

export default App