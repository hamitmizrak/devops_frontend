
import React, { useEffect, useState } from 'react'

// i18n
import { withTranslation } from 'react-i18next'

// Navigate
import { useNavigate, useParams } from 'react-router-dom';

// Api
import ApiCategory from '../../services/ApiCategory';

// İmage
import myViewPicture from '../../img/planet-8215532_1920.png'

// FUNCTION
function CategoryView({ t, i18n, props }) {

  // REDIRECT
  let navigate = useNavigate();

  // STATE
  const [id, setId] = useState(null);
  const [categoryViewStateApi, setcategoryViewStateApi] = useState([]); //dikkat diziyi unutma

  // PARAMS (ID)
  const redirectHandlingViewId = useParams();

  // USE EFFECT
  useEffect(() => {
    // 1.YOL (ID)
    // setId(localStorage.getItem("category_view_id"));
    setId(redirectHandlingViewId.id); //2.YOL (ID)

    //FIND
    ApiCategory.categoryApiFindById(redirectHandlingViewId.id)
      .then((response) => {
        console.log(response.data);
        setcategoryViewStateApi(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
    []); //end use effect

  /////////////////////////////////////////
  // FUNCTION ALL
    // id: 1, systemDate: '2023-08-28T07:55:24.075+00:00', updatedUser: 'HamitM.', updatedDate: '2023-08-29T10:24:33.428+00:00', categoryName: 'bilgisayar449696'

  // RETURN
  return (
    <React.Fragment>
      <h1 className="text-center display-3">{t("category_view")}</h1>
      <div className="card">
        <img className="card-img-top" src={myViewPicture} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{categoryViewStateApi.id}</h4>
          <p className="card-text">{categoryViewStateApi.updatedUser}</p>
          <p className="card-text">{categoryViewStateApi.categoryName}</p>
          <p className="card-text">{categoryViewStateApi.systemDate}</p>
        </div>
      </div>
    </React.Fragment>
  ) //end return
} // end function

// i18n 
export default withTranslation()(CategoryView);
