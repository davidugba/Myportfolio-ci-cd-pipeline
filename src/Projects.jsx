import React from 'react';

function Projects() {
  const projects = [
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
              if (project.id === 'cicd-pipeline') {
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
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
