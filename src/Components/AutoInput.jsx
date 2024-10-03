import { useSelector } from "react-redux";

const AutoInput = ({ label, name }) => {
  const { jobs } = useSelector((store) => store.job);

  //pozisyon değerlerinden olusan dizi dön
  const array = jobs.map((job) => job[name]);

  //dizideki tekrar eden elemanları kaldır
  const setArray = new Set(array);

  //setin döndüğü nesneyi diziye çevir
  const options = Array.from(setArray);

  return (
    <div>
      <label htmlFor={label}>{label}</label>

      <input type="text" id={label} list={name} name={name} />
      <datalist id={name}>
        {options.map((item, index) => (
          <option key={index} value={item} />
        ))}
      </datalist>
    </div>
  );
};

export default AutoInput;
