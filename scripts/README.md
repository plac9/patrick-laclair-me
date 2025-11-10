# patrick-laclair-me - Utility Scripts

This directory contains utility scripts organized by purpose.

## Directory Organization

### `dev/` - Development Utilities
Scripts for local development environment setup and testing.

- **setup.sh**: Initial development environment setup
- **test.sh**: Run test suites
- **lint.sh**: Code quality checks

### `deploy/` - Deployment Scripts
Scripts for deploying to various environments.

- **deploy.sh**: Main deployment script
- **rollback.sh**: Rollback to previous version
- **health-check.sh**: Post-deployment verification

### `troubleshoot/` - Troubleshooting Utilities
Diagnostic and debugging tools.

- **diagnose.sh**: Run system diagnostics
- **logs.sh**: Aggregate and view logs
- **repair.sh**: Common fix procedures

### `maintenance/` - Maintenance Scripts
Regular maintenance and cleanup tasks.

- **backup.sh**: Backup procedures
- **cleanup.sh**: Cleanup old files/data
- **update.sh**: Update dependencies

## Usage

All scripts should be run from the project root directory:

```bash
# Example:
./scripts/dev/setup.sh
./scripts/deploy/deploy.sh production
./scripts/troubleshoot/diagnose.sh
```

## Adding New Scripts

When adding new scripts:
1. Place in appropriate subdirectory
2. Make executable: `chmod +x script.sh`
3. Add description to this README
4. Document usage in script comments

---

**Note**: All scripts assume they're run from project root directory.
