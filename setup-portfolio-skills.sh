#!/usr/bin/env bash
#
# setup-portfolio-skills.sh
#
# Installs a curated set of Claude Code skills into THIS project only
# (.claude/skills/), so they never load in your other repos and never
# add to token usage outside this folder.
#
# USAGE:
#   cd ~/path/to/your-portfolio-project
#   bash setup-portfolio-skills.sh
#
# Requires: git, node/npm (only needed if you enable the optional
# ui-ux-pro-max block below), and Claude Code itself:
#   npm install -g @anthropic-ai/claude-code
#
# Every skill below is copied verbatim from the source repo into
# .claude/skills/<name>/ in your project. Read each SKILL.md before
# trusting it — see the note at the bottom of this file.

set -euo pipefail

PROJECT_ROOT="$(pwd)"
SKILLS_DIR="$PROJECT_ROOT/.claude/skills"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

echo "Installing Claude Code skills into: $SKILLS_DIR"
mkdir -p "$SKILLS_DIR"

# ---------------------------------------------------------------------------
# 1. Anthropic — frontend-design
#    General, well-tested guidance for distinctive, non-templated UI.
#    Good baseline for almost any web project.
# ---------------------------------------------------------------------------
echo "[1/3] anthropics/skills -> frontend-design"
git clone --depth 1 https://github.com/anthropics/skills "$TMP_DIR/anthropic-skills" -q
cp -r "$TMP_DIR/anthropic-skills/skills/frontend-design" "$SKILLS_DIR/frontend-design"

# ---------------------------------------------------------------------------
# 2. Vercel — web-design-guidelines + composition-patterns
#    web-design-guidelines: accessibility/UX audit (100+ rules) — this one
#    fetches its rule list live from Vercel's repo each time it runs, so it
#    needs network access and always reflects Vercel's current guidelines.
#    composition-patterns: component architecture patterns.
#    react-best-practices is included too, but ONLY keep it if your
#    portfolio is actually React/Next — otherwise its performance rules
#    are irrelevant and just add dead weight. Delete the line to skip it.
# ---------------------------------------------------------------------------
echo "[2/3] vercel-labs/agent-skills -> web-design-guidelines, composition-patterns, react-best-practices"
git clone --depth 1 https://github.com/vercel-labs/agent-skills "$TMP_DIR/vercel-skills" -q
cp -r "$TMP_DIR/vercel-skills/skills/web-design-guidelines" "$SKILLS_DIR/web-design-guidelines"
cp -r "$TMP_DIR/vercel-skills/skills/composition-patterns" "$SKILLS_DIR/composition-patterns"
cp -r "$TMP_DIR/vercel-skills/skills/react-best-practices" "$SKILLS_DIR/react-best-practices"
# Not using React/Next? Run this and delete the line above next time:
#   rm -rf "$SKILLS_DIR/react-best-practices"

# ---------------------------------------------------------------------------
# 3. OPTIONAL — nextlevelbuilder/ui-ux-pro-max-skill
#    Large style/palette/typography database. It overlaps a lot with #1
#    and #2 (three sources of "how should this look" opinions can actually
#    give Claude *conflicting* guidance, not just cost more tokens).
#    Uncomment only if you specifically want its style/palette catalog.
# ---------------------------------------------------------------------------
# echo "[optional] ui-ux-pro-max"
# npx ui-ux-pro-max-cli init --ai claude   # installs scoped to this project by default

# ---------------------------------------------------------------------------
# 4. OPTIONAL — mattpocock/skills
#    This is mostly TDD / debugging / architecture workflow skills, not
#    design skills — useful once the portfolio has real logic or tests,
#    less useful for a mostly-static site. It ships its own picker so you
#    only take what you want instead of all 50+ skills:
# ---------------------------------------------------------------------------
# npx -y skills add mattpocock/skills --agent claude-code

echo ""
echo "Done. Project-scoped skills installed:"
ls -1 "$SKILLS_DIR"
echo ""
echo "Next steps:"
echo "  1. Review each .claude/skills/*/SKILL.md before you trust it."
echo "  2. Run 'claude' from inside this project folder and accept the"
echo "     workspace trust prompt — these skills only load here, never"
echo "     in other projects."
echo "  3. daisyUI is a component LIBRARY, not a Claude skill — install it"
echo "     as an actual project dependency instead:"
echo "       npm install -D daisyui"
