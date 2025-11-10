import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orval',
  imports: [CommonModule],
  template: `
    <div class="converter-page">
      <div class="header">
        <h1>Orval</h1>
        <p class="subtitle">REST client generator for TypeScript with a focus on developer experience</p>
      </div>

      <div class="content">
        <section class="info-section">
          <h2>Overview</h2>
          <p>
            <strong>Orval</strong> is a powerful code generator that creates REST clients from OpenAPI specifications.
            It supports multiple HTTP clients and frameworks, including Angular, React Query, Vue Query, and more.
            Orval focuses on providing a great developer experience with extensive customization options.
          </p>
        </section>

        <section class="features-section">
          <h2>Key Features</h2>
          <ul>
            <li>✓ Multi-framework support (Angular, React, Vue, etc.)</li>
            <li>✓ Multiple HTTP client options</li>
            <li>✓ Mock data generation</li>
            <li>✓ Custom transformers and hooks</li>
            <li>✓ TypeScript-first approach</li>
            <li>✓ Support for both OpenAPI 2.0 and 3.0</li>
            <li>✓ Extensive configuration options</li>
            <li>✓ Built-in validation</li>
          </ul>
        </section>

        <section class="installation-section">
          <h2>Installation</h2>
          <pre><code>npm install --save-dev orval</code></pre>
        </section>

        <section class="usage-section">
          <h2>Usage</h2>
          <pre><code>orval --input openapi/pets.json --output src/generated/orval</code></pre>
          <p>Or with a configuration file (orval.config.js):</p>
          <pre><code>module.exports = {{ '{' }}
  petstore: {{ '{' }}
    input: './openapi/pets.json',
    output: {{ '{' }}
      target: './src/generated/orval/pets.service.ts',
      client: 'angular',
      mode: 'single'
    {{ '}' }}
  {{ '}' }}
{{ '}' }};</code></pre>
        </section>

        <section class="code-section">
          <h2>Generated Code Example</h2>
          <div class="code-sample">
            <h3>Service</h3>
            <pre><code [innerText]="serviceExample"></code></pre>
          </div>
          <div class="code-sample">
            <h3>Model</h3>
            <pre><code [innerText]="modelExample"></code></pre>
          </div>
        </section>

        <section class="pros-cons">
          <div class="pros">
            <h3>Pros</h3>
            <ul>
              <li>Highly configurable</li>
              <li>Supports multiple frameworks</li>
              <li>Excellent TypeScript support</li>
              <li>Mock data generation</li>
              <li>Active development and community</li>
              <li>Great documentation</li>
            </ul>
          </div>
          <div class="cons">
            <h3>Cons</h3>
            <ul>
              <li>Configuration can be complex</li>
              <li>Learning curve for advanced features</li>
              <li>May require additional setup</li>
            </ul>
          </div>
        </section>

        <section class="rating-section">
          <h2>Rating</h2>
          <div class="rating-grid">
            <div class="rating-item">
              <span class="label">Ease of Use:</span>
              <span class="stars">⭐⭐⭐⭐</span>
            </div>
            <div class="rating-item">
              <span class="label">Angular Integration:</span>
              <span class="stars">⭐⭐⭐⭐</span>
            </div>
            <div class="rating-item">
              <span class="label">Code Quality:</span>
              <span class="stars">⭐⭐⭐⭐⭐</span>
            </div>
            <div class="rating-item">
              <span class="label">Customization:</span>
              <span class="stars">⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .converter-page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
      padding-bottom: 2rem;
      border-bottom: 2px solid #e0e0e0;
    }

    h1 {
      font-size: 3rem;
      color: #7c3aed;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      font-size: 1.2rem;
      color: #666;
    }

    .content section {
      margin-bottom: 2.5rem;
    }

    h2 {
      color: #333;
      margin-bottom: 1rem;
      font-size: 1.8rem;
    }

    h3 {
      color: #555;
      margin-bottom: 0.5rem;
      font-size: 1.3rem;
    }

    .features-section ul {
      list-style: none;
      padding: 0;
    }

    .features-section li {
      padding: 0.5rem 0;
      font-size: 1.1rem;
    }

    pre {
      background: #f5f5f5;
      padding: 1rem;
      border-radius: 4px;
      overflow-x: auto;
      border-left: 4px solid #7c3aed;
    }

    code {
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
    }

    .code-sample {
      margin-bottom: 1.5rem;
    }

    .pros-cons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .pros, .cons {
      padding: 1.5rem;
      border-radius: 8px;
    }

    .pros {
      background: #e8f5e9;
      border: 2px solid #4caf50;
    }

    .cons {
      background: #ffebee;
      border: 2px solid #f44336;
    }

    .pros h3 {
      color: #2e7d32;
    }

    .cons h3 {
      color: #c62828;
    }

    .pros ul, .cons ul {
      list-style: none;
      padding: 0;
    }

    .pros li, .cons li {
      padding: 0.3rem 0;
    }

    .rating-grid {
      display: grid;
      gap: 1rem;
    }

    .rating-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem;
      background: #f5f5f5;
      border-radius: 4px;
    }

    .label {
      font-weight: 600;
      color: #333;
    }

    .stars {
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      .pros-cons {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class OrvalComponent {
  serviceExample = '@Injectable({ providedIn: \'root\' })\n' +
    'export class PetsService {\n' +
    '  private http = inject(HttpClient);\n' +
    '\n' +
    '  listPets(params?: ListPetsParams): Observable<Pet[]> {\n' +
    '    return this.http.get<Pet[]>(\n' +
    '      `https://api.petstore.example.com/v1/pets`,\n' +
    '      { params: params as any }\n' +
    '    );\n' +
    '  }\n' +
    '\n' +
    '  createPet(newPet: NewPet): Observable<Pet> {\n' +
    '    return this.http.post<Pet>(\n' +
    '      `https://api.petstore.example.com/v1/pets`,\n' +
    '      newPet\n' +
    '    );\n' +
    '  }\n' +
    '}';

  modelExample = 'export type PetSpecies = typeof PetSpecies[keyof typeof PetSpecies];\n' +
    '\n' +
    'export const PetSpecies = {\n' +
    '  dog: \'dog\',\n' +
    '  cat: \'cat\',\n' +
    '  bird: \'bird\',\n' +
    '  fish: \'fish\',\n' +
    '  other: \'other\',\n' +
    '} as const;\n' +
    '\n' +
    'export interface Pet {\n' +
    '  id: string;\n' +
    '  name: string;\n' +
    '  tag?: string;\n' +
    '  age?: number;\n' +
    '  species?: PetSpecies;\n' +
    '}';
}
