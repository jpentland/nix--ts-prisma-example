Quick prisma example with typescript and nix-shell

# Installing Nix package manager
Follow instructions at: https://nixos.org/download
Or for archlinux specific: https://wiki.archlinux.org/title/Nix

# Add channel
For this example, the nixpkgs 23.05 release was used, so this
channel should be added:

```bash
nix-channel --add https://channels.nixos.org/nixos-23.05 nixpkgs
nix-channel --update
```

# Start nix-shell
To avoid polluting your environment with your local system, we
will use a pure shell. This means only packages defined in the
shell.nix will be used:

```bash
nix-shell --pure
```

This will download all dependencies including nodejs and prisma
engines for nixos.

# Set up and run the project

```bash
npm install
npm run migrate
npm run start
```
