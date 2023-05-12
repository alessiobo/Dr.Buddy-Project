import useSWR, { mutate } from "swr";
import Cookies from "js-cookie";

function useServer(url) {
  const common_request = (data, method) => {
    return {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : null,
      mode: "cors",
    };
  };

  const token = Cookies.get("token");

  const token_request = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const fetcher = (url) => fetch(url, token_request).then((res) => res.json());

  const URL = "http://localhost:5000/" + url;

  //CRUD----------------------------------------------------------------------

  //GetAll
  const { data, error } = useSWR(URL, fetcher);

  //getAllReservationByPatientID
  async function getAllReservationByPatientID(id) {
    try {
      const res = await fetch(URL + "/patient/" + id);
      const json = await res.json();

      return json;
    } catch (error) {
      console.log("Error: " + error);
    }
  }
  //GetAllReservationByID
  async function getAllReservationByDoctorID(id) {
    try {
      const res = await fetch(URL + "/doctor/" + id, token_request);
      const json = await res.json();

      return json;
    } catch (error) {
      console.log("Error: SONO QUI" + error);
    }
  }

  //GetOne
  async function getOneObj(id) {
    try {
      const res = await fetch(URL + "/" + id);
      const json = await res.json();

      return json;
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  //Create
  async function createObj(data) {
    try {
      const option = common_request(data, "POST");

      const res = await fetch(URL, option);
      const json = await res.json();
      mutate(URL);
      return json;
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  //Update
  async function updateObj(id, data) {
    try {
      const option = common_request(data, "PUT");

      const res = await fetch(URL + "/" + id, option);
      const json = await res.json();
      mutate(URL);
      return json;
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  //Delete
  async function deleteObj(id) {
    try {
      const option = common_request(null, "DELETE");

      await fetch(URL + "/" + id, option);

      mutate(URL);
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  //Login, SALVARE TOKEN NEI COOKIES
  async function login(data) {
    try {
      const option = common_request(data, "POST");

      const res = await fetch(URL + "/login", option);
      const json = await res.json();

      console.log(json);
      // console.log();

      Cookies.set("token", json.token);

      mutate(URL);
      return json;
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  return {
    data,
    error,
    getOneObj,
    createObj,
    updateObj,
    deleteObj,
    getAllReservationByPatientID,
    getAllReservationByDoctorID,
    login,
  };
}
export default useServer;
