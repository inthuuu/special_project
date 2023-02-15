import '../components/Table.css'

interface Probs {
  name: string
  isChecked: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const CheckBox = (probs: Probs) => {
  return (
    <>
    <div className="checkbox">
    <label htmlFor=''></label>
      <input
        type='checkbox'
        name={probs.name}
        id={probs.name}
        checked={probs.isChecked}
        onChange={probs.onChange}
        >
      </input>
    </div>
    </>
  )
}

export default CheckBox

