import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hey-api',
  imports: [CommonModule],
  template: `
    <div class="converter-page">
      <div class="header">
        <h1>Hey API</h1>
        <p class="subtitle">TypeScript-first OpenAPI client generator with Angular support</p>
        <div class="meta-info">
          <span class="meta-badge">🗓 First released: Mar 22, 2024</span>
          <a class="meta-badge" href="https://www.npmjs.com/package/@hey-api/openapi-ts" target="_blank" rel="noopener noreferrer">📦 Latest: v0.97.1</a>
          <a class="meta-badge" href="https://heyapi.dev" target="_blank" rel="noopener noreferrer">🏠 Homepage</a>
        </div>
      </div>

      <div class="content">
        <section class="info-section">
          <h2>Overview</h2>
          <p>
            <strong>@hey-api/openapi-ts</strong> is a modern TypeScript-first OpenAPI code generator
            that produces clean, type-safe clients. Combined with <strong>@hey-api/client-angular</strong>,
            it generates Angular-idiomatic services using the Angular <code>HttpClient</code> with full
            dependency injection support and RxJS Observables.
          </p>
        </section>

        <section class="features-section">
          <h2>Key Features</h2>
          <ul>
            <li>✓ TypeScript-first code generation</li>
            <li>✓ Angular-native client via <code>@hey-api/client-angular</code></li>
            <li>✓ Uses Angular's HttpClient and RxJS Observables</li>
            <li>✓ Generates typed request/response data models</li>
            <li>✓ Supports OpenAPI 2.0, 3.0, and 3.1</li>
            <li>✓ Clean separation of types, services, and schemas</li>
            <li>✓ Plugin-based architecture for extensibility</li>
            <li>✓ Tree-shakable output</li>
          </ul>
        </section>

        <section class="installation-section">
          <h2>Installation</h2>
          <pre><code>npm install --save-dev @hey-api/openapi-ts
npm install @hey-api/client-angular</code></pre>
        </section>

        <section class="usage-section">
          <h2>Usage</h2>
          <pre><code>npx @hey-api/openapi-ts \\
  --input openapi/pets.json \\
  --output src/generated/hey-api \\
  --client @hey-api/client-angular</code></pre>
          <p>Or with a configuration file (<code>openapi-ts.config.ts</code>):</p>
          <pre><code>import {{ '{' }} defineConfig {{ '}' }} from '@hey-api/openapi-ts';

export default defineConfig({{ '{' }}
  input: 'openapi/pets.json',
  output: 'src/generated/hey-api',
  plugins: [
    '@hey-api/client-angular',
    '@hey-api/typescript',
    '@hey-api/services',
  ],
{{ '}' }});</code></pre>
        </section>

        <section class="code-section">
          <h2>Generated Code Example</h2>
          <div class="code-sample">
            <h3>Service (services.gen.ts)</h3>
            <pre><code [innerText]="serviceExample"></code></pre>
          </div>
          <div class="code-sample">
            <h3>Types (types.gen.ts)</h3>
            <pre><code [innerText]="typesExample"></code></pre>
          </div>
        </section>

        <section class="pros-cons">
          <div class="pros">
            <h3>Pros</h3>
            <ul>
              <li>Clean, modern TypeScript output</li>
              <li>Tree-shakable generated code</li>
              <li>Angular-native DI and HttpClient</li>
              <li>Supports OpenAPI 2.0, 3.0, and 3.1</li>
              <li>Plugin architecture enables extensibility</li>
              <li>Actively maintained with frequent releases</li>
            </ul>
          </div>
          <div class="cons">
            <h3>Cons</h3>
            <ul>
              <li>Relatively newer tool, smaller community</li>
              <li>Angular client is a separate package</li>
              <li>Plugin system adds configuration complexity</li>
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
              <span class="stars">⭐⭐⭐⭐</span>
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
      color: #f59e0b;
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
      border-left: 4px solid #f59e0b;
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
export class HeyApiComponent {
  serviceExample =
    `import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type {
  ListPetsData,
  ListPetsResponse,
  CreatePetData,
  Pet,
  GetPetByIdData,
  DeletePetData,
} from './types.gen';

@Injectable({ providedIn: 'root' })
export class PetsService {
  private readonly http = inject(HttpClient);

  listPets(data?: ListPetsData): Observable<ListPetsResponse> {
    return this.http.get<ListPetsResponse>('/pets', {
      params: data?.query as Record<string, string>,
    });
  }

  createPet(data: CreatePetData): Observable<Pet> {
    return this.http.post<Pet>('/pets', data.body);
  }

  getPetById(data: GetPetByIdData): Observable<Pet> {
    return this.http.get<Pet>(\`/pets/\${data.path.petId}\`);
  }

  deletePet(data: DeletePetData): Observable<void> {
    return this.http.delete<void>(\`/pets/\${data.path.petId}\`);
  }
}`;

  typesExample =
    `// types.gen.ts — auto-generated, do not edit

export type Pet = {
  id: number;
  name: string;
  tag?: string;
};

export type NewPet = {
  name: string;
  tag?: string;
};

export type ModelError = {
  code: number;
  message: string;
};

export type ListPetsData = {
  query?: {
    limit?: number;
  };
};

export type ListPetsResponse = Array<Pet>;

export type CreatePetData = {
  body: NewPet;
};

export type GetPetByIdData = {
  path: {
    petId: number;
  };
};

export type DeletePetData = {
  path: {
    petId: number;
  };
};`;
}
