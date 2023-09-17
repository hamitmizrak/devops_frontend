import React, { useEffect, useState } from 'react'

// i18n
import { withTranslation } from 'react-i18next'

// Navigate
import { Link, useNavigate } from 'react-router-dom';

// Services
import ApiCategory from '../../services/ApiCategory';

// axios
import axios from 'axios';

// FUNCTION Unutma: {t,i18n,props}
function CategoryList({ t, i18n, props }) {

  // REDIRECT
  let navigate = useNavigate();

  // STATE
  const [categoryListStateApi, setcategoryListStateApi] = useState([]); //dikkat diziyi unutma

  // USE EFFECT
  useEffect(() => {
    ApiCategory.categoryApiList()
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        // console.log(response.status);
        // console.log(response.headers);
        if (response.status === 200) {
          setcategoryListStateApi(response.data)
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); //end useEffect
  /////////////////////////////////////////
  // FUNCTION ALL
  // id: 1, systemDate: '2023-08-28T07:55:24.075+00:00', updatedUser: 'HamitM.', updatedDate: '2023-08-29T10:24:33.428+00:00', categoryName: 'bilgisayar449696'

  //2.YOL UPDATE (LocalStorage)
  const setUpdateCategory = (data) => {
    let { id, categoryName, systemDate } = data;
    localStorage.setItem("category_update_id", id);
    localStorage.setItem("category_update_category_name", categoryName);
    localStorage.setItem("category_update_date", systemDate);
  }

  //2.YOL VIEW (LocalStorage)
  const setViewCategory = (id) => {
    localStorage.setItem("category_view_id", id);
  }

  //DELETE
  const setDeleteCategory = (id) => {
    if (window.confirm("Silmek istiyor musunuz")) {
      ApiCategory.categoryApiDeleteById(id)
        .then(() => {
          getAfterDeleteCategoryListReturn();
          //window.location="/category/list";
        })
        .catch(() => { })
    } else {
      alert(id + " Silinmedi")
    }
  }

  // Sildikten sonra Liste Dönder
  const getAfterDeleteCategoryListReturn = () => {
    //2.YOL
    axios.get("http://localhost:4444/category/api/v1/list")
      .then((response) => {
        if (response.status === 200) {
          //console.log("axios data");
          //console.log(response.data);
          setcategoryListStateApi(response.data)
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Delete All
  const deleteAll = () => {
    if (window.confirm("Silmek istiyor musunuz")) {
      ApiCategory.categoryApiAllDelete()
        .then(() => {
          getAfterDeleteCategoryListReturn();
          navigate("/category/list")
        })
        .catch(() => { })
    } else {
      alert(" Silinmedi")
    }
  }

  // Speed Data
  const speedData = async () => {
    let user = prompt("Kaç tane veri eklemek istiyorsunuz");
    let response = await ApiCategory.categoryApiSpeedData(user);
    if(response.status==200){
      getAfterDeleteCategoryListReturn();
      navigate("/category/list")
    }
  }

  // RETURN
  return (
    <React.Fragment>
      <h1 className="text-center display-3">{t("category_list")}</h1>
      <Link to="/category/create" className="btn btn-primary me-2">Ekle</Link>
      <button onClick={deleteAll} className="btn btn-danger me-2">All Delete</button>
      <button onClick={speedData} className="btn btn-info">Speed Data</button>

      <table className="table table-hover table-striped table-responsive">
        <thead>
          <tr>
            <th>{t("id")}</th>
            <th>{t("category_name")}</th>
            <th>{t("updatedUser")}</th>
            <th>{t("date")}</th>
            <th>{t("update")}</th>
            <th>{t("view")}</th>
            <th>{t("delete")}</th>
          </tr>
        </thead>
        <tbody>
          {/* JS yazıyorum */}
          {
            categoryListStateApi.map((data) =>
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.categoryName}</td>
                <td>{data.updatedUser}</td>
                <td>{data.systemDate}</td>
                <td>
                  <Link to={`/category/update/${data.id}`}>
                    <i onClick={() => setUpdateCategory(data)} className="fa-solid fa-pen-to-square"></i>
                  </Link>
                </td>

                <td>
                  <Link to={`/category/view/${data.id}`}>
                    <i onClick={() => setViewCategory(data.id)} className="fa-solid fa-expand text-warning"></i>
                  </Link>
                </td>

                <td>
                  <Link to={"/category/list"}>
                    <i onClick={() => setDeleteCategory(data.id)} className="fa-solid fa-trash text-danger"></i>
                  </Link>
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
export default withTranslation()(CategoryList);
