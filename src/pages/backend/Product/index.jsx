import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Database from "../../../data_fake.json";

const Product = () => {
  const products = Database.products;
  return (
    <>
<div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quản lý sản phẩm</strong>
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
                  <th>Hình ảnh</th>
                  <th>Tên danh mục</th>
                  <th>Giá</th>
                  <th>slug</th>
                  <th>chức năng</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.length > 0 &&
                  products.map((Product) => {
                    return (
                      <tr key={Product.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img style={{width:"50px"}} src={Product.image} alt={Product.image} />
                        </td>
                        <td>{Product.name}</td>
                        <td>{Product.price}</td>
                        <td>{Product.slug}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/Product/edit/" + Product.id}
                          >
                            <FaTrash />
                          </Link>
                        </td>
                        <td>{Product.id}</td>
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
  );
};

export default Product;
