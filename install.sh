#!/usr/bin/env bash
set -euo pipefail

src="$(cd "$(dirname "$0")" && pwd)"

mode="personal"
target=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --personal) mode="personal"; shift ;;
    --project) mode="project"; shift; target="${1:-}"; [[ -n "${1:-}" ]] && shift || true ;;
    --system) mode="system"; shift; target="${1:-}"; [[ -n "${1:-}" ]] && shift || true ;;
    --all) mode="all"; shift; target="${1:-}"; [[ -n "${1:-}" ]] && shift || true ;;
    --help|-h)
      cat <<'EOF'
ProDesign install

  ./install.sh                      personal skill + always-on user rule
  ./install.sh --project [dir]      skill + Cursor rule into a product repo
  ./install.sh --system [dir]       design tokens + states into the product
  ./install.sh --all [dir]          project skill + design system
EOF
      exit 0
      ;;
    *)
      if [[ -z "$target" ]]; then target="$1"; shift; else echo "Unknown arg: $1" >&2; exit 2; fi
      ;;
  esac
done

copy_skill() {
  local dest="$1"
  mkdir -p "$dest"
  for file in SKILL.md README.md AGENTS.md LICENSE package.json install.sh; do
    [[ -f "$src/$file" ]] && cp "$src/$file" "$dest/$file"
  done
  rm -rf "$dest/docs" "$dest/scripts" "$dest/kit" "$dest/rules" "$dest/studio"
  cp -R "$src/docs" "$dest/docs"
  cp -R "$src/scripts" "$dest/scripts"
  cp -R "$src/kit" "$dest/kit"
  cp -R "$src/rules" "$dest/rules"
  cp -R "$src/studio" "$dest/studio"
  chmod +x "$dest/scripts/"*.mjs "$dest/install.sh"
}

install_personal() {
  local dest="${HOME}/.cursor/skills/prodesign"
  mkdir -p "$(dirname "$dest")"
  rm -rf "$dest"
  mkdir -p "$dest"
  copy_skill "$dest"
  mkdir -p "${HOME}/.cursor/rules"
  cp "$src/rules/prodesign.user.mdc" "${HOME}/.cursor/rules/prodesign.mdc"
  echo "ProDesign personal skill: $dest"
  echo "Cursor user rule: ${HOME}/.cursor/rules/prodesign.mdc"
}

install_project() {
  local root="${target:-.}"
  root="$(cd "$root" && pwd)"
  local dest="$root/.cursor/skills/prodesign"
  mkdir -p "$dest"
  copy_skill "$dest"
  mkdir -p "$root/.cursor/rules"
  cp "$src/rules/prodesign.mdc" "$root/.cursor/rules/prodesign.mdc"
  echo "ProDesign project skill: $dest"
  echo "Cursor rule: $root/.cursor/rules/prodesign.mdc"
}

install_system() {
  local root="${target:-.}"
  root="$(cd "$root" && pwd)"
  node "$src/scripts/apply-system.mjs" "$root"
}

case "$mode" in
  personal) install_personal ;;
  project) install_project ;;
  system) install_system ;;
  all) install_project; install_system ;;
esac
