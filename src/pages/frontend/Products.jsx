import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../../layouts/LayoutSite/Header';
import Footer from '../../layouts/LayoutSite/Footer';
import CodeDiscontProduct from "../../Component/CodeDiscontProduct";
import Database from "../../data_fake.json";
import ProductsItems from "../../Component/ProductsItems";
const Products = () => {
  const listproducts = Database.products;
  return (
    <div>
      <Header />
      <Outlet />
      <hr />
      <main>
        <div className="container discount">
          <div className="row">
            <div className="col-md-3 mx-2">
              <CodeDiscontProduct
                code="FANDJHJ"
                desc="Mã giảm THÊM 12% tối đa 50k cho mọi đơn hàng"
              />
            </div>
            <div className="col-md mx-2">
              <CodeDiscontProduct
                code="FRIENDLY"
                desc="Mã giảm THÊM 69K cho đơn hàng từ 459K"
              />
            </div>
            <div className="col-md-3 mx-2">
              <CodeDiscontProduct
                code="MONTHLY"
                desc="Mã giảm THÊM 59K cho đơn hàng từ 399K"
              />
            </div>
            <div className="col-md-3 mx-2">
              <CodeDiscontProduct
                code="ANNONJHJ"
                desc="Mã giảm THÊM 50K cho đơn hàng từ 499K"
              />
            </div>
          </div>
        </div>

        <div className="new_collect">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="row">
                  <ul class="list-group mt-5">
                    <li class="list-group-item bg-success py-3 text-light">
                      Danh mục sản phẩm
                    </li>
                    <li class="list-group-item">
                      <a href="#" class="text-success">
                        Quần áo sơ sinh
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a href="#" class="text-success">
                        Bao, tất chân tay cho bé
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a href="#" class="text-success">
                        Mũ sơ sinh
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a href="#" class="text-success">
                        Khăn mặt, khăn xô tắm
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <ul class="list-group mt-5">
                    <li class="list-group-item bg-success py-3 text-light">
                    THƯƠNG HIỆU
                    </li>
                    <li class="list-group-item">
                      <a href="#" class="text-success">
                        Thời trang trẻ em
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a href="#" class="text-success">
                        Đồ sơ sinh
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a href="#" class="text-success">
                        Đồ tới trường
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a href="#" class="text-success">
                        Đồ mẫu giáo
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a href="#" class="text-success">
                        Đồ tiểu học
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <ul class="list-group mt-5">
                    <li class="list-group-item bg-success py-3 text-light">
                    GIÁ SẢN PHẨM
                    </li>
                    <li class="list-group-item">
                      <a href="#" class="text-success">
                        Giá dưới 500.000đ
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a href="#" class="text-success">
                      Giá từ 500.000đ - 1.000.000đ
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a href="#" class="text-success">
                      Giá từ 1.000.000đ - 2.000.000đ
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a href="#" class="text-success">
                        Giá trên 2.000.000đ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <h4 className="mt-5">Tất cả sản phẩm</h4>
                <hr />

                <div className="row">
                  {listproducts.map((pt, index) => {
                    return (
                      <div className="col-md-4 mt-4" key={index}>
                        <ProductsItems products={pt} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
