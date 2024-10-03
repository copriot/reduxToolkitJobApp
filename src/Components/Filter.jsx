import { useEffect, useState } from "react";
import { sortOpt, statusOpt, typeOpt } from "../utilities/constant";
import Button from "./Button";
import Select from "./Select";
import api from "../utilities/api";
import { useDispatch } from "react-redux";
import { setError, setJobs, setLoading } from "../redux/slices/jobSlice";
const Filter = () => {
  const [text, setText] = useState();
  const [sort, setSort] = useState();
  const [status, setStatus] = useState();
  const [type, setType] = useState();
  const [debouncedText, setDebouncedText] = useState();
  console.log(debouncedText);
  const dispatch = useDispatch();
  //DEBOUNCE

  useEffect(() => {
    if (text === undefined) return;

    //bir sayaç baslat ve sayac durunca işlem yap
    const timer = setTimeout(() => setDebouncedText(text), 500);

    //eger süre bitmeden tekrar useEffect calısırsa (yeni sayac baslaması) önceki sayacı iptal et
    return () => clearTimeout(timer);
  }, [text]);

  //filtreleme veya sıralama için bir tane state değiştiğinde apidan güncel verileri al

  useEffect(() => {
    const sortP =
      sort === "a-z" || sort === "z-a"
        ? "company"
        : sort === "En Yeni" || sort === "En Eski"
        ? "date"
        : undefined;

    const orderP =
      sort === "a-z" || sort === "En Eski"
        ? "asc"
        : sort === "z-a" || sort === "En Yeni"
        ? "desc"
        : undefined;

    const params = {
      q: debouncedText,
      status: status || undefined,
      type: type || undefined,
      _sort: sortP,
      _order: orderP,
    };

    dispatch(setLoading());

    api
      .get("/jobs", { params })
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  }, [debouncedText, status, sort, type]);
  const handleReset = (e) => {
    e.preventDefault();
    //stateleri sıfırla
    e.target.reset();
    setDebouncedText();
    setText();
    setType();
    setStatus();
    setSort();
  };
  return (
    <div className="filter-sec">
      <h2>Filtreleme Formu</h2>
      <form onSubmit={handleReset}>
        <div>
          <label>Ara</label>
          <input type="text" onChange={(e) => setText(e.target.value)} />
        </div>

        <Select
          label="Durum"
          options={statusOpt}
          fn={(e) => setStatus(e.target.value)}
        />
        <Select
          label="Tür"
          options={typeOpt}
          fn={(e) => setType(e.target.value)}
        />
        <Select
          label="Sırala"
          options={sortOpt}
          fn={(e) => setSort(e.target.value)}
        />

        <Button onSubmit text={"Filtreleri Sıfırla"} />
      </form>
    </div>
  );
};

export default Filter;
