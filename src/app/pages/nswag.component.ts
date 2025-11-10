import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nswag',
  imports: [CommonModule],
  template: `
    <div class="converter-page">
      <div class="header">
        <h1>NSwag</h1>
        <p class="subtitle">Swagger/OpenAPI toolchain for .NET and TypeScript</p>
      </div>

      <div class="content">
        <section class="info-section">
          <h2>Overview</h2>
          <p>
            <strong>NSwag</strong> is a comprehensive toolchain for working with OpenAPI/Swagger specifications.
            While primarily designed for .NET, it includes excellent TypeScript client generation capabilities.
            It creates robust, type-safe clients with extensive error handling and validation.
          </p>
        </section>

        <section class="features-section">
          <h2>Key Features</h2>
          <ul>
            <li>✓ Strong type safety with classes</li>
            <li>✓ Comprehensive error handling</li>
            <li>✓ Built-in serialization/deserialization</li>
            <li>✓ Support for both Swagger 2.0 and OpenAPI 3.0</li>
            <li>✓ Method overloads for different return types</li>
            <li>✓ Blob/file handling support</li>
            <li>✓ Extensive configuration options</li>
            <li>✓ Good .NET integration</li>
          </ul>
        </section>

        <section class="installation-section">
          <h2>Installation</h2>
          <pre><code>npm install --save-dev nswag</code></pre>
        </section>

        <section class="usage-section">
          <h2>Usage</h2>
          <pre><code>nswag openapi2tsclient \\
  /input:openapi/pets.json \\
  /output:src/generated/nswag/pets-client.ts \\
  /template:Angular</code></pre>
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
              <li>Excellent type safety with classes</li>
              <li>Robust error handling</li>
              <li>Good for .NET + Angular stacks</li>
              <li>Comprehensive blob/file support</li>
              <li>Mature and stable</li>
              <li>Well-maintained</li>
            </ul>
          </div>
          <div class="cons">
            <h3>Cons</h3>
            <ul>
              <li>Generates more verbose code</li>
              <li>Classes instead of interfaces (heavier)</li>
              <li>Complex generated code structure</li>
              <li>Primarily focused on .NET ecosystem</li>
            </ul>
          </div>
        </section>

        <section class="rating-section">
          <h2>Rating</h2>
          <div class="rating-grid">
            <div class="rating-item">
              <span class="label">Ease of Use:</span>
              <span class="stars">⭐⭐⭐</span>
            </div>
            <div class="rating-item">
              <span class="label">Angular Integration:</span>
              <span class="stars">⭐⭐⭐⭐</span>
            </div>
            <div class="rating-item">
              <span class="label">Code Quality:</span>
              <span class="stars">⭐⭐⭐⭐</span>
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
      color: #10b981;
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
      border-left: 4px solid #10b981;
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
export class NSwagComponent {
  serviceExample = `@Injectable()
export class NSwagPetsClient {
  private http: HttpClient;
  private baseUrl: string;

  constructor(@Inject(HttpClient) http: HttpClient, 
              @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
    this.http = http;
    this.baseUrl = baseUrl ?? "https://api.petstore.example.com/v1";
  }

  listPets(limit: number | undefined): Observable<Pet[]> {
    let url_ = this.baseUrl + "/pets?";
    if (limit !== undefined && limit !== null)
      url_ += "limit=" + encodeURIComponent("" + limit) + "&";
    url_ = url_.replace(/[?&]$/, "");

    return this.http.request("get", url_, options_)
      .pipe(_observableMergeMap((response_: any) => {
        return this.processListPets(response_);
      }));
  }
}`;

  modelExample = `export interface IPet {
  id: string;
  name: string;
  tag?: string | undefined;
  age?: number | undefined;
  species?: PetSpecies | undefined;
}

export class Pet implements IPet {
  id!: string;
  name!: string;
  tag?: string | undefined;
  age?: number | undefined;
  species?: PetSpecies | undefined;

  constructor(data?: IPet) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  static fromJS(data: any): Pet {
    data = typeof data === 'object' ? data : {};
    let result = new Pet();
    result.init(data);
    return result;
  }
}`;
}
