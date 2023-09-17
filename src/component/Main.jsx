// rcc
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

// Router
import { Link } from 'react-router-dom';

// Main Css
import './main.css';

// Image
import mainPicture from "../img/moon.jpg"

// Class Component Template
class Main extends Component {

  // Ekranda görünen
  static displayName="Blog Footer"

  // CONSTRUCTOR
  constructor(props) {
    super(props);

    // STATE
    this.state={}

    // BIND
  }

  // CDM

  // RENDER
  render() {

    // RETURN
    return (
      <React.Fragment>
        <br /><br /><br />
       <p> Hoşgeldiniz </p>
       <img src={mainPicture} />
       <br />
       <Link className="btn btn-primary mt-3 ms-2" to="/category/list">Category List</Link>
       <Link className="btn btn-primary mt-3 ms-2" to="/mock/list">Mock List</Link>

      </React.Fragment>
    ) //end return
  } // // end render
} //end class

export default withTranslation()(Main);
