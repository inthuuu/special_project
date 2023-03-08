import { Component, useState } from "react";
import { Button } from 'reactstrap'
import jsPDF from 'jspdf'
//import Overlay from "react-overlay-component";


class Conclusion extends Component {

    pdfGenerate = () => {
        var doc = new jsPDF('portrait','px','a4', false);
        // doc.addPage()
        // doc.text(60, 0, 'Name')
        doc.save('load.pdf')
    }
    
    render() {
        const [isOver, setOverlay] = useState(false);

        const closeOverlay = () => setOverlay(false);

        const configs = {
            animate: true,
            top: '5em',
            clickDismiss: false,
            escapeDismiss: false,
            focusOutline: false
        }
        
        return (
            <>
            <div>
            <Button onClick={ this.pdfGenerate }>Download</Button>
            </div>
            <div>
                <button
                className="primary"
                onClick={()=> {
                    setOverlay(true)
                }}
                > open overlay 
                </button>

                
            </div>
            </>
            
        );
    }
}

export default Conclusion;