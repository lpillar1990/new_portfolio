import React from "react";
import Image from "next/image";

function ProfilePicture() {
  return (
    <>
      <Image
        src="/images/portfolio_img2.png"
        alt="Leo Pillar"
        width={800}
        height={800}
      />
    </>
  );
}

export default ProfilePicture;
