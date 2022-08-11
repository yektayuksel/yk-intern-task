import axios from "axios";
export async function getCustomerData(values, setData) {
  // return new Promise((reject, resolve) => {
  //   const list = [
  //     {
  //       customerNo: 12345,
  //       firstName: "Yekta",
  //       lastName: "Yüksel",

  //       cards: [
  //         {
  //           cardNo: 127893,
  //           limit: 10000,
  //         },
  //         {
  //           cardNo: 2832,
  //           limit: 1500,
  //         },
  //         {
  //           cardNo: 45654,
  //           limit: 1800,
  //         },
  //       ],
  //     },
  //     {
  //       customerNo: 123456,
  //       firstName: "Ramazan",
  //       lastName: "Tan",
  //       cards: [
  //         {
  //           cardNo: 127893,
  //           limit: 10000,
  //         },
  //         {
  //           cardNo: 2832,
  //           limit: 1500,
  //         },
  //         {
  //           cardNo: 45654,
  //           limit: 1800,
  //         },
  //       ],
  //     },
  //     {
  //       customerNo: 1234567,
  //       firstName: "Yekta",
  //       lastName: "Yüksel",
  //       cards: [
  //         {
  //           cardNo: 127893,
  //           limit: 10000,
  //         },
  //         {
  //           cardNo: 2832,
  //           limit: 1500,
  //         },
  //         {
  //           cardNo: 45654,
  //           limit: 1800,
  //         },
  //       ],
  //     },
  //   ];

  //   for (let i = 0; i < list.length; i++) {
  //     if (list[i].customerNo == values.customerNo) {
  //       resolve(list[i]);
  //     }
  //   }
  //   reject(null);
  // });

  axios({
    method: "get",
    url: "localhost:8080/get-cards",
    params: {
      customerNo: values.customerNo,
    },
  })
    .then((res) => {
      const data = {
        customerNo: values.customerNo,
        cards: res,
      };
      setData(data);
    })
    .catch((err) => console.log(err));
}
