import React from "react";
import AutoInput from "../Components/AutoInput";
import Select from "../Components/Select";
import Button from "../Components/Button";
import { statusOpt, typeOpt } from "../utilities/constant";
import { v4 } from "uuid";
import api from "../utilities/api";
import { useNavigate } from "react-router-dom";
const AddJob = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    //formData oluştur
    const formData = new FormData(e.target);

    //inputlardaki verilerden bir nesne oluştur
    const newJob = Object.fromEntries(formData.entries());
    // tarih ve id ekle
    newJob.id = v4();
    newJob.date = Date.now();
    //api'a yeni veriyi kaydet
    api.post("/jobs");
    // store'a kaydet

    //anasayfaya yönlendir
    navigate("/");
  };
  return (
    <div className="add-page">
      <section className="container">
        <h2>Yeni İş Ekle</h2>
        <form onSubmit={handleSubmit}>
          <AutoInput label="Pozisyon" name="position" />
          <AutoInput label={"Şirket"} name="company" />
          <AutoInput label={"Lokasyon"} name="location" />
          <Select label={"Durum"} name={"status"} options={statusOpt} />
          <Select label={"Tür"} name={"type"} options={typeOpt} />
          <div>
            <Button text={"OLUŞTUR"} />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
