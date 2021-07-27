<template>
  <div class="filter">   
  <div class="grid-item"><b>Filter</b></div>
  <select class="grid-item">
      <option value="category">Category</option>
      <option value="category">Kurtas</option>
      <option value="category">Sets & Dresses</option>
  </select>
  <select class="grid-item">
      <option value="category">Colour</option>
      <option value="category">Blue</option>
      <option value="category">Pink</option>
      <option value="category">White</option>
      <option value="category">Green</option>
      <option value="category">Yellow</option>
      <option value="category">Black</option>
      <option value="category">Red</option>
  </select>  
  <select class="grid-item">
      <option value="category">Price</option>
      <option value="category">Rs.0 to Rs.2000</option>
      <option value="category">Rs.2000 to Rs.4000</option>
  </select>
  <select class="grid-item">
      <option value="category">Size</option>
      <option value="category">6</option>
      <option value="category">8</option>
      <option value="category">10</option>
      <option value="category">12</option>
      <option value="category">14</option>
      <option value="category">16</option>
      <option value="category">18</option>
  </select>
  <select class="grid-item">
      <option value="category">NeckType</option>
      <option value="category">Round Neck</option>
      <option value="category">Boat Neck</option>
  </select>
  <select class="grid-item">
      <option value="category">Sleeve</option>
      <option value="category">Full Sleeve</option>
      <option value="category">Elbow Sleeve</option>
  </select>
  <select class="grid-item">
      <option value="category">Occasion</option>
      <option value="category">Festive</option>
      <option value="category">Casual</option>
  </select>
  <select class="grid-item">
      <option value="category">Length</option>
      <option value="category">Knee Length</option>
      <option value="category">Ankle Length</option>
  </select> 
  <select class="grid-item">
      <option value="category">Pattern</option>
      <option value="category">Solid</option>
      <option value="category">Floral</option>
      <option value="category">Printed</option>
      <option value="category">Striped</option>
  </select> 
  <select class="grid-item">
      <option value="category">Ornamentation</option>
      <option value="category">Thread Work</option>
      <option value="category">Sequins</option>
  </select>  
  <select class="grid-item">
      <option value="category">Fabric family</option>
      <option value="category">Cotton</option>
      <option value="category">Rayon</option>
  </select>
  <select class="grid-item">
      <option value="category">Closure</option>
      <option value="category">Button</option>
      <option value="category">Buttons</option>
  </select> 

  </div>
</template>

<script>
    export default {
        name: 'Filteration',

    }
</script>

<style scoped>
.filter{
  width: 20%;
  height: 100vh;
  margin: 20px;
  display: grid;
  
  grid-template-columns: auto;
  /* background-color: #2196F3; */
  /* padding: 10px; */
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #d3d3d3;
  display: grid;
  grid-template-rows: 10px;
  padding: 20px;
  font-size: 18px;
  text-align: left;
}

</style>