import { useState } from "react"

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('Naruto');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev);
    console.log(inputValue);
  }

  return (
    <>
        <form
          onSubmit={onSubmit}
        >
          <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
          />
        </form>
    </>
  )
}
