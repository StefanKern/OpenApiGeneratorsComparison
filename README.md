# OpenAPI Generators Comparison

A comprehensive comparison of popular OpenAPI code generators for Angular/TypeScript applications.

## 🎯 Overview

This project demonstrates and compares four major OpenAPI client generators:

1. **ng-openapi-gen** - Angular-specific generator
2. **Orval** - Multi-framework TypeScript generator  
3. **OpenAPI Generator** - Industry-standard multi-language generator
4. **NSwag** - .NET/TypeScript toolchain

All generators are tested with the same `pets.json` OpenAPI 3.0 specification.

## 📁 Project Structure

```
├── openapi/
│   └── pets.json                 # Sample OpenAPI specification
├── src/
│   ├── generated/                # Generated client code examples
│   │   ├── ng-openapi-gen/
│   │   ├── orval/
│   │   ├── openapi-generator/
│   │   └── nswag/
│   └── app/
│       └── pages/                # Comparison demo pages
│           ├── overview.component.ts
│           ├── ng-openapi-gen.component.ts
│           ├── orval.component.ts
│           ├── openapi-generator.component.ts
│           └── nswag.component.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Angular CLI 20+

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you change source files.

## 📊 Comparison Summary

| Feature | ng-openapi-gen | Orval | OpenAPI Generator | NSwag |
|---------|----------------|-------|-------------------|-------|
| **Angular Integration** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Ease of Use** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Code Quality** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Customization** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

## 🔧 Generators Overview

### ng-openapi-gen
- **Best for:** Angular-specific projects
- **Pros:** Simple, clean code, perfect Angular integration
- **Cons:** Limited customization, OpenAPI 3.0+ only
- **NPM:** `ng-openapi-gen`

### Orval
- **Best for:** Projects needing flexibility
- **Pros:** Highly configurable, multi-framework, excellent DX
- **Cons:** Configuration complexity for advanced features
- **NPM:** `orval`

### OpenAPI Generator
- **Best for:** Multi-language teams
- **Pros:** Industry standard, 50+ languages, very flexible
- **Cons:** Verbose code, steep learning curve
- **NPM:** `@openapitools/openapi-generator-cli`

### NSwag
- **Best for:** .NET + Angular stacks
- **Pros:** Strong typing with classes, robust error handling
- **Cons:** More verbose, .NET-centric
- **NPM:** `nswag`

## 📖 Usage Examples

### Generate with ng-openapi-gen
```bash
ng-openapi-gen --input openapi/pets.json --output src/generated/ng-openapi-gen
```

### Generate with Orval
```bash
orval --input openapi/pets.json --output src/generated/orval
```

### Generate with OpenAPI Generator
```bash
openapi-generator-cli generate \
  -i openapi/pets.json \
  -g typescript-angular \
  -o src/generated/openapi-generator
```

### Generate with NSwag
```bash
nswag openapi2tsclient \
  /input:openapi/pets.json \
  /output:src/generated/nswag/pets-client.ts \
  /template:Angular
```

## 🎨 Demo Application

The demo application includes:
- **Overview Page** - Side-by-side comparison of all generators
- **Individual Pages** - Detailed analysis for each generator
- **Code Examples** - Real generated code samples
- **Ratings** - Feature comparisons and recommendations

## 📝 OpenAPI Specification

The `pets.json` specification includes:
- CRUD operations for pets
- Query parameters
- Request/response models
- Error handling
- Enumerations
- Optional fields

## 🤝 Contributing

Feel free to add more generators or improve existing comparisons!

## 📄 License

This project is for educational and comparison purposes.

## 🔗 Resources

- [OpenAPI Specification](https://swagger.io/specification/)
- [ng-openapi-gen Documentation](https://github.com/cyclosproject/ng-openapi-gen)
- [Orval Documentation](https://orval.dev/)
- [OpenAPI Generator Documentation](https://openapi-generator.tech/)
- [NSwag Documentation](https://github.com/RicoSuter/NSwag)
