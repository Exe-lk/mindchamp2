import React, { useState, useEffect } from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

import axios from "axios";

export default function ShowEmotionResult() {

  const url = "http://127.0.0.1:5000/imagepredict";
  const uid = "123";

  // data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    fetchdata();

  }, [])

  const fetchdata = async () => {

    setLoading(true);

    const imgName = {
      image:+uid+".jpg"
    }

    axios.post(url,imgName).then((res)=>{
      setData(res.data);
      setLoading(false)
    }).catch(err => console.log(err.msg))

  }

  if (loading) {
    return(
      <>
      <div className="container-fluid">
        <div className="container mt-5 pt-5">
          <div className="row">
          <h3 className="text-center">Please wait, Your Image is analysing by our AI.</h3>
          <h3 className="text-center ">AI Autism Emotions Classification Running <div class="spinner-border text-primary"></div></h3>
          </div>
        </div>
      </div>
      </>
    );
    
  }

  return (
    <div className="containeer-fluid ">
      <div className="container mt-5 pt-5">
        <div className="row">
          <h1 className="text-center">Autism Emotion Classification Result</h1>
        </div>
        <div className="row">
          <h4 className="text-center mt-5 mb-5 text-bg-primary">Your Child's current Emotion is {data.prediction}</h4>
          {data.prediction === "Anger" || data.prediction === "Sadness" ?(<center><a className="btn btn-lg btn-primary mt-5 mb-5" href="/SoftSkill" >Go to Soft Skill Development</a></center>):(<center><a className="btn btn-lg btn-primary mt-5 mb-5" href="/">Go to Learning Skill Development</a></center>) }
        </div>
      </div>
    </div>
  )
}