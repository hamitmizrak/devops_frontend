// rcc
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

// CLASS
// Class Component Template
class Footer extends Component {

    // Ekranda görünen
    static displayName = "Blog Footer"

    // CONSTRUCTOR
    constructor(props) {
        super(props);

        // STATE
        this.state = {}

        // BIND
    }

    // CDM
    // function new Date().
    newDate(){
        return " 2021 - "+new Date().getFullYear();
    }

    // RENDER
    render() {

        // RETURN
        return (
            <React.Fragment>
                <footer className="bg-dark text-center text-white text-lg-start fixed-bottom">
                    {/* Copyright */}
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                     {this.newDate()}   {this.props.copy} 
                    </div>
                    {/* Copyright */}
                </footer>

            </React.Fragment>
        ) //end return
    } // // end render
} //end class

export default withTranslation()(Footer);
