import React from 'react'
import { Link} from 'react-router-dom'
import Database from "../../../data_fake.json";
import { FaTrash } from 'react-icons/fa';

const User = () => {
  const users = Database.Users;
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
            <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Tên User</th>
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
          {users &&
            users.length > 0 &&
            users.map((User) => {
              return (
                <tr key={User.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{User.name}</td>
                  <td>{User.email}</td>
                  <td>{User.phone}</td>
                  <td>{User.address}</td>
                  <td>
                    <Link to={"/admin/category/edit/" + User.id}>
                      <FaTrash />
                    </Link>
                  </td>
                  <td>{User.image}</td>
                  <td>{User.status}</td>
                  <td>{User.id}</td>

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

export default User
