/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { ModalDelete } from "components/modules";

function History() {
  const [data, setData] = useState([
    {
      id: 1,
      invoice: "W-123",
      total: 30.0,
      paymentStatus: "pending",
    },
    {
      id: 2,
      invoice: "W-123",
      total: 30.0,
      paymentStatus: "pending",
    },
    {
      id: 3,
      invoice: "W-123",
      total: 30.0,
      paymentStatus: "pending",
    },
    {
      id: 4,
      invoice: "W-123",
      total: 30.0,
      paymentStatus: "pending",
    },
    {
      id: 5,
      invoice: "W-123",
      total: 30.0,
      paymentStatus: "pending",
    },
  ]);

  const [show, setShow] = useState(false);
  const [idHistory, setIdHistory] = useState("");

  const handleModal = (id) => {
    setIdHistory(id);
    setShow(true);
  };

  const handleDelete = () => {
    alert(idHistory);
    setShow(false);
  };

  return (
    <>
      <div className="history__wrap">
        <div className="container">
          <h1 className="text-white text-center rubik-700">
            Let’s see what you have bought!
          </h1>
          <p
            className="text-white text-center rubik-400"
            style={{ marginBottom: "82px" }}
          >
            Long press to delete item
          </p>

          <div className="row">
            {data?.map((item) => (
              <div className="col-12 col-md-4" key={item.id}>
                <div className="d-flex history__card">
                  <img
                    src="/assets/images/img-history.png"
                    alt="icon"
                    width="100px"
                  />

                  <div>
                    <h5>{item.invoice}</h5>
                    <p className="m-0">IDR {item.total}</p>
                    <p className="m-0">{item.paymentStatus}</p>
                  </div>

                  <div
                    className="history__card--trash"
                    onClick={() => handleModal(item.id)}
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4.2H2.55556M2.55556 4.2H15M2.55556 4.2V15.4C2.55556 15.8243 2.71944 16.2313 3.01117 16.5314C3.30289 16.8314 3.69855 17 4.11111 17H11.8889C12.3014 17 12.6971 16.8314 12.9888 16.5314C13.2806 16.2313 13.4444 15.8243 13.4444 15.4V4.2H2.55556ZM4.88889 4.2V2.6C4.88889 2.17565 5.05278 1.76869 5.3445 1.46863C5.63622 1.16857 6.03189 1 6.44444 1H9.55556C9.96811 1 10.3638 1.16857 10.6555 1.46863C10.9472 1.76869 11.1111 2.17565 11.1111 2.6V4.2M6.44444 8.2V13M9.55556 8.2V13"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ModalDelete
        show={show}
        msg="Are you sure want to delete the selected items?"
        handleClose={() => setShow(false)}
        handleSubmit={handleDelete}
      />
    </>
  );
}

export default History;
