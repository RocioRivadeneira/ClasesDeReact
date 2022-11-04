import React from 'react';


<article
id="banner"
class="carousel slide d-none d-sm-block"
data-bs-ride="carousel"
>
<div class="carousel-inner">
    <div class="carousel-item active">
        <img
            src="./images/banner/banner.jpg"
            class="d-block w-100 img-fluid"
            alt="banner-moledora"
        />
    </div>
    <div class="carousel-item">
        <img
            src="./images/banner/banner1.jpg"
            class="d-block w-100 img-fluid"
            alt="..."
        />
    </div>
    <div class="carousel-item">
        <img
            src="./images/banner/banner2.jpg"
            class="d-block w-100 img-fluid"
            alt="..."
        />
    </div>
</div>

<button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#banner"
    data-bs-slide="prev"
>
    <span
        class="carousel-control-prev-icon"
        aria-hidden="true"
    ></span>
    <span class="visually-hidden">Previous</span>
</button>
<button
    class="carousel-control-next"
    type="button"
    data-bs-target="#banner"
    data-bs-slide="next"
>
    <span
        class="carousel-control-next-icon"
        aria-hidden="true"
    ></span>
    <span class="visually-hidden">Next</span>
</button>
</article>
