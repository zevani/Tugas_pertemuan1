<<<<<<< HEAD
<template>
    <div class="bg-light p-5">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-12">
            <h1 class="fw-bold">About Me</h1>
            <div class="d-flex justify-content-center" style="width: 100%">
              <p style="max-width: 30rem; font-size: 20px">
                {{ props.smallDescription }}
              </p>
            </div>
            <p style="max-width: 40rem" class="mx-auto">
              {{ props.description }}
            </p>
            <div class="d-flex align-items-center justify-content-center gap-2">
              <a :href="'https://web.whatsapp.com/'+props.whatsApp">
                <img
                  style="width: 30px; height: 100px"
                  :src="whatsAppIcon"
                  alt="WhatsApp Icon"
                />
              </a>
              <a :href="'https://github.com/zevani' + props.github">
                <img
                  style="width: 50px; height: 60px"
                  src="c:\PBK\portofolio\src\assets\github-mark.png"
                  alt="GitHub Icon"
                />
              </a>
              <a :href="'https://www.instagram.com/anandaazvn/'+props.instagram">
                <img
                  style="width: 40px; height: 100px"
                  :src="InstagramIcon"
                  alt="Instagram Icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import whatsAppIcon from '../assets/whatsApp.svg'; // Adjusted import path
  import InstagramIcon from '../assets/instagram.svg'; // Adjusted import path
  
  const props = defineProps({
    smallDescription: String,
    description: String,
    github: String,
    whatsApp: String,
    instagram: String,
  });
  </script>
  
=======
<script setup>
const props = defineProps({
  smallDescription: String,
  description: String,
  github: String,
  whatsApp: String,
  instagram: String,
});
</script>
<template>
    <div class="bg-light p-5">
        <div class="container text-center">
            <div class="row">
                <div class="col-md-12">
                <h1 class="fw-bold">About Me</h1>
                <div class="d-flex justify-content-center" style="width: 100%">
                    <p style="max-width: 30rem; font-size: 20px">
                        {{ props.smallDescription }}
                    </p>
                </div>
                    <p style="max-width: 40rem" class="mx-auto">
                        {{ props.description }}
                    </p>
                <div class="d-flex align-items-center justify-content-center gap-2">
                    <a :href="'https://web.whatsapp.com/'+props.whatsApp">
                        <img
                            style="width: 30px; height: 100px"
                            src="../src/assets/whatsApp.svg"
                            alt="" />
                    </a>
                    <a :href="'https://github.com/zevani/' + props.github">

                        <img
                            style="width: 50px; height: 60px"
                            src="c:\PBK\portofolio\src\assets\github-mark.png"
                            alt="" />
                    </a>
                    <a :href="'https://instagram.com/'+props.instagram">
                        <img
                            style="width: 40px; height: 100px"
                            src="../src/assets/instagram.svg"
                            alt="" />
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div> 
</template>
>>>>>>> ca295a4c9d151b2e76c0257354f0d18f518aacbf
