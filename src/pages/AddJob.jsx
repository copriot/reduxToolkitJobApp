import React from "react";
import AutoInput from "../Components/AutoInput";
import Select from "../Components/Select";
import Button from "../Components/Button";
import { statusOpt, typeOpt } from "../utilities/constant";
const AddJob = () => {
  return (
    <div className="add-page">
      <section className="container">
        <h2>Yeni İş Ekle</h2>
        <form>
          <AutoInput label="Pozisyon" name="position" />
          <AutoInput label={"Şirket"} name="company" />
          <AutoInput label={"Lokasyon"} name="location" />
          <Select label={"Durum"} name={"status"} options={statusOpt} />
          <Select label={"Tür"} name={"type"} options={typeOpt} />
          <div>
            <Button></Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
