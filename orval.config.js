module.exports = {
  petstore: {
    input: './openapi/pets.json',
    output: {
      target: './src/generated/orval/pets.service.ts',
      client: 'angular',
      mode: 'single'
    }
  }
};
