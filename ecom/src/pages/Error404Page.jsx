import React from "react";
import Breadcrum from "../Components/Breadcrum";

export default function Error404Page() {
  return (
    <>
      <Breadcrum title="Page not found" />

      <section class="blog error-blog  footer-padding">
        <div class="container">
          <div class="blog-item">
            <div class="error-img">
              <img
                src="./assets/images/homepage-one/404-error.webp"
                alt="404-error"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
