import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Database from "../../../data_fake.json";

const Contact = () => {
  const contacts = Database.Contacts;
  return (
    <>
      <main>
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-md-6">
                <strong>Quản lí Contact</strong>
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
                <table class="table table-striped table-bContacted">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Tên Contact</th>
                      <th scope="col">Email</th>
                      <th scope="col">Điện thoại</th>
                      <th scope="col">Title</th>
                      <th scope="col">Nội dung</th>
                      <th scope="col">Chức năng</th>
                      <th scope="col">Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts &&
                      contacts.length > 0 &&
                      contacts.map((Contact) => {
                        return (
                          <tr key={Contact.id}>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>{Contact.name}</td>
                            <td>{Contact.email}</td>
                            <td>{Contact.phone}</td>
                            <td>{Contact.title}</td>
                            <td>{Contact.content}</td>
                            <td>
                              <Link to={"/admin/category/edit/" + Contact.id}>
                                <FaTrash />
                              </Link>
                            </td>
                            <td>{Contact.id}</td>
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

export default Contact
