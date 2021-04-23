import { Col, Container, DropdownButton, Dropdown, Row } from "react-bootstrap";
import React from "react";

const index = () => {
  return (
    <div id="admin">
      <div className="sidebar">
        <div className="sidebar-brand">
          <h2>
            <span>Jazmyn Admin</span>
          </h2>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="#" className="active">
                <span className="las la-igloo"></span> <span>Dashboard</span>{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <span className="las la-clipboard-list"></span>{" "}
                <span>Tasks</span>{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <span className="las la-users"></span> <span>Customers</span>{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <span className="las la-shopping-bag"></span>{" "}
                <span>Orders</span>{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <span className="las la-receipt"></span> <span>Inventory</span>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <header>
          <div className="header-title">
            <h2>
              <label htmlFor="">
                <span className="las la-bars"></span>
              </label>{" "}
              Dashboard
            </h2>
          </div>
          <div className="search-wrapper">
            <span className="las la-search"></span>
            <input type="search" placeholder="search" />
          </div>
          <div className="user-wrapper">
            {/* Image goes here */}
            <div>
              <h4>Jane Doe</h4>
              <small>Admin</small>
            </div>
          </div>
        </header>
        <main>
          <div className="cards">
            <div className="card-single">
              <div>
                <h2>54</h2>
                <span>Orders</span>
              </div>
              <div>
                <span className="las la-shopping-bag"></span>
              </div>
            </div>
            <div className="card-single">
              <div>
                <h2>18</h2>
                <span>Tasks</span>
              </div>
              <div>
                <span className="las la-clipboard-list"></span>
              </div>
            </div>
            <div className="card-single">
              <div>
                <h2>$35,000</h2>
                <span>Income</span>
              </div>
              <div>
                <span className="lab la-google-wallet"></span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default index;
