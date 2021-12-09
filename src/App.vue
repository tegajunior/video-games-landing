<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.225s ease;
}
.fade-leave-active {
  transition: opacity 0.225s ease;
  opacity: 0;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  background-image: linear-gradient(#081221, #03080f);
  color: #c1d1e8;
  font-family: "Mulish", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6,
label,
button {
  font-family: "Montserrat", sans-serif;
}
input,textarea {
  background-color: #182c47;
  width: 100%;
  border: none;
  padding: 8px;
  margin-top: 5px;
  color: #c1d1e8;
}
::placeholder {
  color: #c1d1e8;
  opacity: 1;
}
.actions button {
  background-color: #5692e8;
  border: none;
  padding: 10px;
  text-align: center;
  color: #c1d1e8;
  font-weight: 900;
  width: 5rem;
  cursor: pointer;
}
.white-text {
  color: #fff
}
.actions button:hover {
  opacity: 0.4;
}

</style>
