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
        <div class="meta-info">
          <span class="meta-badge">🗓 First released: Jan 11, 2020</span>
          <a class="meta-badge" href="https://www.npmjs.com/package/orval" target="_blank" rel="noopener noreferrer">📦 Latest: v8.10.0</a>
          <a class="meta-badge" href="https://orval.dev" target="_blank" rel="noopener noreferrer">🏠 Homepage</a>
        </div>
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

    .meta-info {
      display: flex;
      gap: 0.75rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 1rem;
    }

    .meta-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      padding: 0.4rem 0.9rem;
      border-radius: 20px;
      font-size: 0.85rem;
      background: #f5f5f5;
      color: #333;
      text-decoration: none;
      border: 1px solid #e0e0e0;
      transition: background 0.2s;
    }

    a.meta-badge:hover {
      background: #e0e0e0;
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
  serviceExample = `@Injectable({ providedIn: 'root' })
export class PetStoreAPIService {
  private readonly http = inject(HttpClient);

  /** @summary List all pets */
  listPets<TData = Pet[]>(params?: ListPetsParams, options?: HttpClientOptions & { observe?: 'body' }): Observable<TData>;
  listPets<TData = Pet[]>(params?: ListPetsParams, options?: HttpClientOptions & { observe: 'response' }): Observable<AngularHttpResponse<TData>>;
  listPets<TData = Pet[]>(params?: ListPetsParams, options?: HttpClientOptions & { observe?: any }): Observable<any> {
    return this.http.get<TData>(\`/pets\`, { ...options, params: { ...params, ...options?.params } });
  }

  /** @summary Create a pet */
  createPet<TData = Pet>(newPet: NewPet, options?: HttpClientOptions & { observe?: 'body' }): Observable<TData>;
  createPet<TData = Pet>(newPet: NewPet, options?: HttpClientOptions & { observe: 'response' }): Observable<AngularHttpResponse<TData>>;
  createPet<TData = Pet>(newPet: NewPet, options?: HttpClientOptions & { observe?: any }): Observable<any> {
    return this.http.post<TData>(\`/pets\`, newPet, options);
  }

  /** @summary Info for a specific pet */
  getPetById<TData = Pet>(petId: string, options?: HttpClientOptions & { observe?: 'body' }): Observable<TData>;
  getPetById<TData = Pet>(petId: string, options?: HttpClientOptions & { observe: 'response' }): Observable<AngularHttpResponse<TData>>;
  getPetById<TData = Pet>(petId: string, options?: HttpClientOptions & { observe?: any }): Observable<any> {
    return this.http.get<TData>(\`/pets/\${petId}\`, options);
  }

  /** @summary Delete a pet */
  deletePet<TData = void>(petId: string, options?: HttpClientOptions & { observe?: 'body' }): Observable<TData>;
  deletePet<TData = void>(petId: string, options?: HttpClientOptions & { observe: 'response' }): Observable<AngularHttpResponse<TData>>;
  deletePet<TData = void>(petId: string, options?: HttpClientOptions & { observe?: any }): Observable<any> {
    return this.http.delete<TData>(\`/pets/\${petId}\`, options);
  }
}`;

  modelExample = `export type PetSpecies = typeof PetSpecies[keyof typeof PetSpecies];

export const PetSpecies = {
  dog: 'dog',
  cat: 'cat',
  bird: 'bird',
  fish: 'fish',
  other: 'other',
} as const;

export interface Pet {
  id: string;
  name: string;
  tag?: string;
  age?: number;
  species?: PetSpecies;
}

export interface NewPet {
  name: string;
  tag?: string;
  age?: number;
  species?: PetSpecies;
}

export type Pets = Pet[];

export type ListPetsParams = {
  /** How many items to return at one time (max 100) */
  limit?: number;
}`;
}
