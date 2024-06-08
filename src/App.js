import logo from "./logo.svg";
import "./App.css";
import { EmployeeData } from "./APICall/getEmployeeData";
import EmployeeCard from "./components/CardComponents/EmployeeCard";

function App() {
  const { data, isLoading, error, isError, isSuccess } = EmployeeData();

  console.log("error", error);
  return (
    <div className="App">
      {!isLoading ? (
        <div>
          {data?.data?.data?.length > 0 ? (
            data?.data?.data?.map((item, index) => (
              <EmployeeCard key={item?.email} data={item} />
            ))
          ) : (
            <div>Currently no data available</div>
          )}
        </div>
      ) : (
        <div>Data is Loading....</div>
      )}
    </div>
  );
}

export default App;
