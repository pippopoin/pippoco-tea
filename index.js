class PippocoTea {
    constructor() {
      this.teaData = {};
    }
  
    setTeaData(key, value) {
      this.teaData[key] = value;
      console.log(`Set Pippoco Tea data for key'${key}':`, value);
    }
  
    getTeaData(key) {
      const value = this.teaData[key];
      console.log(`Retrieved Pippoco Tea data for key '${key}':`, value);
      return value;
    }
  
    brewTea() {
      console.log('Brewing a delightful cup of Pippoco Tea. ☕');
    }
  
    addIngredient(ingredient) {
      console.log(`Adding a special ingredient: ${ingredient} to enhance Pippoco Tea flavor.`);
    }
  
    enjoyTea() {
      console.log('Sipping on the wonderful flavor of Pippoco Tea. 🌈');
    }
  }
  
  // Example usage:
  const pippocoTea = new PippocoTea();
  
  pippocoTea.setTeaData('flavor', 'Magical Bliss');
  pippocoTea.setTeaData('aroma', 'Enchanting Fragrance');
  pippocoTea.brewTea();
  pippocoTea.addIngredient('Sparkling Dew');
  pippocoTea.enjoyTea();
  