<template>
  <div class="mt-5">
    <b-button variant="danger">Button</b-button> &nbsp;
    <b-button variant="success">Button</b-button> &nbsp;
    <b-button variant="info">Button</b-button> &nbsp;
    <b-button variant="primary">Button</b-button> &nbsp;
    <b-button variant="warning">Button</b-button> &nbsp;
    <b-button variant="dark">Button</b-button> &nbsp;
    <b-button variant="outline-primary">Button</b-button>

    <b-row class="mb-3 mt-2">
      <b-col class="mt-3" cols="12" md="6">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ad
            sunt et, doloremque quia distinctio in beatae similique illum sint
            eos explicabo perspiciatis corrupti voluptate perferendis
            consequuntur labore facilis expedita!
          </p>

          <b-button variant="dark" href="#">Button</b-button>
        </b-card>
      </b-col>

      <b-col class="mt-3" cols="12" md="6">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ad
            sunt et, doloremque quia distinctio in beatae similique illum sint
            eos explicabo perspiciatis corrupti voluptate perferendis
            consequuntur labore facilis expedita!
          </p>

          <b-button variant="dark" href="#">Button</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>
