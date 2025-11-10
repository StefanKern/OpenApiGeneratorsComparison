import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-openapi-gen',
  imports: [CommonModule],
  template: `
    <div class="converter-page">
      <div class="header">
        <h1>ng-openapi-gen</h1>
        <p class="subtitle">OpenAPI client generator specifically designed for Angular</p>
      </div>

      <div class="content">
        <section class="info-section">
          <h2>Overview</h2>
          <p>
            <strong>ng-openapi-gen</strong> is a code generator tailored for Angular applications that creates
            TypeScript clients from OpenAPI 3.0 specifications. It generates services that use Angular's
            HttpClient and follows Angular best practices.
          </p>
        </section>

        <section class="features-section">
          <h2>Key Features</h2>
          <ul>
            <li>✓ Angular-specific service generation</li>
            <li>✓ Uses Angular's HttpClient</li>
            <li>✓ Injectable services with dependency injection</li>
            <li>✓ Type-safe models and interfaces</li>
            <li>✓ Query parameter handling with HttpParams</li>
            <li>✓ Supports OpenAPI 3.0</li>
            <li>✓ Simple and clean generated code</li>
          </ul>
        </section>

        <section class="installation-section">
          <h2>Installation</h2>
          <pre><code>npm install --save-dev ng-openapi-gen</code></pre>
        </section>

        <section class="usage-section">
          <h2>Usage</h2>
          <pre><code>ng-openapi-gen --input openapi/pets.json --output src/generated/ng-openapi-gen</code></pre>
        </section>

        <section class="code-section">
          <h2>Generated Code Example</h2>
          <div class="code-sample">
            <h3>Service</h3>
            <pre><code>{{ serviceExample }}</code></pre>
          </div>
          <div class="code-sample">
            <h3>Model</h3>
            <pre><code>{{ modelExample }}</code></pre>
          </div>
        </section>

        <section class="pros-cons">
          <div class="pros">
            <h3>Pros</h3>
            <ul>
              <li>Built specifically for Angular</li>
              <li>Clean, readable code output</li>
              <li>Easy to integrate into Angular projects</li>
              <li>Good TypeScript support</li>
              <li>Regular updates</li>
            </ul>
          </div>
          <div class="cons">
            <h3>Cons</h3>
            <ul>
              <li>Only supports OpenAPI 3.0+</li>
              <li>Limited customization options</li>
              <li>Less feature-rich than some alternatives</li>
            </ul>
          </div>
        </section>

        <section class="rating-section">
          <h2>Rating</h2>
          <div class="rating-grid">
            <div class="rating-item">
              <span class="label">Ease of Use:</span>
              <span class="stars">⭐⭐⭐⭐⭐</span>
            </div>
            <div class="rating-item">
              <span class="label">Angular Integration:</span>
              <span class="stars">⭐⭐⭐⭐⭐</span>
            </div>
            <div class="rating-item">
              <span class="label">Code Quality:</span>
              <span class="stars">⭐⭐⭐⭐⭐</span>
            </div>
            <div class="rating-item">
              <span class="label">Customization:</span>
              <span class="stars">⭐⭐⭐</span>
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
      color: #dd0031;
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
      border-left: 4px solid #dd0031;
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
export class NgOpenApiGenComponent {
  serviceExample = `// Function-based approach
import { HttpClient } from '@angular/common/http';
import { listPets } from './fn/pets/list-pets';
import { ListPets$Params } from './fn/pets/list-pets';

export function getPets(
  http: HttpClient, 
  rootUrl: string, 
  params?: ListPets$Params
): Observable<StrictHttpResponse<Pets>> {
  const rb = new RequestBuilder(rootUrl, listPets.PATH, 'get');
  if (params) {
    rb.query('limit', params.limit, {});
  }
  return http.request(rb.build({ 
    responseType: 'json', 
    accept: 'application/json' 
  })).pipe(
    filter((r: any): r is HttpResponse<any> => 
      r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Pets>;
    })
  );
}`;

  modelExample = `export interface Pet {
  age?: number;
  id: string;
  name: string;
  species?: 'dog' | 'cat' | 'bird' | 'fish' | 'other';
  tag?: string;
}`;
}
