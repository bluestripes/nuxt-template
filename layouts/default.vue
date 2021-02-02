<template>
  <div class="grid-wrapper">
    <TopNav />
      
    <AppHeader>
      <!--Logo />
      <LogoPhoto /-->
      <div style="border: 1px solid black">Logo</div>
      <div style="border: 1px solid black">Photo</div>
    </AppHeader>

    <AppContent>
      
       <Nuxt />
    
    </AppContent>  
    
  </div>
</template>

<style>
:root {
  --accent-color: #87ceeb;
  --black: #282828;
  --white: #FFFFFF;
  --header-height: 260px;
  --header-max-height: 260px;
  --header-min-height: 80px
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  
}

/*body {
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(3rem);
  scroll-snap-type: y mandatory;
}*/

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.wrapper {
    height: calc(100vh - var(--header-height));
    width: 100vw;
    /*padding-top: 200px;
    max-height: calc(100vh - 200px);
    overflow-y: scroll;
    scroll-snap-type: mandatory;
    scroll-snap-points-y: repeat(3rem);
    scroll-snap-type: y mandatory;*/
    overflow: hidden;
}

.grid-wrapper {
    /*display: grid;
    grid-template-rows: 10px var(--header) 1fr;
    grid-template-columns: 100vw;
    grid-template-areas:
        "nav"
        "header"    
        "content";
    height: 100vh;
    width: 100vw;*/
    display: grid;
                    
                    grid-template-columns: auto;
                    grid-template-rows: 10px var(--header-height) calc(100vh - ( var(--header-height) + 10px));
                    grid-template-areas: "nav" "header" "content";

}

a {text-decoration: none;}

</style>
