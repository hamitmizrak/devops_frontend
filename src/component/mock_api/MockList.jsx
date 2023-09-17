import React, { useEffect, useState } from 'react'

// i18n
import { withTranslation } from 'react-i18next'

// Navigate
import { Link, useNavigate } from 'react-router-dom';

// axios
import axios from 'axios';

// FUNCTION Unutma: {t,i18n,props}
function MockList({ t, i18n, props }) {

  // REDIRECT
  let navigate = useNavigate();

 // STATE
  const [MockApi,setMockApi]=useState([]);

  // USE EFFECT
  useEffect(() => {
    axios.get("https://6506fb163a38daf4803ef57c.mockapi.io/category/api/v1/react_project")
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        // console.log(response.status);
        // console.log(response.headers);
        if (response.status === 200) {
          setMockApi(response.data)
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); //end useEffect
  /////////////////////////////////////////

  //DELETE
  const setDeleteMockApi = (id) => {
    if (window.confirm("Silmek istiyor musunuz")) {
      axios.delete("https://6506fb163a38daf4803ef57c.mockapi.io/category/api/v1/react_project/"+id)
        .then(() => {
          getAfterDeleteMockListReturn();
          //window.location="/category/list";
        })
        .catch(() => { })
    } else {
      alert(id + " Silinmedi")
    }
  }

  // Sildikten sonra Liste Dönder
  const getAfterDeleteMockListReturn = () => {
    //2.YOL
    axios.get("https://6506fb163a38daf4803ef57c.mockapi.io/category/api/v1/react_project")
      .then((response) => {
        if (response.status === 200) {
          //console.log("axios data");
          //console.log(response.data);
          setMockApi(response.data)
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }


  // RETURN
  return (
    <React.Fragment>
      <h1 className="text-center display-3">{t("category_list")}</h1>
      <Link to="/category/create" className="btn btn-primary me-2">Ekle</Link>

      <table className="table table-hover table-striped table-responsive">
        <thead>
          <tr>
            <th>{t("id")}</th>
            <th>{t("category_name")}</th>
            <th>{t("date")}</th>
            <th>{t("delete")}</th>
          </tr>
        </thead>
        <tbody>
          {/* JS yazıyorum */}
          {
            MockApi.map((data) =>
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.categoryName}</td>
                <td>{data.createdAt}</td>
                <td>
                  <button onClick={()=>setDeleteMockApi(data.id)} className="btn btn-danger">Sil</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </React.Fragment>
  ) //end return
} // end function

// i18n 
export default withTranslation()(MockList);
