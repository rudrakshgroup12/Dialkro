import Ahead from "./Ahead/Ahead.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Newuser from "./Newuser/Newuser.jsx";
import Layout from "../Layout/Layout.jsx";

function Admin() {
  return (
    <Layout>
      <Ahead />
      <Sidebar />
      <Newuser />
    </Layout>
  );
}

export default Admin;
