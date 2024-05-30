import React from "react";
import { Link } from "react-router-dom";
import Database from "../../../data_fake.json";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
const Topic = () => {
  const topics = Database.Topics;
  const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [status, setStatus] = useState(2);
   const handleSubmit =(e)=>{
    e.preventDefault();
    const topic={
      name:name,
      description:description,
      status:status,
     }
    console.log(topic);
   }
   
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
                  <label htmlFor="description">Mô tả</label>
                  <textarea className="form-control" id="description"
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)} ></textarea>
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
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Tên topic</th>
                      <th scope="col">Slug</th>
                      <th scope="col">Mô tả</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Chức năng</th>

                      <th scope="col">Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topics &&
                      topics.length > 0 &&
                      topics.map((Topic) => {
                        return (
                          <tr key={Topic.id}>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>{Topic.name}</td>
                            <td>{Topic.slug}</td>
                            <td>{Topic.decription}</td>
                            <td>{Topic.status}</td>
                            <td>
                              <Link to={"/admin/category/edit/" + Topic.id}>
                                <FaTrash />
                              </Link>
                            </td>
                            <td>{Topic.id}</td>
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

export default Topic;
