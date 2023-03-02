import React, { Component } from "react";
import { Button } from 'reactstrap'
import jsPDF from 'jspdf'
import SearchBox from "../components/searchBox/searchBox";

class Conclusion extends Component {

    pdfGenerate = () => {
        var doc = new jsPDF('portrait','px','a4', false);
        // doc.addPage()
        // doc.text(60, 0, 'Name')
        doc.save('load.pdf')
    }
    
    render() {
        
        return (
            <div>
            <Button onClick={ this.pdfGenerate }>Dowload</Button>

            </div>
        );
    }
}

export default Conclusion;