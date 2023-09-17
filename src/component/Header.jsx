// rcc
import React, { Component } from 'react'

// axios
import axios from 'axios';

// Link
import { Link } from 'react-router-dom';

// i18n
import { withTranslation } from 'react-i18next';

// flag picture
import tr_flag from "../img/flag/tr.png"
import en_flag from "../img/flag/en.png"

// Class Component Template
class Header extends Component {

    // Ekranda görünen
    static displayName = "Blog Header"

    // CONSTRUCTOR
    constructor(props) {
        super(props);

        // STATE
        this.state = {}

        // BIND
        this.headerLanguageServices = this.headerLanguageServices.bind(this);
        this.internationalizationLanguage = this.internationalizationLanguage.bind(this);
    }

    // CDM

    // language Flag button
    headerLanguageServices(language) {
        axios.defaults.headers['accept-language'] = language;
    }

    // Flags(Bayraklar)
    internationalizationLanguage = (temp) => {
        const { i18n } = this.props;
        i18n.changeLanguage(temp);
        // Header Dil tr, en yapmak
        this.headerLanguageServices(temp)
    }

    // RENDER
    render() {

        // object destructing
        const { t } = this.props;

        // RETURN
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <i className={this.props.logo}></i>
                        </a>
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#" aria-current="page">
                                        {this.props.t("home")} <span className="visually-hidden">(current)</span>
                                    </a>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to="/category/list" className="nav-link" href="#">
                                        {t("category_list")}
                                    </Link>
                                </li> */}

                            </ul>
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="dropdownId"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        {t("category")}
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                                        <Link to="/category/list" className="dropdown-item" href="#">
                                            {t("category_list")}
                                        </Link>
                                        <Link to="/category/create" className="dropdown-item" href="#">
                                            {t("category_create")}
                                        </Link>
                                    </div>
                                </li>
                            </ul>

                            {/* i18n import */}
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a href="#" onClick={() => this.internationalizationLanguage("tr")}>
                                        <img src={tr_flag} className='rounded-circle'
                                            style={{ width: "45px", marginRight: "5px" }} />
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a href="#" onClick={() => this.internationalizationLanguage("en")}>
                                        <img src={en_flag} className='rounded-circle'
                                            style={{ width: "45px", marginRight: "5px" }} />
                                    </a>
                                </li>
                            </ul>

                            <form className="d-flex my-2 my-lg-0">
                                <input
                                    className="form-control me-sm-2"
                                    type="text"
                                    placeholder="Search"
                                />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                    Arama
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
                <div style={{ marginTop: "12%" }}></div>

            </React.Fragment>
        ) //end return
    } // // end render
} //end class

export default withTranslation()(Header);
