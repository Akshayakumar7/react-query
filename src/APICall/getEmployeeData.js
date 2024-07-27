import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const getEmployeeData = async () => {
  console.log("again api called");
  const data = await axios.get("https://reqres.in/api/users?page=1");
  return data;
};

export const EmployeeData = () => {
  return useQuery({
    queryKey: ["EmployeeList"],
    queryFn: () => getEmployeeData(),
  });
};

const postUser = async (newUser) => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await axios.post(url, newUser, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["EmployeeList"] });
    },
  });
};
