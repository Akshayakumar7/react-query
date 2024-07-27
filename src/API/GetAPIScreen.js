import React from "react";
import { EmployeeData } from "../APICall/getEmployeeData";
import EmployeeCard from "../components/CardComponents/EmployeeCard";
import "../App.css";

const GetAPIScreen = () => {
  const { data, isLoading, error, isError } = EmployeeData();

  console.log("rendering");

  return (
    <div className="App">
      {!isLoading ? (
        <div>
          {data?.data?.data?.length > 0 ? (
            data?.data?.data?.map((item, index) => (
              <EmployeeCard key={item?.email} data={item} />
            ))
          ) : (
            <div>{!isError && <div>Currently no data available</div>}</div>
          )}
        </div>
      ) : (
        <div>Data is Loading....</div>
      )}
      {isError && <div>{error?.message + "...!!!"} </div>}
    </div>
  );
};

export default GetAPIScreen;
