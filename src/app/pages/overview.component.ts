import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Generator {
  name: string;
  description: string;
  route: string;
  color: string;
  npm: string;
  stars: {
    easeOfUse: number;
    angularIntegration: number;
    codeQuality: number;
    customization: number;
  };
  pros: string[];
  cons: string[];
}

@Component({
  selector: 'app-overview',
  imports: [CommonModule, RouterLink],
  template: `
    <div class="overview-page">
      <header class="page-header">
        <h1>OpenAPI Generator Comparison</h1>
        <p class="subtitle">
          Comparing popular OpenAPI code generators for Angular/TypeScript applications
        </p>
        <div class="spec-info">
          <span class="badge">OpenAPI 3.0</span>
          <span class="badge">TypeScript</span>
          <span class="badge">Angular 20</span>
        </div>
      </header>

      <section class="intro-section">
        <h2>About This Comparison</h2>
        <p>
          This project compares five popular OpenAPI code generators for Angular/TypeScript projects.
          All examples are generated from the same <code>pets.json</code> OpenAPI specification file,
          which defines a simple Pet Store API with CRUD operations.
        </p>
        <div class="spec-link">
          <strong>📄 OpenAPI Spec:</strong>
          <code>openapi/pets.json</code>
        </div>
      </section>

      <section class="generators-grid">
        <div class="generator-card" *ngFor="let gen of generators" [style.border-left-color]="gen.color">
          <div class="card-header">
            <h3>{{ gen.name }}</h3>
            <span class="npm-package">{{ gen.npm }}</span>
          </div>
          
          <p class="description">{{ gen.description }}</p>
          
          <div class="ratings">
            <div class="rating-row">
              <span class="label">Ease of Use:</span>
              <span class="stars">{{ getStars(gen.stars.easeOfUse) }}</span>
            </div>
            <div class="rating-row">
              <span class="label">Angular:</span>
              <span class="stars">{{ getStars(gen.stars.angularIntegration) }}</span>
            </div>
            <div class="rating-row">
              <span class="label">Code Quality:</span>
              <span class="stars">{{ getStars(gen.stars.codeQuality) }}</span>
            </div>
            <div class="rating-row">
              <span class="label">Customization:</span>
              <span class="stars">{{ getStars(gen.stars.customization) }}</span>
            </div>
          </div>

          <div class="highlights">
            <div class="pros-brief">
              <strong>✓ Top Features:</strong>
              <ul>
                <li *ngFor="let pro of gen.pros.slice(0, 3)">{{ pro }}</li>
              </ul>
            </div>
          </div>

          <a [routerLink]="['/', gen.route]" class="view-details-btn" [style.background-color]="gen.color">
            View Details →
          </a>
        </div>
      </section>

      <section class="comparison-table">
        <h2>Quick Comparison</h2>
        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th *ngFor="let gen of generators">{{ gen.name }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Angular-Specific</strong></td>
                <td>✅ Yes</td>
                <td>✅ Yes</td>
                <td>⚠️ Multi-framework</td>
                <td>⚠️ .NET focused</td>
                <td>✅ Yes (plugin)</td>
              </tr>
              <tr>
                <td><strong>Code Style</strong></td>
                <td>Interfaces</td>
                <td>Interfaces & Types</td>
                <td>Interfaces & Namespaces</td>
                <td>Classes</td>
                <td>Interfaces & Types</td>
              </tr>
              <tr>
                <td><strong>OpenAPI Support</strong></td>
                <td>3.0+</td>
                <td>2.0, 3.0</td>
                <td>2.0, 3.0</td>
                <td>2.0, 3.0</td>
                <td>2.0, 3.0, 3.1</td>
              </tr>
              <tr>
                <td><strong>Learning Curve</strong></td>
                <td>Low</td>
                <td>Medium</td>
                <td>Medium-High</td>
                <td>Medium</td>
                <td>Low-Medium</td>
              </tr>
              <tr>
                <td><strong>Bundle Size</strong></td>
                <td>Small</td>
                <td>Small</td>
                <td>Medium</td>
                <td>Large</td>
                <td>Small</td>
              </tr>
              <tr>
                <td><strong>Customization</strong></td>
                <td>Limited</td>
                <td>Extensive</td>
                <td>Very Extensive</td>
                <td>Good</td>
                <td>Good</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="recommendations">
        <h2>Recommendations</h2>
        <div class="recommendation-grid">
          <div class="rec-card">
            <h3>🏆 Best for Angular</h3>
            <p><strong>ng-openapi-gen</strong></p>
            <p>Purpose-built for Angular with clean, idiomatic code.</p>
          </div>
          <div class="rec-card">
            <h3>🎨 Most Flexible</h3>
            <p><strong>Orval</strong></p>
            <p>Extensive customization and multi-framework support.</p>
          </div>
          <div class="rec-card">
            <h3>🌍 Industry Standard</h3>
            <p><strong>OpenAPI Generator</strong></p>
            <p>Widest language/framework support, large community.</p>
          </div>
          <div class="rec-card">
            <h3>🔒 Type Safety</h3>
            <p><strong>NSwag</strong></p>
            <p>Strong typing with classes, excellent for .NET stacks.</p>
          </div>
          <div class="rec-card">
            <h3>✨ Modern TypeScript</h3>
            <p><strong>Hey API</strong></p>
            <p>Clean, tree-shakable output with full OpenAPI 3.1 support.</p>
          </div>
        </div>
      </section>

      <footer class="page-footer">
        <p>Click on any generator above to see detailed examples and generated code.</p>
      </footer>
    </div>
  `,
  styles: [`
    .overview-page {
      max-width: 1400px;
      margin: 0 auto;
      padding: 2rem;
    }

    .page-header {
      text-align: center;
      margin-bottom: 3rem;
      padding: 3rem 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 12px;
    }

    h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .subtitle {
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
      opacity: 0.9;
    }

    .spec-info {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .badge {
      background: rgba(255, 255, 255, 0.2);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      backdrop-filter: blur(10px);
    }

    .intro-section {
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 8px;
      margin-bottom: 3rem;
    }

    .intro-section h2 {
      color: #333;
      margin-bottom: 1rem;
    }

    .spec-link {
      margin-top: 1rem;
      padding: 1rem;
      background: white;
      border-radius: 4px;
      border-left: 4px solid #667eea;
    }

    code {
      background: #e9ecef;
      padding: 0.2rem 0.5rem;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .generators-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .generator-card {
      background: white;
      border: 1px solid #e0e0e0;
      border-left: 4px solid;
      border-radius: 8px;
      padding: 1.5rem;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .generator-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.5rem;
    }

    .card-header h3 {
      margin: 0;
      color: #333;
      font-size: 1.5rem;
    }

    .npm-package {
      font-size: 0.75rem;
      color: #666;
      font-family: 'Courier New', monospace;
      background: #f5f5f5;
      padding: 0.25rem 0.5rem;
      border-radius: 3px;
    }

    .description {
      color: #666;
      margin-bottom: 1.5rem;
      font-size: 0.95rem;
    }

    .ratings {
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 6px;
      margin-bottom: 1rem;
    }

    .rating-row {
      display: flex;
      justify-content: space-between;
      padding: 0.3rem 0;
      font-size: 0.9rem;
    }

    .label {
      color: #666;
      font-weight: 500;
    }

    .stars {
      color: #ffc107;
    }

    .highlights {
      margin-bottom: 1.5rem;
    }

    .pros-brief {
      font-size: 0.9rem;
    }

    .pros-brief ul {
      margin: 0.5rem 0 0 0;
      padding-left: 1.2rem;
    }

    .pros-brief li {
      margin: 0.3rem 0;
      color: #555;
    }

    .view-details-btn {
      display: block;
      text-align: center;
      padding: 0.75rem;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      transition: opacity 0.2s;
    }

    .view-details-btn:hover {
      opacity: 0.9;
    }

    .comparison-table {
      margin-bottom: 3rem;
    }

    .comparison-table h2 {
      color: #333;
      margin-bottom: 1.5rem;
    }

    .table-responsive {
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
    }

    th {
      background: #f8f9fa;
      font-weight: 600;
      color: #333;
    }

    tbody tr:hover {
      background: #f8f9fa;
    }

    .recommendations {
      margin-bottom: 3rem;
    }

    .recommendations h2 {
      color: #333;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .recommendation-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .rec-card {
      background: white;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      padding: 1.5rem;
      text-align: center;
    }

    .rec-card h3 {
      color: #333;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }

    .rec-card p:first-of-type {
      color: #667eea;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .rec-card p:last-of-type {
      color: #666;
      font-size: 0.9rem;
    }

    .page-footer {
      text-align: center;
      padding: 2rem;
      background: #f8f9fa;
      border-radius: 8px;
      color: #666;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }

      .generators-grid {
        grid-template-columns: 1fr;
      }

      .recommendation-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class OverviewComponent {
  generators: Generator[] = [
    {
      name: 'ng-openapi-gen',
      description: 'OpenAPI client generator specifically designed for Angular applications',
      route: 'ng-openapi-gen',
      color: '#dd0031',
      npm: 'ng-openapi-gen',
      stars: {
        easeOfUse: 5,
        angularIntegration: 5,
        codeQuality: 5,
        customization: 3
      },
      pros: [
        'Built specifically for Angular',
        'Clean, readable code output',
        'Easy to integrate'
      ],
      cons: [
        'Only supports OpenAPI 3.0+',
        'Limited customization options'
      ]
    },
    {
      name: 'Orval',
      description: 'REST client generator for TypeScript with a focus on developer experience',
      route: 'orval',
      color: '#7c3aed',
      npm: 'orval',
      stars: {
        easeOfUse: 4,
        angularIntegration: 4,
        codeQuality: 5,
        customization: 5
      },
      pros: [
        'Highly configurable',
        'Supports multiple frameworks',
        'Excellent TypeScript support'
      ],
      cons: [
        'Configuration can be complex',
        'Learning curve for advanced features'
      ]
    },
    {
      name: 'OpenAPI Generator',
      description: 'Industry-standard code generator supporting 50+ languages and frameworks',
      route: 'openapi-generator',
      color: '#0ea5e9',
      npm: '@openapitools/openapi-generator-cli',
      stars: {
        easeOfUse: 3,
        angularIntegration: 4,
        codeQuality: 3,
        customization: 5
      },
      pros: [
        'Industry standard tool',
        'Massive language/framework support',
        'Very flexible and customizable'
      ],
      cons: [
        'Requires Java (JVM) to run — not Node.js',
        'Can generate verbose code',
        'Steep learning curve for customization'
      ]
    },
    {
      name: 'NSwag',
      description: 'Swagger/OpenAPI toolchain for .NET and TypeScript',
      route: 'nswag',
      color: '#10b981',
      npm: 'nswag',
      stars: {
        easeOfUse: 3,
        angularIntegration: 4,
        codeQuality: 4,
        customization: 4
      },
      pros: [
        'Excellent type safety with classes',
        'Robust error handling',
        'Good for .NET + Angular stacks'
      ],
      cons: [
        'Requires .NET runtime — not Node.js',
        'Generates more verbose code',
        'Primarily focused on .NET ecosystem'
      ]
    },
    {
      name: 'Hey API',
      description: 'TypeScript-first OpenAPI client generator with Angular support via @hey-api/client-angular',
      route: 'hey-api',
      color: '#f59e0b',
      npm: '@hey-api/openapi-ts',
      stars: {
        easeOfUse: 4,
        angularIntegration: 4,
        codeQuality: 5,
        customization: 4
      },
      pros: [
        'Clean, tree-shakable TypeScript output',
        'Angular-native HttpClient and DI',
        'Supports OpenAPI 2.0, 3.0, and 3.1'
      ],
      cons: [
        'Newer tool with smaller community',
        'Angular client is a separate package'
      ]
    }
  ];

  getStars(count: number): string {
    return '⭐'.repeat(count);
  }
}
