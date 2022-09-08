import React,{useState} from 'react'
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

    const options = [
        {
            label: 'The Color Red',
            value: 'red'
        },

        {
            label: 'The Color Green',
            value: 'green'
        },

        {
            label: 'A Shade of Blue',
            value: 'blue'
        },
    ]

const [selected,setSelected]=useState(options[0])
const [showDropDown,setShowDropDown]=useState(true)


    return (
        <div>
            <button onClick={()=>setShowDropDown(!showDropDown)}>
                Toggle Dropdown
            </button>
            {showDropDown ? (
                <Dropdown
                    onSelectedChange={setSelected}
                    selected={selected}
                    options={options}
                />
            ):null}
        </div>
    )

}

export default App