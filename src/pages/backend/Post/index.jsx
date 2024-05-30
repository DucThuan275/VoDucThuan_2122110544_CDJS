import React, { useState } from "react";
import Database from "../../../data_fake.json";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
const Post = () => {
  const posts = Database.Posts;

  const [topic_id, setTopicId] = useState(0);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState('');
  const [detail, setDetail] = useState('');
  const handleSubmit =(e)=>{
    e.preventDefault();
    const post={
      topic_id: topic_id,
      description: description,
      status: status,
      title: title,
      type: type,
      details: detail
    }
    console.log(post);
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
              <div className="col-md-6">
                <form action="" onSubmit={handleSubmit}>
                  <div class="row">
                    <div class="col-md-8">
                      <div class="mb-3">
                        <label htmlFor="title">
                          <strong>Tiêu đề bài viết (*)</strong>
                        </label>
                        <input
                          type="text"
                          name="title"
                          class="form-control"
                          value={title}
                          placeholder="Nhập tiêu đề"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div class="mb-3">
                        <label htmlFor="detail">
                          <strong>Chi tiết (*)</strong>
                        </label>
                        <textarea
                          name="detail"
                          rows="7"
                          value={detail}
                          class="form-control"
                          placeholder="Nhập chi tiết"
                          onChange={(e) => setDetail(e.target.value)}
                        ></textarea>
                      </div>
                      <div class="mb-3">
                        <label htmlFor="description">
                          <strong>Mô tả (*)</strong>
                        </label>
                        <textarea
                          name="description"
                          rows="4"
                          value={description}
                          class="form-control"
                          placeholder="Mô tả"
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                      <div class="mb-3">
                        <label htmlFor="type">
                          <strong>Kiểu bài viết</strong>
                        </label>
                        <textarea
                          name="type"
                          rows="4"
                          value={type}
                          class="form-control"
                          placeholder="Kiểu bài viết"
                          onChange={(e) => setType(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="box-container mt-4 bg-white">
                        <div className="mb-3">
                          <label htmlFor="status">Trạng thái</label>
                          <select
                          value={status}
                            className="form-select"
                            id="status"
                            onChange={(e) => setStatus(e.target.value)}
                          >
                            <option value="1">Xuất bản</option>
                            <option value="2">Chưa xuất bản</option>
                          </select>
                        </div>
                      </div>

                      <div class="box-container mt-2 bg-white">
                        <div class="box-header py-1 px-2 border-bottom">
                          <strong htmlFor="topic_id">Chủ đề (*)</strong>
                        </div>
                        <div class="box-body p-2 border-bottom">
                          <select name="topic_id" class="form-select"
                          value={topic_id}
                          onChange={(e) => setTopicId(e.target.value)}>
                            <option value="0">Chọn danh mục</option>
                          </select>
                        </div>
                      </div>
                      <div class="box-container mt-2 bg-white">
                        <div class="box-header py-1 px-2 border-bottom">
                          <strong>Hình đại diện</strong>
                        </div>
                        <div class="box-body p-2 border-bottom">
                          <input
                            type="file"
                            name="image"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div className="mb-3 text-end mt-3">
                    <button type="submit" className="btn btn-success px-5">
                      Lưu
                    </button>
                  </div>
                    </div>
                  </div>
                  
                </form>
              </div>
              <div className="col-md-6">
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
                            <td>
                              <img src={Post.image} alt="" srcset="" />
                            </td>
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
  );
};

export default Post;
