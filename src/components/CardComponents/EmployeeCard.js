import React from "react";
import "./employeecard.css";

const EmployeeCard = (props) => {
  const { data } = props;
  return (
    <div>
      <div className="userFlex">
        <img src={data?.avatar} alt="avatar" />
        <div>
          <h2>{data?.first_name + " " + data?.last_name ?? ""}</h2>
          <h3>{data?.email ?? ""}</h3>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
