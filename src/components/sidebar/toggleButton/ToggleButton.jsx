
const ToggleButton = ({setOpen}) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>btn</button>
  )
}

export default ToggleButton