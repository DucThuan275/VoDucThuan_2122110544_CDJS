import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Database from "../../../data_fake.json";

const OrderDetail = () => {
    const orderdetails = Database.OrderDetail;
  return (
    <>
    <div className="card">
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
          <div className="col-md-3">Thiet ke form them</div>
          <div className="col-md-9">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Giá</th>
                  <th>Tổng tiền</th>
                  <th>Thông báo</th>
                  <th>Chức năng</th>
                  <th>Id</th>
                </tr>
              </thead>
              <tbody>
                {orderdetails &&
                  orderdetails.length > 0 &&
                  orderdetails.map((Orderdetail) => {
                    return (
                      <tr key={Orderdetail.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{Orderdetail.price}</td>
                        <td>{Orderdetail.qty}</td>
                        <td>{Orderdetail.amount}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/Orderdetail/edit/" + Orderdetail.id}
                          >
                            <FaTrash />
                          </Link>
                        </td>
                        <td>{Orderdetail.id}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default OrderDetail
