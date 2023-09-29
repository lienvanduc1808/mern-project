import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function App() {
  // const fetchAPI = async () => {
  //   const res = await axios.get(`http://localhost:3001/api/product/getAll`);
  //   return res.data;
  // };
  // useEffect(() => {
  //   fetchAPI();
  // }, []);

  // const query = useQuery({ queryKey: ["todos"], queryFn: fetchAPI });
  // console.log("query", query);
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;

            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
