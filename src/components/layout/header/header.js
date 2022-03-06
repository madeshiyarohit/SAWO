import React from "react";

export default function Header({themeChanger}) {
 

  return (
    <>
      <div className="header">
        <div className=" container mx-auto flex w-full items-center  justify-between">
          <div className="inline-flex">Header</div>
          <button className="inline-flex button p-2 m-3 border-2" onClick={themeChanger}>
            Switch To 
            {/* {theme === "light" ? "Dark" : "Light"} */}
          </button>
        </div>
      </div>
    </>
  );
}
