# My Portfolio with CI/CD Pipeline

This project is a modern, cloud-ready portfolio website built with React and deployed using a robust CI/CD pipeline on AWS (S3 & CloudFront). It showcases my web development and DevOps skills, featuring automated deployments, infrastructure as code, and best practices for cloud hosting.

## Features

- ⚡ Modern React single-page application
- 🚀 Automated CI/CD pipeline using GitHub Actions
- ☁️ Deployment to AWS S3 (static hosting) and CloudFront (CDN)
- 🔒 Secure secrets management with GitHub Actions
- 🛠️ Infrastructure as Code (Terraform for AWS resources)
- 📦 Automated build, test, and deployment steps

## Technologies Used

- React, JavaScript, HTML, CSS
- AWS S3, CloudFront
- GitHub Actions (CI/CD)
- Terraform (optional, for infrastructure)
- Node.js, npm

## CI/CD Pipeline Overview

- On every push to the `master` branch:
  - Code is checked out and dependencies installed
  - The React app is built
  - Build artifacts are synced to S3
  - CloudFront cache is invalidated for instant updates

See [.github/workflows/deploy.yml](.github/workflows/deploy.yml) for details.

## Getting Started

1. Clone the repo:
	```
	git clone https://github.com/davidugba/My-portfolio-ci-cd-pipeline.git
	```
2. Install dependencies:
	```
	cd myreactproject
	npm install
	```
3. To run locally:
	```
	npm start
	```

## Deployment

Deployment is fully automated via GitHub Actions. On push to `master`, the workflow:
- Builds the app
- Deploys to S3
- Invalidates CloudFront

**AWS credentials and resource IDs are managed as GitHub secrets.**

## Infrastructure as Code

Terraform scripts (if included) are in the `infrastructure/` folder. Use them to provision AWS resources.

## Screenshots

_Add screenshots of your portfolio here!_

## License

MIT
