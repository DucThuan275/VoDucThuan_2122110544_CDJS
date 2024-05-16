import React from "react";

const CustomerPolicy = (props) => {
  const Image = props.image;
  const Title = props.title;
  const Desc = props.desc;
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <img src={Image} alt="dilivery" className="img-fluid-rp" />
        </div>
        <div className="col-md-8">
          <p className="py-0 m-0">
            <strong>{Title}</strong>
          </p>
          <p className="py-0 m-0">{Desc}</p>
        </div>
      </div>
    </div>
  );
};
export default CustomerPolicy;
