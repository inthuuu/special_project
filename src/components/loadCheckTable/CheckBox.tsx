import { useState } from 'react'
import '../loadCheckTable/Table.css'
import { teachingWeek } from '../../Props/sectionProps'
import BgColors from '../teachLoadTable/BgCompo';

interface Probs {
  name: string
  isChecked: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  teachingWeek: teachingWeek,
  typeLearning: string,
  index: number,
}

const CheckBox = (probs: Probs) => {

  let temp = new Array<any>();
  let test = 'test';
    if(probs.teachingWeek.teacherId != null) {
        for(let i = 0; i < probs.teachingWeek.teacherId?.length; i++) {
            temp.push(probs.teachingWeek.teacherId[i]);
        }
    } else {
      test  = 'null'
    }

  return (
    <>
    <div className='col-md-auto'>
          <div className='row-sm'> {probs.index} </div>
          <div className='row-sm'>
                {test}
          </div>
          <div className='row-sm'>
            <div className="checkbox">
              <label htmlFor=''></label>
                <input
                  type='checkbox'
                  name={probs.name}
                  id={probs.name}
                  checked={probs.isChecked}
                  onChange={probs.onChange}
                  disabled={false}
                  >
                </input>
            </div>
          </div>
        </div>
    
      
    </>
  )
}

export default CheckBox

