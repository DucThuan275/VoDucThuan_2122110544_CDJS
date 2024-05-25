import React from 'react'
import Database from "../../../data_fake.json";
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
const Post = () => {

  const posts = Database.Posts;
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
                      <th scope="col">Tên Post</th>
                      <th scope="col">Slug</th>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Mô tả</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Chức năng</th>

                      <th scope="col">Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts &&
                      posts.length > 0 &&
                      posts.map((Post) => {
                        return (
                          <tr key={Post.id}>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>{Post.name}</td>
                            <td>{Post.slug}</td>
                            <td><img src={Post.image} alt="" srcset="" /></td>
                            <td>{Post.decription}</td>
                            <td>{Post.status}</td>
                            <td>
                              <Link to={"/admin/category/edit/" + Post.id}>
                                <FaTrash />
                              </Link>
                            </td>
                            <td>{Post.id}</td>
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

export default Post
