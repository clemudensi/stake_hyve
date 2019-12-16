<template>
    <!--header-->

    <header>

        <div data-spy="scroll" data-target=".navbar-default" data-offset="100" class="navbar navbar-default navbar-fixed-top affix" role="navigation" data-offset-top="50">

            <div class="container">

                <!--Mobile navigation-->

                <div class="navbar-header">

                    <button type="button" class="navbar-toggle dropdown-button waves-effect waves-teal btn-flat" data-toggle="collapse" data-target="#navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>

                    </button>
                    <!--Logo-->

                    <a class="navbar-brand logo" href="">
                        <img src="..\assets\images\logo-white.png" alt="" title="">
                    </a>
                </div>

                <!--Links Menu-->
                <div class="navbar-collapse collapse" id="navbar-collapse">
                    <ul class="nav navbar-nav navbar-right navigation-links">
                        <li class="active active-link">
                            <a data-scroll="" href="#home" class="section-scroll">Home</a>
                        </li>

                        <li>
                            <a data-scroll="" href="#about" class="section-scroll">About </a>
                        </li>
                        <li>
                            <a data-scroll="" href="#features-app" class="section-scroll">features </a>
                        </li>


                        <li>
                            <a data-scroll="" href="#testimonials" class="section-scroll">Testimonials</a>
                        </li>

                        <li>
                            <a data-scroll="" href="#pricing" class="section-scroll">Pricing </a>
                        </li>

                        <li>
                            <a data-scroll="" href="#download" class="section-scroll">Download </a>
                        </li>
                        <li class="dropdown">
                            <a href="#">Blog </a>
                            <ul>
                                <li><a href="blog.html">Blog grid</a></li>
                                <li><a href="blog-full-width.html">Blog full width</a></li>
                                <li><a href="blog-left-sidebar.html">Blog with left sidebar</a></li>
                                <li><a href="blog-right-sidebar.html">Blog with right sidebar</a></li>
                                <li><a href="single-post.html">single blog</a></li>
                            </ul>


                        </li>

                        <li class="connect-links">

                            <a href="#" class="white-btn" data-toggle="modal" data-target="#signup-modal">Sign up</a>

                            <a href="#" class="btn-login" data-toggle="modal" data-target="#login-modal">Login</a>
                        </li>

                    </ul>
                </div>

            </div>

        </div>

    </header>
    <!--Header-->
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>
