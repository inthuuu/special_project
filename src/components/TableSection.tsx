import useOpenController from '../Hooks/useOpenController';
import { TableRow } from './TableRow';
import { ExpendableButton } from '../components/expandButton/ExpandableButton';
import { Info } from '../Props/info';

const TableSection  = ({ info}: {info: Info}) => {

    const { isOpen, toggle } = useOpenController(false);

    return (
        <>
        <tbody>
            
            <tr>
                <td><center>{info.name}</center></td>
                <td><center>{info.totalStudents}</center></td>
                <td>{info.degree}</td>
                <td><center>3</center></td>
                <td><center>0</center></td>
                <td><center>0</center></td>
                <td><center>{info.totalWeek}
                <ExpendableButton isOpen={isOpen} toggle={toggle}/>
                </center></td>
                </tr>
            <th colSpan={7}>
            {isOpen && <TableRow info={info}/>}
            </th>
        </tbody>   
        </>
    )
}

export default TableSection;