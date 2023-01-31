const InputDate = ({ date, setDate }) => {
  const handleChange = (e) => {
    setDate(e.target.value);
    console.log("Home", date);
  };

  return (
    <div>
      <input type="date" onChange={handleChange} />
    </div>
  );
};

export default InputDate;
