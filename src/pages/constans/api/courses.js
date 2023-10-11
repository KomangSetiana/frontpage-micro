import Axios from "../../configs/axios";

export default {
  all: (options = { params: { status: "published" } }) =>
    Axios.get("/courses", options).then((res) => res.data),
  details: (id) => Axios.get(`/courses/${id}`),
};
