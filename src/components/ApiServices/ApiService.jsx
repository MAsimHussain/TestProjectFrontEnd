import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_URL;

const apiService = {

  GetEmployees: async () => {
    
    const response = await axios.get(`${API_BASE_URL}/Employees`);
    return response.data;
  },

  AddEmployee: async (data) => {
    const response = await axios.post(`${API_BASE_URL}/`, data);
    return response.data;
  },
  GetEmployeeById: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  },

  DeleteEmployeeByID: async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  },
  UpdateEmployee: async (id, Data) => {
    debugger;
    const response = await axios.put(`${API_BASE_URL}/${id}`,Data);
    return response.data;
  },

  
};

export default apiService;
