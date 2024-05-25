import React from "react";
import { Link } from "react-router-dom";
import Database from "../../../data_fake.json";
import { FaTrash } from "react-icons/fa";

const Menu = () => {
  const menus = Database.Menus;
  return (
    <>
      <main>
        <div className="card mt-5">
          <div className="card-header">
            <div className="row">
              <div className="col-md-6">
                <strong>Quản lí menu</strong>
              </div>
              <div className="col-md-6 text-end">
                <Link to="/" className="btn btn-sm btn danger">
                  {" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-3">Thiet ke form them</div>
              <div className="col-md-9">
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Tên Menu</th>
                      <th scope="col">Liên kết</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Chức năng</th>
                      <th scope="col">Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menus &&
                      menus.length > 0 &&
                      menus.map((Menu) => {
                        return (
                          <tr key={Menu.id}>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>{Menu.name}</td>
                            <td>{Menu.link}</td>
                            <td>{Menu.status}</td>
                            <td>
                              <Link to={"/admin/category/edit/" + Menu.id}>
                                <FaTrash />
                              </Link>
                            </td>
                            <td>{Menu.id}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Menu;
