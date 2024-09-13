import React, { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import apiService from "./ApiServices/ApiService";

export default function AddEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ProfileImageFile, setProfileImageFile] = useState(null);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setProfileImageFile(e.target.files[0]); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("ProfileImageFile", ProfileImageFile);

      const res = await apiService.AddEmployee(formData);
      console.log("Employee added successfully:", res.data);

      navigate("/");
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div className="bg-white border-4 rounded-lg shadow relative m-10">
      <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold">Add Employee</h3>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
        >
          <Link to="/">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </button>
      </div>

      <div className="p-6 space-y-6">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                required
              />
            </div>
            
            <div className="col-span-full bg-white">
              <label
                className=" mb-2 text-sm font-medium text-black h-10 flex items-center"
                htmlFor="file_input"
              >
                Profile Picture
              </label>

              <input
                type="file"
                id="setProfileImageFile"
                name="setProfileImageFile"
                onChange={handleFileChange}
                class="block w-full  border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
              file:bg-gray-50 file:border-0
              file:me-4
              file:py-3 file:px-4
            "
              />
            </div>
          </div>
          <div className="pt-6 border-t border-gray-200 rounded-b">
            <button
              className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Add Employee
            </button>
            <Link to="/">
              <button className="ml-4 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
