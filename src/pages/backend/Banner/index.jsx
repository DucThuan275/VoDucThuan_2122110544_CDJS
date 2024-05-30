import {FaTrash} from "react-icons/fa";
import Database from "../../../data_fake.json";
import { Link } from "react-router-dom";
import { useState } from "react";
const Banner =()=>{
   const banners = Database.Banners;

   const [name, setName] = useState('');
   const [link, setLink] = useState('');
   const [sort_order, setSortOrder] = useState(0);
   const [position, setPosition] = useState(0);
   const [description, setDescription] = useState('');
   const [status, setStatus] = useState(2);

   const handleSubmit =(e)=>{
    e.preventDefault();
    const banner={
      name:name,
      link:link,
      sort_order:sort_order,
      position:position,
      description:description,
      status:status,
     };
    console.log(banner);
   }
   
    return(
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
                {/* Them banners */}
                <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name">Tên banner</label>
                  <input type="text"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  id="name" className="form-control"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="link">Liên kết</label>
                  <input type="text"
                  value={link}
                  onChange={(e)=>setLink(e.target.value)}
                  id="link" className="form-control"/>
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
                  <label htmlFor="position">Vị Trí</label>
                  <select className="form-select" id="position"
                  value={position}
                  onChange={(e)=>setPosition(e.target.value)} >
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
                      <th scope="col">Tên Banner</th>
                      <th scope="col">Liên kết</th>
                      <th scope="col">Vị trí</th>
                      <th scope="col">Mô tả</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Chức năng</th>

                      <th scope="col">Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    {banners &&
                      banners.length > 0 &&
                      banners.map((Banner) => {
                        return (
                          <tr key={Banner.id}>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>{Banner.name}</td>
                            <td>{Banner.link}</td>
                            <td>{Banner.position}</td>
                            <td>{Banner.decription}</td>
                            <td>{Banner.status}</td>
                            <td>
                              <Link to={"/admin/category/edit/" + Banner.id}>
                                <FaTrash />
                              </Link>
                            </td>
                            <td>{Banner.id}</td>
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

export default Banner;