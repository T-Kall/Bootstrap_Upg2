<template>
  <div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/shop">Shop</router-link> |
       <router-link to="/about">About</router-link> |
    </div> -->

<!-- ========================= TOPBAR ========================= -->

   <div id="topbar" class="bg-theme-color white-color">
      <div class="container d-flex justify-content-between align-items-center">

         <div class="border-righ ">

            <div class="btn-group pr-3 d-inline">
               <a class="dropdown-toggle white-color" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  ENG <i class="fas fa-chevron-down"></i>
               </a>
               <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">SV</a>
               </div>
            </div>
            <div class="btn-group  pr-3">
               <a class="dropdown-toggle white-color" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  USD <i class="fas fa-chevron-down"></i>
               </a>
               <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">EUR</a>
                  <a class="dropdown-item" href="#">SEK</a>
               </div>
            </div>

         </div>

<div class=" d-none d-lg-block">
         <div class="d-flex justify-content-between">
            <div class="border-right pl-3 pr-3 "><a href="#" class="white-color">Newsletter</a></div> 
            <div class="border-right pl-3 pr-3"><a href="#" class="white-color">Contact us</a></div>
            <div class="border-right pl-3 pr-3"><a href="#" class="white-color">FAQs</a></div>
            <div class="pl-3 pr-3 d-inline">
               <a href="#" class="white-color"><i class="fab fa-facebook-f m-1"></i></a>
               <a href="#" class="white-color"><i class="fab fa-twitter  m-1"></i></a>
               <a href="#" class="white-color"><i class="fab fa-instagram m-1"></i></a>
               <a href="#" class="white-color"><i class="fab fa-pinterest-p m-1"></i></a>
              <a href="#" class="white-color"><i class="fab fa-youtube m-1"></i></a>
            </div>
         </div>

         </div>

      </div>
   </div>


   <!-- ========================= LOGOBAR ========================= -->

   

   <div id="logobar" class="container mt-4 mb-4">

      <div class="row justify-content-between align-items-center">


       
         <div class="col-6 col-md-3 d-none d-lg-flex"><a href="#"><img src="../../assets/img/top/Logo.png" alt="Kenkata" ></a></div> 


         <div id="searchbar" class="col-md col-lg-4 col-xl-5 d-none d-lg-block">
            <div class="input-group ">
               <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
                  placeholder="Search products...">
               <div class="input-group-append">

                  <button type="button" class="btn dropdown-toggle dropdown-toggle-split categories"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Categories <i class="fas fa-chevron-down ml-4"></i>
                  </button>
                  <div class="dropdown-menu">
                     <a class="dropdown-item" href="#">Action</a>
                     <a class="dropdown-item" href="#">Another action</a>
                     <a class="dropdown-item" href="#">Something else here</a>
                     <div role="separator" class="dropdown-divider"></div>
                     <a class="dropdown-item" href="#">Separated link</a>
                  </div>
                  <button type="button" class="btn search"><i class="fa fa-search"></i></button>
               </div>
            </div>
         </div>



         <div class="col-12 col-md-12 col-lg-5  col-xl-4 col-xxl-2 ">
            <div class="d-flex justify-content-end">

               <div class="row align-items-center">
                  <span class="col-12 col-md-2 text-center"><img src="../../assets/img/top/UserIcon.png" alt=""></span>
                  <span class="col text-center">My account</span>
               </div>
               
               <div class="align-items-center justify-content-end d-flex ">

                  <div class="ml-4 align-items-center d-none d-lg-flex">
                     <span class=""><img src="../../assets/img/top/HeartIcon.png" alt=""></span>
                  </div>

                  <div class="ml-3 align-items-center d-none d-lg-flex">
                     <span class="position-absolute"><img src="../../assets/img/top/CompareIcon.png" alt=""></span>
                     <span class="badge badge-pill white-color bg-theme-color">0</span>
                  </div>

                  <div class="ml-3 align-items-center text-center d-lg-flex ">
                     <span class="ml-2 position-absolute text-center"><img src="../../assets/img/top/BagIcon.png" alt=""></span>
                     <span class="ml-2 badge badge-pill white-color bg-theme-color">0</span>
                     <span class="ml-2 text-center">$0.00</span>
                  </div>

               </div>

            </div>
         </div>

      </div>

   </div>




   <!-- ========================= NAVBAR ========================= -->


   <div class="navbar-wrap">

      <div id="navbar_top" class="bg-white ">

         <nav class="container navbar navbar-expand-lg navbar-light pt-0 pb-0">

            

            <div id="categories" class="btn-group mr-2 navbar-b white-color bg-theme-color p-2 d-none d-lg-flex ">
               <a class="dropdown-toggle white-color " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                 <span class="ml-1"><img src="../../assets/img/top/Hamburgermenu.png" alt=""></span> 
                 <span class="ml-2"> Browse Categories </span>
                 <span class="ml-5 mr-1"><i class="fas fa-chevron-down"></i></span>
               </a>
               <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
               </div>
            </div>

            <div class="d-block d-lg-none"><img src="../../assets/img/top/Logo.png" alt="Kenkata" > </div>

            

            <button class="navbar-toggler mb-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <router-link to="/" class="nav-link">Home</router-link>                    
                  </li>

                  <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Shop <i class="fas fa-chevron-down"></i>
                     </a>
                     <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                     </div>
                  </li>

                  <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Products <i class="fas fa-chevron-down"></i>
                     </a>
                     <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                     </div>
                  </li>

                  <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categories <i class="fas fa-chevron-down"></i>
                     </a>
                     <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                     </div>
                  </li>

                  <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pages <i class="fas fa-chevron-down"></i>
                     </a>
                     <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                     </div>
                  </li>


                  <li class="nav-item">
                     <a class="nav-link" href="#">Blog</a>
                  </li>
               </ul>
               <form class="form-inline my-2 my-lg-0">

                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">SPECIAL OFFER</button>
               </form>
            </div>
         </nav>
      </div>

   </div>





  </div>
