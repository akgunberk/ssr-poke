<template>
  <Card class="house-card mb-4">
    <template #header>
      <Image :src="house.imageUrl" alt="House Image" />
    </template>
    <template #title>
      {{ house.title }}
    </template>
    <template #content>
      <div class="house-details">
        <p><strong>Price:</strong> ${{ house.price }}</p>
        <p><strong>Location:</strong> {{ house.location }}</p>
        <p><strong>Bedrooms:</strong> {{ house.bedrooms }}</p>
        <p><strong>Bathrooms:</strong> {{ house.bathrooms }}</p>
        <p>{{ house.description }}</p>
      </div>
    </template>
    <template #footer>
      <Button
        label="Book House"
        icon="pi pi-whatsapp"
        @click="openWhatsApp"
        class="p-button-success"
      />
    </template>
  </Card>
</template>

<script setup>
const props = defineProps({
  house: {
    type: Object,
    required: true,
  },
});

const openWhatsApp = () => {
  const message = encodeURIComponent(
    `Hey, I am interested in booking this house: ${props.house.title}. Is it available?`
  );
  const whatsappUrl = `https://wa.me/${props.house.contactNumber}?text=${message}`;
  window.open(whatsappUrl, "_blank");
};
</script>

<style scoped>
.house-card {
  display: flex;
  margin-bottom: 1rem;
}

.house-details {
  padding: 1rem 0;
}

:deep(.p-card-body) {
  flex: 1;
}

:deep(.p-card-content) {
  padding-top: 0;
}
</style>
