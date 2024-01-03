import React from "react";

export default function Test() {
  return (
    <div>
      <p class="text-start">Left aligned text on all viewport sizes.</p>
      <p class="text-center">Center aligned text on all viewport sizes.</p>
      <p class="text-end">Right aligned text on all viewport sizes.</p>

      <figure class="text-center d-inline-block">
        <blockquote class="blockquote">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
        </blockquote>
        <figcaption class="blockquote-footer text-end">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>

      <div class="row">
        <div class="col-2 text-truncate">
          This text is quite long, and will be truncated once displayed.
        </div>
        <span
          class="d-inline-block text-truncate"
          style={{ maxWidth: "150px" }}
        >
          This text is quite long, and will be truncated once displayed.
        </span>
      </div>

      <div class="dropdown-menu p-4 text-muted" style={{ maxWidth: "200px" }}>
        <p>Some example text that's free-flowing within the dropdown menu.</p>
        <p class="mb-0">And this is more example text.</p>
      </div>

      <ul className="dropdown-menu">
        <li>
          <h6 class="dropdown-header">Dropdown header</h6>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
      </ul>

      <button
        type="button"
        class="btn btn-link"
        data-mdb-ripple-init
        data-mdb-ripple-color="dark"
      >
        Link
      </button>

      <div class="col-lg-4 col-md-12 mb-4 mx-auto">
    <h5 class="mb-3 h5">Component heading</h5>
    <p class="text-muted">Component subheading</p>
    <p class="">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
      nemo commodi odio veniam nisi? Cupiditate nobis doloremque
      unde in ut, consequatur reprehenderit saepe iure
      perspiciatis, veniam facilis asperiores deleniti at?
    </p>
  </div>

  
    </div>
  );
}
