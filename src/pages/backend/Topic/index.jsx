import React from "react";
import { Link } from "react-router-dom";
import Database from "../../../data_fake.json";
import { FaTrash } from "react-icons/fa";

const Topic = () => {
  const topics = Database.Topics;
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
              <div className="col-md-3">Thiet ke form them</div>
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
