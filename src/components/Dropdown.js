import React,{useState, useEffect, useRef} from "react";



const Dropdown = ({options, selected ,onSelectedChange}) => {
    const [open, setOpen] = useState(false)
    const ref=useRef()

    useEffect(()=>{

       const onBodyClick= (event)=> {
            if (ref.current.contains(event.target)){
                return;
            }

            setOpen(false)
        }

        document.body.addEventListener('click',onBodyClick)

        return()=>{
           document.body.removeEventListener('click',onBodyClick)
        }
    },[])

    const renderedOptions = options.map((option)=>{

        if (option.value===selected.value){
            return null
        }


        return(
            <div
                key={option.value}
                className='item'
                onClick={()=>{
                    onSelectedChange(option)
                }}
            >
                {option.label}
                <br/>
            </div>
        )
    })

    const renderedColor=options.map((opt)=>{
        const colors=opt.value
            if (colors===selected.value){
                console.log(selected.value)
                return(
                    <p style={{color:colors}}>This color is {colors}</p>
                )
            }

    })





  return (
      <div ref={ref} className='ui form'>
          <div className='field'>
              <label htmlFor="" className='label'>Select a color</label>
              <div onClick={()=>{
                  setOpen(!open)
              }}
                   className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                  <i className='dropdown icon'></i>
                  <div className='text'>{selected.label}</div>
                  <div className={`menu ${open ? 'visible transition' : ''}`}>
                      {renderedOptions}
                  </div>
              </div>
          </div>
          <div>
          {renderedColor}
          </div>
      </div>
  )
}

export default Dropdown