# Matrix Testing & Conditional Build (Assignment)

This project demonstrates:
- Matrix testing on Node.js versions **16, 18, 20**
- Conditional build (only on `main` branch or version tags like `v1.0.0`)
- Test results stored in `test-results/`
- Build artifacts stored in `dist/`
- Manual approval required before build artifact publishing

## 📂 Project Structure
src/ → Source code
test/ → Unit tests (Jest)
.github/ → GitHub Actions workflow (CI/CD)
dist/ → Build output (generated after build)
images/ → CI/CD workflow screenshots

markdown
Copy code

## 🚀 Usage
1. Install dependencies:
   ```bash
   npm install
Run tests:

bash
Copy code
npm test
Build project:

bash
Copy code
npm run build
✅ GitHub Actions Workflow
Tests run on Node 16, 18, 20

Build only runs on main or tags starting with v

Build waits for manual approval in GitHub Environments

🖼️ CI/CD Workflow Results

### 🔹 Tests Passed (Waiting for Approval)
![Tests Passed - Waiting Build Artifact](https://github.com/zaferbaig08/Matrix-Testing-Conditional-Build-Assigement/blob/main/images/test%20pass%20waiting%20build%20artifact.PNG?raw=true)

### 🔹 After Approval (Production Output)
![Production Output](https://github.com/zaferbaig08/Matrix-Testing-Conditional-Build-Assigement/blob/main/images/passed%20prodction%20output.PNG?raw=true)

