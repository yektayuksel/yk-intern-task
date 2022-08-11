import "./App.css";
import QueryComp from "./components/QueryComp";
import DataDisplay from "./components/DataDisplay";
import yktLogo from "./logo/ykt-logo.png";
import { useState } from "react";
import { getCustomerData } from "./api/CustomerDataApi.js";
import { message, Card } from "antd";

function App() {
  const [data, setData] = useState({});
  const [showData, setShowData] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);

  const getData = async (values) => {
    let _data = {};
    try {
      toggle();
      setTableLoading((prevState) => !prevState);
      _data = await getCustomerData(values);
    } catch (err) {
      console.log(err);
      message.error("Müşteri aranırken bir hata oluştu!");
      toggle();
    }
    console.log(_data);
    if (_data != null) {
      setData(_data);
      setTableLoading((prevState) => !prevState);
    } else if (_data == null) {
      toggle();
      setTableLoading((prevState) => !prevState);
      message.warning("Böyle bir müşteri bulunmamaktadır!");
    }
  };

  const toggle = () => {
    setShowData((prevState) => !prevState);
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <div className="header">
          <img src={yktLogo} alt="yk-logo" />
        </div>
        <Card title="Kart Limit Sorgulama" className="query">
          {!showData && <QueryComp getData={getData} />}
          {showData && (
            <DataDisplay loading={tableLoading} data={data} toggle={toggle} />
          )}
        </Card>
      </div>
    </div>
  );
}

export default App;
