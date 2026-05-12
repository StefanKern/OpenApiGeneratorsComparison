import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-openapi-generator',
  imports: [CommonModule],
  template: `
    <div class="converter-page">
      <div class="header">
        <h1>OpenAPI Generator</h1>
        <p class="subtitle">Industry-standard code generator supporting 50+ languages and frameworks</p>
        <div class="meta-info">
          <span class="meta-badge">🗓 First released: Nov 25, 2018</span>
          <a class="meta-badge" href="https://www.npmjs.com/package/@openapitools/openapi-generator-cli" target="_blank" rel="noopener noreferrer">📦 Latest: v2.32.0</a>
          <a class="meta-badge" href="https://github.com/OpenAPITools/openapi-generator-cli" target="_blank" rel="noopener noreferrer">🏠 Homepage</a>
        </div>
      </div>

      <div class="content">
        <section class="info-section">
          <h2>Overview</h2>
          <p>
            <strong>OpenAPI Generator</strong> is a comprehensive, community-driven tool that generates API clients,
            server stubs, and documentation from OpenAPI specifications. It's one of the most widely used generators
            with support for over 50 programming languages and frameworks, including TypeScript/Angular.
          </p>
        </section>

        <section class="features-section">
          <h2>Key Features</h2>
          <ul>
            <li>✓ Support for 50+ languages and frameworks</li>
            <li>✓ Highly customizable templates</li>
            <li>✓ Both OpenAPI 2.0 and 3.0 support</li>
            <li>✓ Multiple overload options for methods</li>
            <li>✓ Advanced parameter validation</li>
            <li>✓ Large, active community</li>
            <li>✓ Regular updates and maintenance</li>
            <li>✓ Extensive documentation</li>
          </ul>
        </section>

        <section class="installation-section">
          <h2>Installation</h2>
          <pre><code>npm install --save-dev @openapitools/openapi-generator-cli</code></pre>
        </section>

        <section class="usage-section">
          <h2>Usage</h2>
          <pre><code>openapi-generator-cli generate \\
  -i openapi/pets.json \\
  -g typescript-angular \\
  -o src/generated/openapi-generator</code></pre>
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
              <li>Industry standard tool</li>
              <li>Massive language/framework support</li>
              <li>Very flexible and customizable</li>
              <li>Strong community support</li>
              <li>Well-documented</li>
              <li>Advanced features (method overloads, etc.)</li>
            </ul>
          </div>
          <div class="cons">
            <h3>Cons</h3>
            <ul>
              <li>Requires Java (JVM) to run — not Node.js</li>
              <li>Can generate verbose code</li>
              <li>Steep learning curve for customization</li>
              <li>Generated code may need cleanup</li>
              <li>Heavier dependency</li>
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
              <span class="stars">⭐⭐⭐</span>
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
      color: #0ea5e9;
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
      border-left: 4px solid #0ea5e9;
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
export class OpenApiGeneratorComponent {
  serviceExample = `@Injectable({ providedIn: 'root' })
export class PetsService extends BaseService {
  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string | string[],
    @Optional() configuration?: Configuration
  ) { super(basePath, configuration); }

  // Three overloads let callers choose what the Observable emits
  public listPets(limit?: number, observe?: 'body', reportProgress?: boolean): Observable<Pet[]>;
  public listPets(limit?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Pet[]>>;
  public listPets(limit?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Pet[]>>;
  public listPets(limit?: number, observe: any = 'body', reportProgress = false): Observable<any> {
    let params = new HttpParams();
    if (limit !== undefined) params = params.set('limit', limit);
    return this.httpClient.request<Pet[]>('get',
      \`\${this.configuration.basePath}/pets\`,
      { params, observe, reportProgress });
  }

  public createPet(newPet: NewPet, observe?: 'body', reportProgress?: boolean): Observable<Pet>;
  public createPet(newPet: NewPet, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Pet>>;
  public createPet(newPet: NewPet, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Pet>>;
  public createPet(newPet: NewPet, observe: any = 'body', reportProgress = false): Observable<any> {
    return this.httpClient.request<Pet>('post',
      \`\${this.configuration.basePath}/pets\`,
      { body: newPet, observe, reportProgress });
  }

  public getPetById(petId: string, observe?: 'body', reportProgress?: boolean): Observable<Pet>;
  public getPetById(petId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Pet>>;
  public getPetById(petId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Pet>>;
  public getPetById(petId: string, observe: any = 'body', reportProgress = false): Observable<any> {
    const id = this.configuration.encodeParam({ name: 'petId', value: petId,
      in: 'path', style: 'simple', explode: false, dataType: 'string', dataFormat: undefined });
    return this.httpClient.request<Pet>('get',
      \`\${this.configuration.basePath}/pets/\${id}\`,
      { observe, reportProgress });
  }

  public deletePet(petId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
  public deletePet(petId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
  public deletePet(petId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
  public deletePet(petId: string, observe: any = 'body', reportProgress = false): Observable<any> {
    const id = this.configuration.encodeParam({ name: 'petId', value: petId,
      in: 'path', style: 'simple', explode: false, dataType: 'string', dataFormat: undefined });
    return this.httpClient.request<any>('delete',
      \`\${this.configuration.basePath}/pets/\${id}\`,
      { observe, reportProgress });
  }
}`;

  modelExample = `export interface Pet {
  id: string;
  name: string;
  tag?: string;
  age?: number;
  species?: Pet.SpeciesEnum;
}

export namespace Pet {
  export const SpeciesEnum = {
    Dog: 'dog',
    Cat: 'cat',
    Bird: 'bird',
    Fish: 'fish',
    Other: 'other'
  } as const;
  export type SpeciesEnum = typeof SpeciesEnum[keyof typeof SpeciesEnum];
}

export interface NewPet {
  name: string;
  tag?: string;
  age?: number;
  species?: Pet.SpeciesEnum;
}`;
}
