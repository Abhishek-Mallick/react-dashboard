// import logo from './logo.svg';
import React, { useState } from "react";
import Chart from "react-apexcharts";
import Iframe from "react-iframe";
import "./index.css";
// import './script.js';

function App() {
  const [showGraphs, setShowGraphs] = useState(false);
  const handleButtonClick = () => {
    // setShowUnrealEngine(true);
    setShowGraphs(!showGraphs);
  };
  const [state] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "People Born",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "People Died",
        data: [3, 60, 35, 80, 49, 70, 20, 81],
      },
    ],
  });
  const [chartType, setChartType] = useState("line");

  return (
    <>
      <meta charSet="utf-8" />
      <title>ES - Digitizer</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="" name="keywords" />
      <meta content="" name="description" />
      {/* Favicon */}
      <link href="https://imgur.com/RJujZGw" rel="icon" />
      {/* Google Web Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@500;700&display=swap"
        rel="stylesheet"
      />
      {/* Icon Font Stylesheet */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
      />
      {/* Libraries Stylesheet */}
      <link
        href="lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link
        href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
        rel="stylesheet"
      />
      <link href="css/bootstrap.min.css" rel="stylesheet" />
      <link href="css/style.css" rel="stylesheet" />
      <div className="container-fluid position-relative d-flex p-0">

        {/* Sidebar Start */}
        <div className="sidebar pe-2 pb-4">
          <nav className="navbar bg-secondary navbar-dark">
            <a href="index.html" className="navbar-brand mx-4 mb-3">
              <img
                src="https://i.imgur.com/8k8VSb8.jpg"
                alt="Logo"
                style={{ width: "160px", height: "auto" }}
              />
            </a>

            <div className="navbar-nav w-100">
              <a href="index.html" className="nav-item nav-link active">
                <i className="fa fa-tachometer-alt me-2" />
                Dashboard
              </a>
              <br></br>
              <a href="widget.html" className="nav-item nav-link">
                <i class="bi bi-journal-code"></i>
                ES Digitizer
              </a>
              <br></br>
              <a href="form.html" className="nav-item nav-link">
                <i class="bi bi-calculator"></i>
                ES W2W
              </a>
            </div>
          </nav>
        </div>
        {/* Sidebar End */}

        {/* Content Start */}
        <div className="content">
          {/* Navbar Start */}
          <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-1">
            <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
              <h2 className="text-primary mb-0">
                <i className="fa fa-user-edit" />
              </h2>
            </a>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginBottom: "2px",
                }}
              >
                Dashboard
              </h2>
              <p
                style={{ color: "white", fontWeight: "bold", marginTop: "2px" }}
              >
                Payment Updates
              </p>
            </div>

            <div className="d-flex align-items-center ms-auto">
              <form className="d-flex">
                <div className="input-group">
                  <input
                    className="form-control rounded-pill rounded-end bg-dark border-0 px-4"
                    type="search"
                    placeholder="Search"
                  />
                  <button
                    className="btn btn-outline-light rounded-pill rounded-start"
                    type="submit"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="navbar-nav align-items-center ms-auto">
              <div className="nav-item dropdown">
                <a href="#" className="nav-link">
                  <span className="calendar-icon">
                    <i className="far fa-calendar"></i>
                  </span>
                </a>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link">
                  <span className="calendar-icon">
                    <i className="fa fa-bell me-lg-2"></i>
                  </span>
                </a>
              </div>

              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <img
                    className="rounded-circle me-lg-2"
                    src="https://imgur.com/RJujZGw"
                    alt=""
                    style={{ width: 40, height: 40 }}
                  />
                </a>
              </div>
            </div>
          </nav>
          {/* Navbar End */}

          {/* Chart Start */}
          <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
              <div className="col-sm-12 col-xl-6">
                <div className="bg-secondary text-center rounded p-4">
                  <div className="d-flex align-items-center justify-content-between mb-4 p-4">
                    <h4 className="mb-0">Unreal Engine</h4>
                  </div>
                  <br></br>
                  <div className="unreal-engine-container">
                    <Iframe
                      // url="http://127.0.0.1/unreal-project/"
                      url="https://unreal-ivory.vercel.app/"
                      width="100%"
                      height="650px"
                      frameBorder="0"
                      title="Unreal Engine Model"
                    />
                  </div>

                  <canvas id="worldwide-sales" />
                </div>
              </div>

              {/* container-2 */}
              <div className="col-sm-12 col-xl-4">
                <div className="bg-secondary text-center rounded p-5">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <h4 className="mb-0">Interactive Graph</h4>
                  </div>
                  <div className="App">
                    <div className="row">
                      {!showGraphs && (
                        <>
                          <span>
                            <div className="col-4">
                              <Chart
                                options={state.options}
                                series={state.series}
                                type={chartType}
                                width="450"
                              />
                            </div>
                          </span>
                          <div className="col-4">
                            <Chart
                              options={state.options}
                              series={state.series}
                              type="radar"
                              width="450"
                            />
                          </div>
                        </>
                      )}
                    </div>
                    <div>
                      <button onClick={handleButtonClick}>
                        {showGraphs ? "Prev" : "Next"}
                      </button>
                      {showGraphs && (
                        <div className="row">
                          <span>
                            <div className="col-4">
                              <Chart
                                options={state.options}
                                series={state.series}
                                type="scatter"
                                width="450"
                              />
                            </div>
                          </span>
                          <div className="col-4">
                            <Chart
                              options={state.options}
                              series={state.series}
                              type="heatmap"
                              width="450"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* container-2 */}
              {/* container - 3 */}
              <div className="col-sm-12 col-xl-2 cust-container">
                <div className="bg-secondary text-center rounded p-3">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <h6 className="text-white">Layer Zone</h6>
                  </div>
                  <div className="d-flex flex-column align-items-start">
                    <h4 className="text-muted mb-1">Layer-0 - Layer-1</h4>
                  </div>
                  <br />
                  <div className="d-flex flex-wrap justify-content-start">
                    <div className="d-flex align-items-center">
                      <input type="checkbox" id="checkboxA" name="checkboxA" />
                      <label htmlFor="checkboxA" className="text-white mr-2">
                        Shale Volume
                      </label>
                      <span className="text-white ml-2 p-2">26.3%</span>{" "}
                      {/* Added ml-2 class for margin-left */}
                    </div>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" id="checkboxA" name="checkboxA" />
                      <label htmlFor="checkboxA" className="text-white mr-2">
                        Water Saturation
                      </label>
                      <span className="text-white ml-2 p-2">26.3%</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" id="checkboxA" name="checkboxA" />
                      <label htmlFor="checkboxA" className="text-white mr-2">
                        Total Porosity
                      </label>
                      <span className="text-white ml-2 p-2">28.8%</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" id="checkboxA" name="checkboxA" />
                      <label htmlFor="checkboxA" className="text-white mr-2">
                        Effective Porosity
                      </label>
                      <span className="text-white ml-2 p-2">18.9%</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" id="checkboxA" name="checkboxA" />
                      <label htmlFor="checkboxA" className="text-white mr-2">
                        Lithology Type
                      </label>
                      <span className="text-white ml-2 p-2">Khujai</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" id="checkboxA" name="checkboxA" />
                      <label htmlFor="checkboxA" className="text-white mr-2">
                        Depth
                      </label>
                      <span className="text-white ml-2 p-2">2980.5m</span>
                    </div>
                  </div>
                  <br />
                  <div>
                    <h3 className="text-white">Direction ID</h3>
                    <br></br>
                    <div className="d-flex flex-column align-items-start">
                      <h4 className="text-white">12345678910</h4>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white p-4">Reservior Estimate</h4>

                    <div className="d-flex flex-column align-items-start">
                      <h4 className="text-white p-2">
                        OOIP : 11567 m<sup>2</sup>
                      </h4>
                      <h4 className="text-white p-2">
                        OGIP : 11567 m<sup>2</sup>
                      </h4>
                    </div>
                  </div>
                  <canvas id="worldwide-sales" />
                </div>
              </div>
            </div>
          </div>

          {/*  Chart End */}
          {/* Table Start */}
          <div className="container-fluid pt-4 px-4">
            <div className="bg-secondary text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h4 className="mb-0">Table</h4>
              </div>
              <div className="table-responsive">
                <table className="table text-start align-middle table-bordered table-hover mb-0">
                  <thead>
                    <tr className="text-white">
                      <th scope="col">
                        <input className="form-check-input" type="checkbox" />
                      </th>
                      <th scope="col">Layer Name</th>
                      <th scope="col">AVERAGE DEPTH(m)</th>
                      <th scope="col">IS VISIBLE</th>
                      <th scope="col">IS GRID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {["Sea Level", "Layer 0", "Layer 1"].map((layer, index) => (
                      <tr key={index}>
                        <td>
                          <input className="form-check-input" type="checkbox" />
                        </td>
                        <td>{layer}</td>
                        <td>-1010.00</td>
                        <td>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="isVisible"
                            value={index}
                          />
                        </td>
                        <td>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="isGrid"
                            value={index}
                          />
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td>
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td>Unreal Engine</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Table End */}
        </div>
        {/* Content End */}
        {/* Back to Top */}
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i class="bi bi-arrow-up"></i>
        </a>
      </div>
    </>
  );
}

export default App;
