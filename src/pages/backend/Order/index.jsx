import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Database from "../../../data_fake.json";

const Order = () => {
    const orders = Database.Orders;
  return (
    <>
      <main>
        <div className="card mt-5">
          <div className="card-header">
            <div className="row">
              <div className="col-md-6">
                <strong>Quan li danh muc</strong>
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
              <div className="col-md">
              <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Tên Order</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Chức năng</th>
              <th scope="col">Hình</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Id</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.length > 0 &&
              orders.map((Order) => {
                return (
                  <tr key={Order.id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{Order.name}</td>
                    <td>{Order.email}</td>
                    <td>{Order.phone}</td>
                    <td>{Order.address}</td>
                    <td>
                      <Link to={"/admin/category/edit/" + Order.id}>
                        <FaTrash />
                      </Link>
                    </td>
                    <td>{Order.note}</td>
                    <td>{Order.status}</td>
                    <td>{Order.id}</td>

                    <td>
                      <img src={{}} alt="" />
                    </td>
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
  )
}

export default Order
