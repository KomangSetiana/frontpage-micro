import React from "react";

import Preview from "../../../../public/images/icon-play.svg";

import Modal from "../../components/Modal";

export default function CoursePhoto(data) {
  return (
    <div className="w-1/3 px-4">
      <div className="item relative">
        <figure className="item-image">
          <Preview></Preview>
          <img
            src={
              data.data.image ??
              `${process.env.NEXT_PUBLIC_BASE_URL}/images/img-courses.png`
            }
            alt={data.data.name}
            className="object-cover h-32 w-full"
          />
        </figure>
        <Modal
          content={(toggle) => (
            <img src={data.data.image} alt={data.data.image} />
          )}
        >
          {(toggle) => <span onClick={toggle} className="link-wrapped"></span>}
        </Modal>
      </div>
    </div>
  );
}
