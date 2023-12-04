import React from "react";

const Header = (props) => {
  const [err, setErr] = React.useState(false);

  const handle = (e) => {
    if (isNaN(e.target.value)) {
      setErr(true);
    } else {
      props.handleChange(e.target.value);
      setErr(false);
    }
  };

  return (
    <div className=" header flex z-10 fixed h-auto gap-3 justify-center ">
      <h2 className=" text-slate-100 flex font-bold  items-center ">
        Cryptonet Technologies
      </h2>
      <input
        style={{
          border: err ? " 5px solid red" : "5px solid green",
          outline: "none",
        }}
        className={` p-2 rounded-md right-2`}
        onChange={(e) => handle(e)}
        placeholder="No of Candidates"
      />
    </div>
  );
};

export default Header;
