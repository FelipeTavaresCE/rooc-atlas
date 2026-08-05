# ROOC Atlas — GitHub Copilot Development Instructions

## 1. Project Goals
- Preserve ROOC Atlas as a reliable, production-grade companion platform.
- Prioritize consistency, maintainability, and delivery quality in every change.
- Keep Pull Requests focused, minimal, and aligned with domain requirements.

## 2. Domain Accuracy (Critical)
- **Never invent Ragnarok game mechanics.**
- **Never fabricate builds.**
- **Never fabricate equipment data.**
- When information is uncertain or unavailable, **prefer clear placeholders instead of inaccurate information**.
- Mark placeholders explicitly and keep them isolated so they can be replaced by validated content.

## 3. Architecture Philosophy
- Build with clear boundaries and low coupling.
- **Always separate:**
  - **Presentation** (UI rendering, styling, interaction)
  - **Content** (copy, labels, static/game reference content)
  - **Domain** (rules, calculations, entities, business logic)
- Do not mix domain logic directly inside presentational components.
- Keep data flow predictable and explicit.

## 4. Folder Organization
- Keep folder structure explicit by responsibility (presentation/content/domain/shared).
- Place files near their feature context, while keeping reusable units centralized.
- Avoid dumping unrelated utilities/components into generic folders.
- Prefer incremental reorganization over large disruptive moves.

## 5. Reusability and Duplication
- **Always reuse existing components** before creating new ones.
- **Avoid duplicate code** (logic, markup, styles, constants, and transformations).
- If duplication appears, extract shared utilities/components/hooks/types with clear ownership.
- Prefer composition over copy-paste.

## 6. Component Design
- Keep components small, cohesive, and single-purpose.
- Separate container/orchestration concerns from pure presentational concerns when complexity grows.
- Define explicit and minimal props contracts.
- Ensure components are resilient to missing/placeholder content.

## 7. TypeScript Standards
- Use strict, explicit typing for domain entities and public APIs.
- Avoid `any`; use precise types, unions, generics, and narrowing.
- Model invalid/unknown states intentionally (e.g., nullable/optional with explicit handling).
- Keep domain types centralized and reusable.

## 8. Accessibility (A11y)
- Ensure semantic HTML structure and meaningful landmarks.
- Provide accessible names for interactive elements.
- Preserve keyboard navigation and visible focus states.
- Do not rely solely on color to convey meaning.
- Keep ARIA usage minimal and correct; prefer native semantics first.

## 9. Responsive Design
- Design mobile-first and scale progressively.
- Support common viewport ranges without layout breakage.
- Prevent content clipping/overflow issues in critical flows.
- Keep spacing and typography consistent across breakpoints.

## 10. Performance
- Avoid unnecessary re-renders and expensive computations in render paths.
- Use lazy loading/splitting patterns where they improve user experience.
- Keep bundle impact small when introducing dependencies.
- Prefer efficient data structures and memoization only when justified.

## 11. Naming Conventions
- Use clear, descriptive, domain-aligned names.
- Keep naming consistent across files, symbols, components, and types.
- Avoid ambiguous abbreviations unless established in the codebase/domain.

## 12. Dark Mode Support
- New UI must work in both light and dark themes.
- Use design tokens/theme variables instead of hardcoded colors.
- Ensure contrast and readability in both modes.

## 13. Animation Guidelines
- Use animation only when it improves comprehension or feedback.
- Keep motion subtle, fast, and non-blocking.
- Respect reduced-motion preferences.
- Avoid decorative animations that degrade performance or accessibility.

## 14. Documentation Expectations
- Update relevant documentation when behavior, architecture, or usage changes.
- Keep PR descriptions objective: what changed, why, and impact.
- Document assumptions and unresolved placeholders explicitly.

## 15. Code Quality and Review Discipline
- Keep changes scoped to the task; do not modify unrelated code.
- Validate behavior before finalizing (tests/lint/build when applicable).
- Confirm no regressions in affected areas.
- **Always perform a complete self-review before considering the Pull Request finished.**
  - Re-read diffs for correctness and clarity.
  - Verify alignment with domain accuracy rules.
  - Verify separation of presentation/content/domain.
  - Verify reuse and duplication constraints.

## 16. Future Scalability
- Prefer patterns that support growth in features, data volume, and contributors.
- Design extensions without requiring broad rewrites.
- Keep boundaries explicit so future modules can evolve independently.

## 17. Pull Request Completion Standard
- A task is only complete when:
  - Requested change is fully implemented.
  - Self-review is complete.
  - Output remains consistent with these instructions.
