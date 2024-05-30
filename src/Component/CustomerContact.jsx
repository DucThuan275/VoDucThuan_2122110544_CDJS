import React from "react";

const CustomerContact = (props) => {
      const Icon = props.icon;
      const Desc = props.desc;
      const Title = props.title;
      return (
      <div>
        <div className="row">
          <div className="row">
            {Icon}
          </div>
          <div className="row mt-4">
            <strong><p className="text-center py-0 m-0">{Title}</p></strong>
          </div>
          <div className="row ">
            <p className="text-center py-0 m-0">{Desc}</p>
          </div>
        </div>
      </div>
  );
};

export default CustomerContact;
