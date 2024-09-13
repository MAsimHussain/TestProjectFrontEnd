import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../components/ApiServices/ApiService";
export default function EmployeeList() {
  const navigate = useNavigate();

  const Static_Images = import.meta.env.VITE_STATIC_ASSETS;

  const [Employees, setEmployees] = useState([]);

  console.log(Employees);
  const EmployeesData = async () => {
    try {
      const Employees = await apiService.GetEmployees();

      setEmployees(Employees);
    } catch (error) {
      console.error("Error fetching Employees:", error);
    }
  };

  useEffect(() => {
    EmployeesData();
  }, []);

  const DeleteEmployee = async (id) => {
    try {
      debugger;
      await apiService.DeleteEmployeeByID(id);
      console.log("Employee Deleted Successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error Delete Employee:", error);
    }
  };

  const GetEmployeeId = async (id) => {
    navigate(`/EditEmployee?id=${id}`);
  };

  return (
    <>
      <div className="flex flex-wrap  -mx-3 mb-5">
        <div className="w-full mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                  <span className="mr-3 font-semibold text-dark">
                    Employees
                  </span>
                  <span className="mt-1 font-medium text-secondary-dark text-lg/normal">
                    All Employees from the our team
                  </span>
                </h3>
                <div className="relative flex flex-wrap items-center my-2 text-center">
                  <Link to="AddEmployee">
                    <p className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light">
                      Add Employee
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    <thead className="align-bottom">
                      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                        <th className="pb-3 text-center min-w-[100px]">
                          Sr.No
                        </th>
                        <th className="pb-3 text-center min-w-[100px]">
                          FirstName
                        </th>
                        <th className="pb-3 text-center min-w-[100px]">
                          LastName
                        </th>
                        <th className="pb-3 text-center min-w-[100px]">
                          Email
                        </th>
                        <th className="pb-3 pr-12 text-center min-w-[175px]">
                          Phone
                        </th>
                        <th className="pb-3 text-center min-w-[50px]">
                          Profile Image
                        </th>
                        <th className="pb-3 text-center min-w-[50px]">
                          Opetation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Employees.map((item, index) => {
                        console.log(item);
                        const {
                          firstName,
                          lastName,
                          email,
                          phone,
                          profileImage,
                          id,
                        } = item;

                        return (
                          <tr
                            key={index}
                            className="border-b border-dashed last:border-b-0"
                          >
                            <td className="p-3 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                {index + 1}
                              </span>
                            </td>
                            <td className="p-3 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                {firstName}
                              </span>
                            </td>
                            <td className="p-3 text-center">
                              <span className="font-semibold text-md ">
                                {lastName}
                              </span>
                            </td>
                            <td className="p-3 text-center">{email}</td>
                            <td className="p-3 text-center">{phone}</td>
                            <td className="p-3 pl-0 text-center">
                              <img
                                src={`${Static_Images}/${profileImage}`} // Adjust based on your API's image path
                                className="w-[50px] h-[50px] rounded-2xl mx-auto"
                                alt="ProfilePicture"
                              />
                            </td>
                            <td className="p-3 pl-0 text-center">
                              <button
                                onClick={() => GetEmployeeId(id)}
                                className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-red focus:bg-red"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => DeleteEmployee(id)}
                                className="inline-block ml-2 text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-blue focus:bg-blue"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-5">
        <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
          <p className="text-sm text-slate-500 py-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <img src="c5de40e7-5320-41ee-a5f4-5157b8a59d4f.svg" alt="" />
          </p>
        </div>
      </div>
    </>
  );
}
