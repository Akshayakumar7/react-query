import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getEmployeeData = async () => {
  const data = await axios.get(
    "https://reqres.in/api/users?page=1"
  );
  return data;
};

export const EmployeeData = () => {
  return useQuery({
    queryKey: ["EmployeeList"],
    queryFn: () => getEmployeeData(),
  });
};
