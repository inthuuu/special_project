import firebase from "../firebase";

const sectionDb = firebase.collection("/section")
const subjectDb = firebase.collection("/subjects")
const teachloadDb = firebase.collection("/loadsum")
 
class GetInfo {

    getAllSection () {
        return sectionDb;
    }
    
    getAllSubject () {
        return subjectDb;
    }

    getAllTeachload (teacherId: string) {
        return teachloadDb.doc(teacherId).collection("teachload");
    }
}

export default new GetInfo();