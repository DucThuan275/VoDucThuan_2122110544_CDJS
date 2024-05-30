import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import Database from "../../../data_fake.json";
import { Link } from 'react-router-dom';

const Brand = () => {
  const brands = Database.Brands;
  const [name, setName] = useState("");
  const [sort_order, setSortOrder] = useState(0);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(2);
  // ham
  const handLeSubmit = (e) => {
    e.preventDefault();
    //luu vao co so du lieu
    const brand = {
      name: name,
      sort_order: sort_order,
      description: description,
      status: status,
    };
    console.log(brand);
  };
  return (
    <div>
      <main>
        <div className="card mt-5">
          <div className="card-header">
            <div className="row">
              <div className="col-md-6">
                <strong>Quản lý thương hiệu</strong>
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
              <div className="col-md-3">
              <form onSubmit={handLeSubmit}>
            <div className="md-3">
                <label htmlFor="image">Hình Ảnh</label>
                <input type="file" id="image" className="form-control" />
              </div>
              <div className="md-3">
                <label htmlFor="name">Tên danh mục</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="md-3">
                <label htmlFor="sort_order">Sắp xếp</label>
                <select
                  className="form-select"
                  id="sort_order"
                  value={sort_order}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="0">Chọn vị trí</option>
                </select>
              </div>
              <div className="md-3">
                <label htmlFor="desciption">Mô tả</label>
                <textarea
                  id="desciption"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              
              <div className="md-3">
                <label htmlFor="status">Trạng thai</label>
                <select className="form-select" id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}>
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa xuất bản</option>
                </select>
              </div>
              <div className="md-3 text-end">
                <button type="submit" className="btn btn-success px-5">
                  Lưu
                </button>
              </div>
            </form>
              </div>
              <div className="col-md-9">
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Tên Brand</th>
                      <th scope="col">Slug</th>
                      <th scope="col">Mô tả</th>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Chức năng</th>

                      <th scope="col">Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    {brands &&
                      brands.length > 0 &&
                      brands.map((Brand) => {
                        return (
                          <tr key={Brand.id}>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>{Brand.name}</td>
                            <td>{Brand.slug}</td>
                            <td><img src={{}} alt="" /></td>
                            <td>{Brand.status}</td>
                            <td>
                              <Link to={"/admin/category/edit/" + Brand.id}>
                                <FaTrash />
                              </Link>
                            </td>
                            <td>{Brand.id}</td>
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
    </div>
  )
}

export default Brand
