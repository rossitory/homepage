<script lang="ts" setup>
</script>

<template>
  <section id="offer" class="flex flex-col min-h-screen justify-center p-8">
    <h2 class="custom-header mb-8">What I can <span class="text-customPrimary">do for you.</span></h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <InfoRow title="Homepages" image="/images/icons/homepage.png" text="I specialize in creating responsive and user-friendly websites tailored to your business’s needs. Whether you're launching a new brand or refreshing an existing one, I’ll build a website that reflects your identity and engages your audience." />
      <InfoRow title="Webapplications" image="/images/icons/application.png" text="From custom web applications to more advanced functionality, I can create dynamic platforms that scale with your business. I focus on usability, performance, and long-term maintainability." />
      <InfoRow title="Mobile Applications" image="/images/icons/mobileapp.png" text="From custom mobile apps to advanced functionalities, I build dynamic solutions that grow with your business. My focus is on delivering apps that prioritize user experience, performance, and long-term scalability, ensuring your mobile presence stays future-proof." /> 
      <InfoRow title="Process Automation" image="/images/icons/script.png" text="I streamline workflows by automating repetitive tasks, helping you focus on what truly matters. Whether it's integrating systems or developing custom scripts, I’ll bring efficiency to your daily operations." />
    </div>
  </section>
</template>