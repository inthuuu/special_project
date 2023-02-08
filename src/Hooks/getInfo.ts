import firebase from "../firebase";

const sectionDb = firebase.collection("/section")
const subjectDb = firebase.collection("/subjects")
const teachloadDb = firebase.collection("/teachload")
 
class GetInfo {

    getAllSection () {
        return sectionDb;
    }
    
    getAllSubject () {
        return subjectDb;
    }

    getAllTeachload () {
        return teachloadDb;
    }
}

export default new GetInfo();