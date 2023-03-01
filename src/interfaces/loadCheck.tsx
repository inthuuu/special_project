import List from "../components/List";
import TableSubject from "../components/loadCheckTable/TableGetData";

const LoadCheck = () => {

    return (
        <>
        <div className="loadCheck">
            {/*<TableCheck />*/}
            <TableSubject></TableSubject>
        </div>
        <div className="container">
            <List></List>
        </div>
        </>
    );
};

export default LoadCheck;
