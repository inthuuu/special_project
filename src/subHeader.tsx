import { Routes, Route } from "react-router-dom"
import { Home } from "./interfaces/Home"
import Teachload from './interfaces/teachload';
import LoadCheck  from './interfaces/loadCheck';
import From from './components/Form';
import Summary from "./interfaces/summary"
import { Navbar } from "./components/Navbar"
import { Container, Button} from 'react-bootstrap';
import { auth } from './fireauth'
import CalendarApp from './CalendarApp'

const SubHeader = ({user, userDetail, role} : {user: any, userDetail: any, role: any}) => {
    
    const signOut = async () => {
        await auth.signOut();
    }

    let userId, name, email, roleId, teacherId : string

    for(let i = 0; i < userDetail.length; i++) {
        userId = userDetail[i].uid;
        name = userDetail[i].name;
        email = userDetail[i].email;
        roleId = userDetail[i].roleId;
        teacherId = userDetail[i].teacherId;
    }

    return (
        <>
        <div className='App'>
            <div className="App-header">
                KMITL <br />
                TEACHLOAD
            <div className="justify-content-between">
                {user && <Button onClick={signOut}>Sign out {name}</Button>}
            </div>
            </div>
        <div className='App-subheader'>
                <Navbar roleId={roleId}/>
            </div>
            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<Home /> } />
                    <Route path="/teachload" element={<Teachload userDetail={roleId} />} />
                    <Route path="/summary" element={<Summary />} />
                    <Route path="/loadCheck" element={<LoadCheck />} />
                    <Route path="/from" element={<From />} />
                    <Route path="/calendar" element={<CalendarApp />} />
                </Routes>
            </Container>
            </div>
        </>
    )
}

export default SubHeader;