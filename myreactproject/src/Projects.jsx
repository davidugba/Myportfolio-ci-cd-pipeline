import React from 'react';

function Projects() {
  const projects = [
    {
      id: 'aws-static-website',
      name: 'Production Static Website on AWS',
      description: 'Deployed a highly available static website using AWS S3, CloudFront CDN for global distribution, Route 53 for DNS management, and ACM for SSL/TLS certificates. Implemented automated CI/CD pipeline with GitHub Actions for continuous deployment. Achieved ~$1.50/month hosting cost with 99.99% uptime.',
      html_url: 'https://github.com/davidugba/Myportfolio',
      homepage: 'https://davidugba.com',
      language: 'Infrastructure',
      technologies: ['AWS S3', 'CloudFront', 'Route 53', 'ACM', 'GitHub Actions', 'Terraform'],
      stargazers_count: 0,
      fork: false,
      featured: true
    },
    {
      id: 'cicd-pipeline',
      name: 'Automated CI/CD Pipeline',
      description: 'Built a complete CI/CD pipeline using GitHub Actions that automatically builds, tests, and deploys React applications to AWS S3 with CloudFront cache invalidation on every push to master branch.',
      html_url: 'https://github.com/davidugba/Myportfolio/blob/master/.github/workflows/deploy.yml',
      homepage: 'https://github.com/davidugba/Myportfolio/actions',
      language: 'DevOps',
      technologies: ['GitHub Actions', 'AWS CLI', 'S3', 'CloudFront', 'YAML'],
      stargazers_count: 0,
      fork: false,
      featured: true
    },
    {
      id: 'terraform-iac',
      name: 'Infrastructure as Code (IaC)',
      description: 'Defining complete AWS infrastructure as code using Terraform for reproducible, version-controlled cloud environment provisioning. Includes VPC setup, security groups, S3 buckets, and CloudFront distributions.',
      html_url: 'https://github.com/davidugba',
      homepage: '',
      language: 'Terraform',
      technologies: ['Terraform', 'AWS', 'IaC', 'HCL', 'Git'],
      stargazers_count: 0,
      fork: false,
      featured: false,
      inProgress: true
    },
    {
      id: 'aws-serverless-api-terraform',
      name: 'AWS Serverless API with Terraform',
      description: 'Production-style serverless API using AWS Lambda, API Gateway, DynamoDB, and IAM, all managed with Terraform. Built a secure, scalable serverless API with full infrastructure as code. Automated deployment, least-privilege IAM, and real AWS validation.',
      html_url: 'https://github.com/davidugba/aws-serverless-api-terraform',
      homepage: '',
      language: 'Infrastructure',
      technologies: ['Terraform', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'IAM', 'CloudWatch'],
      featured: true
    },
    {
      id: 'aws-vpc-terraform',
      name: 'AWS VPC Terraform Project',
      description: 'Production-grade VPC foundation with public/private subnets, NAT, route tables, and a private EC2 instance, all provisioned via Terraform. Designed and deployed a resilient, multi-AZ VPC with strict network segmentation. Includes private compute, NAT for secure outbound, and best-practice routing.',
      html_url: 'https://github.com/davidugba/aws-vpc-terraform',
      homepage: '',
      language: 'Networking',
      technologies: ['Terraform', 'AWS VPC', 'Subnets', 'NAT Gateway', 'EC2', 'Security Groups', 'Route 53'],
      featured: true
    },
    {
      id: 'davidugba-website-terraform',
      name: 'David Ugba Website Infrastructure',
      description: 'Infrastructure for a production static website (davidugba.com) using S3, CloudFront, Route 53, and ACM, managed with Terraform. Built a globally distributed, secure static website with automated deployments and custom domain. Features CDN, HTTPS, DNS, and cost-optimized hosting.',
      html_url: 'https://github.com/davidugba/davidugba-website-terraform',
      homepage: 'https://davidugba.com',
      language: 'Web Infrastructure',
      technologies: ['Terraform', 'AWS S3', 'CloudFront', 'Route 53', 'ACM', 'WAF', 'GitHub Actions'],
      featured: true
    }
  ];

  return (
    <section id="projects" className="projects-modern">
      <div className="container">
        <div className="projects-header-modern">
          <span className="section-tag">Portfolio</span>
          <h2>Cloud Projects</h2>
          <p className="section-subtitle">Cloud infrastructure projects and DevOps automation</p>
        </div>
        <div className="projects-grid-modern">
          {projects.map((project, index) => {
            // Custom icons for each project
            const getProjectIcon = () => {
              if (project.id === 'aws-static-website') {
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.93 4.93C3.12 6.74 2 9.24 2 12s1.12 5.26 2.93 7.07l1.41-1.41C4.9 16.21 4 14.21 4 12s.9-4.21 2.34-5.66L4.93 4.93zM17.66 6.34C19.1 7.79 20 9.79 20 12s-.9 4.21-2.34 5.66l1.41 1.41C20.88 17.26 22 14.76 22 12s-1.12-5.26-2.93-7.07l-1.41 1.41zM7.76 7.76C6.67 8.85 6 10.35 6 12s.67 3.15 1.76 4.24l1.41-1.41C8.45 14.11 8 13.11 8 12s.45-2.11 1.17-2.83L7.76 7.76zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4.24 1.76C17.33 10.67 18 9.65 18 12s-.67 3.15-1.76 4.24l-1.41-1.41C15.55 13.89 16 12.89 16 12s-.45-2.11-1.17-2.83l1.41-1.41z"/>
                  </svg>
                );
              } else if (project.id === 'cicd-pipeline') {
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                );
              } else if (project.id === 'terraform-iac') {
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                  </svg>
                );
              } else if (project.id === 'aws-serverless-api-terraform') {
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                );
              } else if (project.id === 'aws-vpc-terraform') {
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                  </svg>
                );
              } else if (project.id === 'davidugba-website-terraform') {
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                  </svg>
                );
              }
              return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z"/>
                </svg>
              );
            };

            return (
            <div key={project.id} className={`project-card-modern ${project.featured ? 'featured' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card-header">
                <div className="project-icon">
                  {getProjectIcon()}
                </div>
                <div className="card-actions">
                  {project.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                  {project.inProgress && (
                    <span className="progress-badge">In Progress</span>
                  )}
                </div>
              </div>
              
              <div className="card-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              
              <div className="card-footer">
                <div className="tech-stack">
                  {project.technologies && project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                  {project.technologies && project.technologies.length > 4 && (
                    <span className="tech-badge">+{project.technologies.length - 4}</span>
                  )}
                </div>
                
                <div className="card-links">
                  {project.homepage && project.homepage.trim() !== '' && (
                    <a 
                      href={project.homepage} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="link-demo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                      {project.inProgress ? 'coming soon' : 'view project'}
                    </a>
                  )}
                  {project.html_url && (
                    <a 
                      href={project.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="link-code"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                      </svg>
                      view code
                    </a>
                  )}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
      
      <div className="projects-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
    </section>
  );
}

export default Projects;
