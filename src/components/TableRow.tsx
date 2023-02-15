import { useState } from 'react';
import { Table } from 'react-bootstrap';
import CheckBox from './CheckBox';
import { professor } from '../Props/sectionProps';
import '../components/Table.css';

const checkedBoxData = [
  {name:'1', isChecked: false},
  {name:'2', isChecked: false},
  {name:'3', isChecked: false},
  {name:'4', isChecked: false},
  {name:'5', isChecked: false},
  {name:'6', isChecked: false},
  {name:'7', isChecked: false},
  {name:'8', isChecked: false},
  {name:'9', isChecked: false},
  {name:'10', isChecked: false},
  {name:'11', isChecked: false},
  {name:'12', isChecked: false},
  {name:'13', isChecked: false},
  {name:'14', isChecked: false},
  {name:'15', isChecked: false},
]

export const TableRow = ({info}:{info: any}) => {

  let checkedBoxsData: any

  info.teachingWeek.map(()=> {
      return checkedBoxsData = checkedBoxData.map((checkedBox) => {
        return {...checkedBox, teacherId: info.teacherId }
      })
  })

  const [ allSelect, setAllSelect ] = useState(false);
  const [ someSelect, setSomeSelect] = useState(false);
  const [ checkedBoxs, setCheckedBox] = useState(
    new Array(checkedBoxsData.length).fill(false)
  );

  const handleAllSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAllSelect(event.target.checked)
    setSomeSelect(!event.target.checked)
    let tempCheckedBox = checkedBoxs.map((checkedBox)=> {
      return {...checkedBox, isChecked: true}
    })
    setCheckedBox(tempCheckedBox);
  }

  const handleSomeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSomeSelect(event.target.checked)
    setAllSelect(!event.target.checked);
    setCheckedBox(new Array(checkedBoxData.length).fill(false));
  }

  const handleCheckedBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = event.target
    if(allSelect) {
      let tempCheckedBox = checkedBoxs.map((checkedBox)=> {
        return {...checkedBox, isChecked: true}
      })
      setCheckedBox(tempCheckedBox);
    } else {
      let tempCheckedBox = checkedBoxs.map((checkedBox)=> {
        return checkedBox.name === name ? {...checkedBox, isChecked: checked} : checkedBox
      })
      setCheckedBox(tempCheckedBox);
    }
  }

  return (
        <div className="container">
            <div className="row">
                <div className="col-sm"><h6> Faculty: {info.faculty}</h6></div>
                <div className="col-sm"><h6>Department: {info.department}</h6> </div>
                <div className="col-sm"><h6>Section: {info.sectionId} </h6></div>
            </div>
            <br />
            <h5>อาจารย์ผู้สอน</h5><br />
            <div className='row'>
              <div className='col-sm'>
                <ul className='list-group'>
                {info.professor && info.professor.map((professor: professor, index: number)=> (
                    <li className='list-group-item'>
                      {professor.name}
                    </li>
                ))}
                </ul>
              </div>
            </div>
            <br />
            <h5>รูปแบบการสอน</h5> <br />
            <div className='container'>
              <div className="row">
                <div className="col-sm form-check">
                  <input className="form-check-input" type="radio" name="select" id="allSelect" value={'allSelect'} checked={allSelect} onChange={handleAllSelect} ></input>
                  <label className="form-check-label">สอนคนเดียว, สอนร่วมกันทุกสัปดาห์</label>
                </div>
                <div className="col-sm form-check">
                  <input className="form-check-input" type="radio" name="select" id="someSelect" value={'someSelect'} checked={someSelect} onChange={handleSomeSelect}></input>
                  <label className="form-check-label">สอนร่วมกันบางสัปดาห์</label>
                </div>
              </div>
            </div>
           
            {/*table */}
              <Table className='table table-bordered'>
                <thead className="thead">
                  <tr>
                    <th scope="col-sm-8">จำนวนสัปดาห์ที่สอน(ไม่รวมสัปดาห์สอบ)</th>
                    <th scope="col">จำนวนชั่วโมงภาระงานต่อภาคเรียน</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colSpan={1} scope="col-sm-8">
                      {checkedBoxs.map((checkedBox , index)=>(
                        <td>
                          <div className='col'>
                            <div className='row-sm'>
                              {index+1}
                            </div>
                            <div className='row-sm'>
                            <CheckBox name={checkedBox.name} isChecked={checkedBox.isChecked} onChange={handleCheckedBox}></CheckBox>
                            </div>
                            
                          </div>
                        </td>
                      ))}
                      
                      </th>
                    <td>0</td>
                  </tr>
                </tbody>
              </Table>
        </div>
  );
};