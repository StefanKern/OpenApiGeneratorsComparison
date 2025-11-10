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
  serviceExample = '@Injectable({ providedIn: \'root\' })\n' +
    'export class PetsService {\n' +
    '  protected basePath = \'https://api.petstore.example.com/v1\';\n' +
    '  public defaultHeaders = new HttpHeaders();\n' +
    '\n' +
    '  constructor(protected httpClient: HttpClient) {}\n' +
    '\n' +
    '  public listPets(limit?: number, observe: any = \'body\', \n' +
    '                  reportProgress: boolean = false): Observable<any> {\n' +
    '    let localVarQueryParameters = new HttpParams();\n' +
    '    if (limit !== undefined && limit !== null) {\n' +
    '      localVarQueryParameters = localVarQueryParameters.set(\n' +
    '        \'limit\', <any>limit\n' +
    '      );\n' +
    '    }\n' +
    '\n' +
    '    return this.httpClient.get<Array<Pet>>(\n' +
    '      `${this.basePath}/pets`,\n' +
    '      { params: localVarQueryParameters, observe, reportProgress }\n' +
    '    );\n' +
    '  }\n' +
    '}';

  modelExample = 'export interface Pet {\n' +
    '  id: string;\n' +
    '  name: string;\n' +
    '  tag?: string;\n' +
    '  age?: number;\n' +
    '  species?: Pet.SpeciesEnum;\n' +
    '}\n' +
    '\n' +
    'export namespace Pet {\n' +
    '  export const SpeciesEnum = {\n' +
    '    Dog: \'dog\',\n' +
    '    Cat: \'cat\',\n' +
    '    Bird: \'bird\',\n' +
    '    Fish: \'fish\',\n' +
    '    Other: \'other\'\n' +
    '  } as const;\n' +
    '  export type SpeciesEnum = typeof SpeciesEnum[keyof typeof SpeciesEnum];\n' +
    '}';
}
