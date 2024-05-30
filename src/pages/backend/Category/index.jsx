import React from "react";
import { Link} from "react-router-dom";
import Database from "../../../data_fake.json";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
const Category = () => {
  const categorys = Database.Categorys;
  const [name, setName] = useState('');
   const [parent_id, setParentId] = useState(0);
   const [sort_order, setSortOrder] = useState(0);
   const [description, setDescription] = useState('');
   const [status, setStatus] = useState(2);

   const handleSubmit =(e)=>{
    e.preventDefault();
    const category={
      name:name,
      parent_id:parent_id,
      sort_order:sort_order,
      description:description,
      status:status,
     }
    console.log(category);
   }
   
  return (
    <>
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
           <strong>Quản lý danh mục</strong>
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
          <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name">Tên banner</label>
                  <input type="text"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  id="name" className="form-control"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="parent_id">Cấp cha</label>
                  <select className="form-select" id="parent_id"
                  value={parent_id} on
                  onChange={(e)=>setParentId(e.target.value)} >
                    <option value="0">None</option>
                  </select>
                </div>
                <div className="mb-3">
                <label htmlFor="sort_order">Sắp xếp</label>
                  <select className="form-select" id="sort_order"
                  value={sort_order}
                  onChange={(e)=>setSortOrder(e.target.value)} >
                    <option value="0">Chọn vị trí</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="description">Mô tả</label>
                  <textarea className="form-control" id="description"
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)} ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="image">Hình ảnh</label>
                  <input type="file" id="image" className="form-control"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="status">Trạng thái</label>
                  <select className="form-select" id="status"
                  value={status}
                  onChange={(e)=>setStatus(e.target.value)} >
                    <option value="1">Xuất bản</option>
                    <option value="2">Chưa xuất bản</option>
                  </select>
                </div>
                <div className="mb-3 text-end">
                  <button type="submit" className="btn btn-success px-5">Lưu</button>
                </div>
                </form>
          </div>
          <div className="col-md-9">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên danh mục</th>
                  <th>slug</th>
                  <th>chức năng</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {categorys &&
                  categorys.length > 0 &&
                  categorys.map((category) => {
                    return (
                      <tr key={category.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img style={{width:"50px"}} src={category.image} alt={category.image} />
                        </td>
                        <td>{category.name}</td>
                        <td>{category.slug}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/category/edit/" + category.id}
                          >
                            <FaTrash />
                          </Link>
                        </td>
                        <td>{category.id}</td>
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

export default Category;