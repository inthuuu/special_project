import { Table } from 'react-bootstrap';

const weeks = [
  {week:1},
  {week:2},
  {week:3},
  {week:4},
  {week:5},
  {week:6},
  {week:7},
  {week:8},
  {week:9},
  {week:10},
  {week:11},
  {week:12},
  {week:13},
  {week:14},
  {week:15},
]

export const TableRow = ({info}:{info: any}) => {

  return (
        <div className="container">
            <div className="row">
                <div className="col-sm"><h6> Faculty: {info.faculty}</h6></div>
                <div className="col-sm"><h6>Department: {info.department}</h6> </div>
                <div className="col-sm"><h6>Section: {info.sectionId} </h6></div>
            </div>
            <div className='row'>
              <div className='col-sm'>
                {info.professor.map(()=> (
                    <h6>{info.professor.name}</h6>
                ))}
              </div>
            </div>

            <h5>รูปแบบการสอน</h5>
            <div className='container'>
              <div className="row">
                <div className="col-sm form-check-">
                  <input className="form-check-input" type="radio" name="type" id="type1" value="option1"  ></input>
                  <label className="form-check-label">สอนคนเดียว</label>
                </div>
                <div className="col-sm form-check-">
                  <input className="form-check-input" type="radio" name="type" id="type2" value="option2" ></input>
                  <label className="form-check-label">สอนร่วมกัน</label>
                </div>
                <div className="col-sm form-check-">
                  <input className="form-check-input" type="radio" name="type" id="type3" value="option3" ></input>
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
                      {weeks.map((weeks , index)=>(
                        <td>
                          <div className='col'>
                            <div className='row-sm'>
                              {index+1}
                            </div>
                            <div className='row-sm'>
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