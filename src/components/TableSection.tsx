import useOpenController from '../Hooks/useOpenController';
import { TableRow } from './TableRow';
import { ExpendableButton } from './ExpandableButton';
import { Row } from 'react-bootstrap';
import { Info } from '../Props/info';

const TableSection  = ({ info}: {info: Info}) => {

    const { isOpen, toggle } = useOpenController(false);

    return (
        <>
        <tbody>
            <tr>
                <td>{info.name}</td>
                <td>{info.totalStudents}</td>
                <div className='row'>
                    <div className='col-sm'>
                        <td>0</td>
                    </div>
                    <div className='col-sm'>
                        <td className='button-td'>
                        {info.totalWeek}
                        <ExpendableButton isOpen={isOpen} toggle={toggle}/>
                        </td>
                    </div>
                </div>
                <td>0</td>
                <td>{info.totalTeachload}</td>
                <td>{info.degree}</td>
            </tr>
            <th colSpan={7}>
            {isOpen && <TableRow info={info}/>}
            </th>
        </tbody>   
        </>
    )
}

export default TableSection;