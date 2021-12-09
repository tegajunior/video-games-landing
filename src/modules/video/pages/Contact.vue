<template>
  <div class="contact">
    <div class="header__section">
      <h5 class="white-text hero-text">GET IN TOUCH</h5>
      <div class="header__section__text">
        <p class="header__section__text__para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ea
          possimus quae, ipsam doloremque optio. Aliquid cum nostrum distinctio,
          adipisci.
        </p>
      </div>
    </div>
    <div class="contact__form">
      <span class="contact__form__text">Contact Form</span>
      <div class="name__email__con">
        <div class="input__con">
          <label for="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div class="input__con">
          <label for="email">Email Address</label>
          <input type="email" id="email" />
        </div>
      </div>
      <div class="message__con">
        <label for="message">Message</label>
        <textarea name="" id="message" cols="30" rows="10" class="message__textarea"></textarea>
      </div>
      <div class="actions">
        <button class="white-text">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      route_name: "",
    }
  },
  mounted() {
    this.route_name = this.$route.name;
    console.log(this.route_name);
  }
};
</script>

<style scoped>
.contact {
  width: 480px;
  max-width: 100%;
  margin: 4rem auto;
}

.header__section {
  padding-bottom: 2rem;
}
.hero-text {
  letter-spacing: 2px;
  margin-bottom: 1rem;
}
.contact__form {
  height: 430px;
  padding: 1.5rem;
  background-color: #0e1a2b;
}
.name__email__con {
  margin-top: 1.8rem;
  margin-bottom: 1.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input__con {
  width: 200px;
}
.message__con {
  margin-bottom: 1rem;
}
.message__textarea {
  width: 100%;
}
.actions {
  float: right;
}
@media (max-width: 527px) {
  .contact__form {
    height: 510px;
  }
  .name__email__con {
    flex-direction: column;
    justify-content: start;
    gap: 30px;
  }
  .input__con {
    width: 100%;
  }
}
</style>
