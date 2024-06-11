import { EmployeeData } from "./APICall/getEmployeeData";
import "./App.css";
import EmployeeCard from "./components/CardComponents/EmployeeCard";

function App() {
  const { data, isLoading, error, isError } = EmployeeData();

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
}

export default App;
