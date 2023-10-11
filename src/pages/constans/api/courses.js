import Axios from "../../configs/axios";

const all = (options = { params: { status: "published" } }) =>
  Axios.get("/courses", options).then((res) => res.data);
const details = (id) => Axios.get(`/courses/${id}`);

const courses = {
  all,
  details,
};
export default courses;
