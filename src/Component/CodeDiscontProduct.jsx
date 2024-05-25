import React from "react";

const CodeDiscontProduct = (props) => {
  const Code = props.code;
  const Desc = props.desc;
  return (
    <div>
      <div className="row">
        <div className="card">
          <div class="card-header">
            <strong><p className="py-0 m-0">NHẬP MÃ: {Code}</p></strong>
          </div>
          <div>
            <p className="py-0 m-0 " style={{height:"50px"}}>{Desc}</p>
            <button type="button" class="btn btn-success btn-sm">
              Sao chép mã
            </button>
            <a href="#" class="d-flex justify-content-end">
              Điều kiện
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeDiscontProduct;
