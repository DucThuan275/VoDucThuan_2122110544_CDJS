import {FaTrash} from "react-icons/fa";
import Database from "../../../data_fake.json";
import { Link } from "react-router-dom";
const Banner =()=>{
   const banners = Database.Banners;
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
              <div className="col-md-3">Thiet ke form them</div>
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