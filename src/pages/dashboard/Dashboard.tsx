import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Layout from "../../container/layout/Layout";

function Dashboard() {
  const userData = useSelector((state: any) => state.userData);
  React.useEffect(() => {
    console.log("userData", userData);
  }, [userData]);
  return (
    <Layout>
      <div>Dashboard</div>
    </Layout>
  );
}

export default Dashboard;
