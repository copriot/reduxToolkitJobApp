const Error = ({ msg, retry }) => {
  return (
    <div className="error">
      <p>Üzgünüz verilere erişirken bir sorun oluştu</p>
      <p className="text">{msg}</p>

      <button className="comic-button" onClick={retry}>
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
