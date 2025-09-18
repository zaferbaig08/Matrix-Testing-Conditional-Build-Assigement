# Matrix Testing & Conditional Build (Assignment)

This project demonstrates:
- Matrix testing on Node.js versions **16, 18, 20**
- Conditional build (only on `main` branch or version tags like `v1.0.0`)
- Test results stored in `test-results/`
- Build artifacts stored in `dist/`
- Manual approval required before build artifact publishing

## 📂 Project Structure
```
src/        → Source code
test/       → Unit tests (Jest)
.github/    → GitHub Actions workflow (CI/CD)
dist/       → Build output (generated after build)
```

## 🚀 Usage
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run tests:
   ```bash
   npm test
   ```
3. Build project:
   ```bash
   npm run build
   ```

## ✅ GitHub Actions Workflow
- **Tests** run on Node 16, 18, 20
- **Build** only runs on `main` or tags starting with `v`
- Build waits for **manual approval** in GitHub Environments