</template>

<script>
export default {
      name: 'Top',

}
</script>

<style>


/* ========================= TOPBAR ========================= */


#topbar .border-right  {
    border-color:var(--white-color) !important;
  }

/*   
#topbar a:link,
#topbar a:visited   { 
 color: red !important;;
  text-decoration: none;
} */


#topbar a:hover,
#topbar a:active { 
    color: var(--white-color);
  text-decoration: none;
}
  
  /* ========================= LOGOBAR ========================= */
  
  #searchbar {
      border-color: var(--bulletline-color);
   
  }
  
  
  #searchbar .search {
     color: var(--white);
     background-color:  var(--theme-color);
     border-radius: 0 50px 50px 0;
     border: 0;
      
  }

#searchbar button,
#searchbar .btn,
#searchbar.btn_form {

  padding: 0.6rem 1.5rem;
}

  #searchbar .search:hover {
    background-color: var(--dark-color);
    color: var(--white);
    outline: 0;
   
  }
  
  #searchbar .input-group > .input-group-append > .categories {
      border-radius: 0;
      font-weight: 400;
      text-transform: none;
      border-color: var(--bulletline-color);
  }
  
  .form-control {
    border-radius: 50px;
    height:3rem;
    padding: 0.4rem 1.2rem;
    font-size: 0.8rem; 
  
    border-color: var(--bulletline-color);
  
  }
  
  .form-control::placeholder {
    color: var(--bulletline-color);
  }
  
  /* my account*/
  
  .badge-icon  {
      position: absolute;
  } 
  
  .badge {
      position: relative;
      left: 10px;
      top: -10px;
      z-index: 2;
      padding: 0.3em 0.47em;
      font-size: 0.6rem;
      border-radius: 10% !important ;
      -webkit-border-radius: 50% !important ;
      -moz-border-radius: 10% !important ;
      -ms-border-radius: 10% !important ;
      -o-border-radius: 10% !important ;
  }
  
  /* ========================= NAVBAR ========================= */
  
  .fixed-top .navbar { 
    padding:0px; 
   }
  
  
  .navbar li a { 
    font-size: 1rem;
    font-weight: 400; 
    text-decoration: none;
  } 
  
  #navbar_top .fa-chevron-down { 
   color: var(--theme-color)
  } 
  
  #categories .fa-chevron-down { 
    color: var(--white-color)
   } 
   
     #categories  a:hover,
  #categories  a:active { 
    color: var(--white-color);
  text-decoration: none;
}
  
  .navbar-light .navbar-nav .nav-link {
    color: var(--dark-color);
    border-bottom: 3px solid transparent;
  }
  
  .navbar-light .navbar-nav .nav-link.active  {
    color: var(--theme-color);
  }
  
   .navbar-light .navbar-nav .nav-link:hover {
    color: var(--theme-color);
  }
  
  .navbar-expand-lg .navbar-nav .nav-link {
    padding: 0rem;
    margin-left: 0.8rem;
    margin-right: 0.5rem;
  }
   
  
  /* navbar button */
  
  .navbar .btn {
    display: inline-block;
    color: var(--white); 
    background-color:  var(--theme-color); 
  }
  
  .navbar .btn:hover {
    background-color: var(--dark-color);
    border: 1px solid transparent;
    outline: 0;  
  }
  
 .navbar button,
.navbar .btn,
.navbar .btn_form {

  padding: 0.6rem 1.5rem;
}
  
  /* ----------------------------------------- */
  /* MEDIA sm */
  /* ----------------------------------------- */
  
  @media (min-width: 576px) {
    .container, .container-sm {
      max-width: 540px;
    }
  }
  
  /* ----------------------------------------- */
  /* MEDIA sm-md */
  /* ----------------------------------------- */
  
  @media (min-width: 768px) {
    .container, .container-sm, .container-md {
      max-width: 720px;
    }  
  }
  
  
  /* ----------------------------------------- */
  /* MEDIA sm-lg */
  /* ----------------------------------------- */
  
  @media (min-width: 992px) {
    .container, .container-sm, .container-md, .container-lg {
      max-width: 960px;
    }
  
  /* ========================= TOPBAR ========================= */
  
  
  
  /* ========================= NAVBAR ========================= */
  
  
    #navbar_top {
      border-top: 1px solid var(--bulletline-color)
    }
   
   
      .navbar-light .navbar-nav .nav-link.active  {
        color: var(--dark-color);
        border-bottom: 3px solid var(--theme-color);
      }
  
      .navbar-light .navbar-nav .nav-link:hover {
        color: var(--dark-color);
        border-bottom: 3px solid var(--theme-color);
      }
  
    
  
    
  }
  
    
  
  /* ----------------------------------------- */
  /* MEDIA sm-xl */
  /* ----------------------------------------- */
  @media (min-width: 1200px) {
    .container, .container-sm, .container-md, .container-lg, .container-xl {
      max-width: 1140px;
    }
  }
  
  /* ----------------------------------------- */
  /* MEDIA sm-xxl*/
  /* ----------------------------------------- */
  
  @media (min-width: 1400px) {
    .container, .container-sm, .container-md, .container-lg, .container-xl, .container-xxl {
      max-width: 1320px;
    }
  }
  
  
  
  
  

</style>