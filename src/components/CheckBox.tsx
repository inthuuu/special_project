import { useState } from 'react'
import '../components/loadCheckTable/Table.css'
import { teachingWeek } from '../Props/sectionProps'

interface Probs {
  name: string
  isChecked: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  teachingWeek: any,
  index: number
}

const CheckBox = (probs: Probs) => {

  return (
    <>
    <th colSpan={1} scope='col-sm-8'>
      <td>
        <div className='col'>
          <div className='row-sm'> {probs.index} </div>
          <div className='row-sm'>
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
          </div>
        </div>
      </td>
    </th>
    
    </>
  )
}

export default CheckBox

