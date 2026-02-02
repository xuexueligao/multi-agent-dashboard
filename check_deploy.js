#!/usr/bin/env node

// Simple script to check Vercel deployment status
const { execSync } = require('child_process');

try {
  console.log('Checking Vercel deployment status...');
  
  // Run vercel status command
  const output = execSync('npx vercel status', { 
    cwd: __dirname,
    encoding: 'utf8',
    timeout: 30000 
  });
  
  console.log('Deployment status:');
  console.log(output);
  
  // Also try to get the deployment URL
  try {
    const info = execSync('npx vercel --cwd .', { 
      cwd: __dirname,
      encoding: 'utf8',
      timeout: 30000 
    });
    console.log('Project info:');
    console.log(info);
  } catch (infoErr) {
    console.log('Could not retrieve project info:', infoErr.message);
  }
} catch (error) {
  console.error('Error checking deployment status:', error.message);
  console.log('This is expected if the deployment is still in progress.');
}